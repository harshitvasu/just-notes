#!/bin/bash

# Check if input file path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <relative_file_path>"
    exit 1
fi

# Define paths
input_file="$1"
input_dir=$(dirname "$input_file")
input_basename=$(basename "$input_file" .md)  # Extract base name without .md extension
css_file="style.css"
long_css_file="long-style.css"
js_file="toggleParagraphs.js"
output_file="$input_dir/$input_basename.html"  # Create output file name

# Calculate relative paths for CSS and JavaScript files based on the depth of input file's directory
input_dir_depth=$(awk -F"/" '{print NF-1}' <<< "$input_dir")
for (( i=0; i<$input_dir_depth; i++ )); do
    css_file="../$css_file"
    long_css_file="../$long_css_file"
    js_file="../$js_file"
done

# Convert markdown to HTML using pandoc
html_content=$(pandoc -f markdown -t html "$input_file")

# Create HTML file with imported CSS and JavaScript
cat > "$output_file" <<EOF
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <title>Generated HTML</title>
    <link rel="stylesheet" type="text/css" href="$css_file">
    <link rel="stylesheet" type="text/css" href="$long_css_file">
    <script type="text/javascript" src="$js_file" defer></script>
</head>
<body for="html-export">
  <div class="crossnote markdown-preview">
    $html_content
  </div>
</body>
</html>
EOF

echo "HTML page created successfully at $output_file"
