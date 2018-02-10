function Change2VerticalFormat(image_id){
    console.log('executing Change2VerticalFormat()');
    $("div.col-sm-3").removeClass("col-sm-3").addClass("col-3");
    window.location.href = "#"+image_id;
}