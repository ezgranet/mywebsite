#!/bin/bash

# Start with the original file
original_file="lsb21.css"

# Check if the original file exists
if [ ! -f "$original_file" ]; then
    echo "Error: $original_file does not exist!"
    exit 1
fi

# Create 10 copies with decreasing numbers
for i in {20..11}; do
    new_filename="lsb${i}.css"
    cp "$original_file" "$new_filename"
    echo "Created $new_filename"
done