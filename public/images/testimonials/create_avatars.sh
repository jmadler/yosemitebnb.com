#!/bin/bash

# This script creates placeholder avatar images for testimonials
# Requires ImageMagick to be installed

# Array of names
names=("jiung" "valerie" "taras" "apaar" "philipp" "crystal" "nicola" "ellen" "charlotte" "jonathan" "manuel" "rebecca" "laura" "jake" "gretchen" "ankit" "thomas" "anna" "federica" "lauren" "timothy" "vinzenz")

# Colors
colors=("#4CAF50" "#2196F3" "#9C27B0" "#F44336" "#FF9800" "#607D8B" "#E91E63" "#3F51B5" "#009688" "#FFC107" "#795548" "#8BC34A" "#673AB7" "#03A9F4" "#FF5722" "#9E9E9E" "#CDDC39" "#00BCD4" "#FFEB3B" "#FF4081" "#536DFE" "#69F0AE")

# Create images
for i in "${!names[@]}"; do
  name=${names[$i]}
  color=${colors[$i % ${#colors[@]}]}
  
  # Get first letter of name (uppercase)
  first_letter=$(echo ${name:0:1} | tr '[:lower:]' '[:upper:]')
  
  # Create image
  convert -size 200x200 xc:$color -fill white -pointsize 120 -font Arial -gravity center -annotate 0 "$first_letter" "public/images/testimonials/${name}.jpg"
  
  echo "Created avatar for $name"
done

echo "All avatars created!" 