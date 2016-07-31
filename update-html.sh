# Use this to upload web site files.
aws s3 cp . s3://sydney-keithpe8935 --recursive --exclude "*.*" --include "*.html"

