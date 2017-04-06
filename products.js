function dofirst(){


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.font = '20pt Arial' ;
context.fillSyle = '#92290B' ;
context.strokeStyle = '#92290B';
context.fillText("Address and Timing Details",550,50);
context.strokeRect(500,20,390,60);




/*


var img = new Image();
img.onload = function () {
    context2.drawImage(img, 120, 320,300*2,200);  /// (src,x,y,with,height)
}
img.src = "img/1.jpg";

*/



}
window.addEventListener("load",dofirst,false);




