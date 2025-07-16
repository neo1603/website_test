#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download placeholder images for different sections
echo "Downloading placeholder images..."

# Hero section
curl -s -o public/images/hero-bg.jpg "https://picsum.photos/1200/800?random=1"
curl -s -o public/images/hero-property.jpg "https://picsum.photos/800/600?random=2"

# Project images
curl -s -o public/images/green-valley.jpg "https://picsum.photos/400/300?random=3"
curl -s -o public/images/royal-heights.jpg "https://picsum.photos/400/300?random=4"
curl -s -o public/images/dream-city.jpg "https://picsum.photos/400/300?random=5"
curl -s -o public/images/heritage-gardens.jpg "https://picsum.photos/400/300?random=6"
curl -s -o public/images/sunshine-colony.jpg "https://picsum.photos/400/300?random=7"
curl -s -o public/images/lake-view.jpg "https://picsum.photos/400/300?random=8"

# Award images
curl -s -o public/images/award-1.jpg "https://picsum.photos/400/300?random=9"
curl -s -o public/images/award-2.jpg "https://picsum.photos/400/300?random=10"
curl -s -o public/images/award-3.jpg "https://picsum.photos/400/300?random=11"

# Achievement images
curl -s -o public/images/achievement-1.jpg "https://picsum.photos/400/300?random=12"
curl -s -o public/images/achievement-2.jpg "https://picsum.photos/400/300?random=13"
curl -s -o public/images/achievement-3.jpg "https://picsum.photos/400/300?random=14"
curl -s -o public/images/achievement-4.jpg "https://picsum.photos/400/300?random=15"

# Celebration images
curl -s -o public/images/celebration-1.jpg "https://picsum.photos/400/300?random=16"
curl -s -o public/images/celebration-2.jpg "https://picsum.photos/400/300?random=17"
curl -s -o public/images/celebration-3.jpg "https://picsum.photos/400/300?random=18"
curl -s -o public/images/celebration-4.jpg "https://picsum.photos/400/300?random=19"

# Service images
curl -s -o public/images/residential-plots.jpg "https://picsum.photos/400/300?random=20"
curl -s -o public/images/commercial-properties.jpg "https://picsum.photos/400/300?random=21"
curl -s -o public/images/luxury-villas.jpg "https://picsum.photos/400/300?random=22"
curl -s -o public/images/construction-services.jpg "https://picsum.photos/400/300?random=23"
curl -s -o public/images/property-management.jpg "https://picsum.photos/400/300?random=24"
curl -s -o public/images/investment-advisory.jpg "https://picsum.photos/400/300?random=25"

echo "All placeholder images downloaded successfully!" 