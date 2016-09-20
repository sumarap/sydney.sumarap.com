# Use this to upload web site files.
#aws s3api create-bucket --bucket sydney.sumarap.com --region us-west-2 --create-bucket-configuration LocationConstraint=us-west-2
aws s3 cp . s3://sydney.sumarap.com --recursive --exclude ".git/*" --exclude "*.sh" --exclude ".DS*"

