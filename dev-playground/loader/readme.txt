2018-09-14
Create a loading 'spinner' graphic to display
while waiting for page to fully load.
I wanted this for sydney.sumarap.com, so user
doesn't see empty picture outlines while (many) pictures load

Because everything happens so fast, this test uses the function
'imageLoaded()' to first set spinner visible and content hidden,
then setTimeOut() waits for a few seconds and then sets content
to visible and spinner to hidden.
