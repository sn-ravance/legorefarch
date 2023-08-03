#!/bin/bash

# Array of files to process
files_to_process=(
  "/Users/robvance/Documents/GitHub/legorefarch/src/App.js"
  "/Users/robvance/Documents/GitHub/legorefarch/src/App.css"
  "/Users/robvance/Documents/GitHub/legorefarch/src/components/Swimlane.js"
  "/Users/robvance/Documents/GitHub/legorefarch/src/components/Block.js"
  "/Users/robvance/Documents/GitHub/legorefarch/src/components/Lane.js"
  # Add more file paths here as needed
)

# Function to add a file's filename to legorefarch.txt and append its content
function add_file_to_code {
    echo "Adding $1's filename to legorefarchv1.txt"
    echo "$1" >> legorefarchv1.txt
    pbcopy < "$1" && pbpaste >> legorefarchv1.txt
    echo "Adding a blank row to legorefarchv1.txt"
    echo "" >> legorefarchv1.txt
}

# Loop through the files in the array and call the function for each file
for file in "${files_to_process[@]}"; do
    if [ -f "$file" ]; then
        add_file_to_code "$file"
    fi
done
echo "Copied code into the clipboard"
pbcopy < legorefarchv1.txt
