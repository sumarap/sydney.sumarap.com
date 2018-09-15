# Use this to upload web site files.
aws s3 cp . s3://sydney.sumarap.com --recursive --exclude "*.*" --include "*.html" --include "*.js" --include "*.css"

