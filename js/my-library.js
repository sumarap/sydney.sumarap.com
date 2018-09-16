function Change2VerticalFormat(image_id){
    //console.log('executing Change2VerticalFormat()');
    if ( $("div").hasClass("col-sm-3") ){
        $("div.col-sm-3").removeClass("col-sm-3").addClass("col-lg-12");
    } else if ( $("div").hasClass("col-lg-12") ) {
        $("div.col-lg-12").removeClass("col-lg-12").addClass("col-sm-3");
    }
    window.location.href = "#"+image_id;
}

function imageLoaded() {
  // Turn off loader image
  document.getElementById("loaderCase").style.display = 'none';
  document.getElementById("loader").style.display = 'none';
  // Turn on div with loaded images
  if (document.getElementById("siteBanner")){
    document.getElementById("siteBanner").style.display = 'block';
  }
  document.getElementById("content").style.display = 'block';
}
