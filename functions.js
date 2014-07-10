/* -------- Screen width -------- */

var availwidth = window.screen.width;
var availheight = window.screen.height;

$( "h1.info" ).text(
  + availwidth + "x" + availheight );


/* -------- Vertical lines -------- */

var vertClones = availwidth/100;
var el = $("#vert");
for (i=0 ; i<vertClones ; i++) {
    var newEl = el.clone();
    $("#contain__vert").append(newEl);
}

/* -------- Horizontal lines -------- */

var horizClones = availheight/100;
var ab = $("#horiz");
for (i=0 ; i<horizClones ; i++) {
    var newAb = ab.clone();
    $("#contain__horiz").append(newAb);
}



