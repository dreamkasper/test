function dosecond(){


var canvas = document.getElementById('canvas2');
var context = canvas.getContext('2d');
context.font = '16pt Arial' ;
context.fillSyle = '#92290B' ;
context.strokeStyle = '#FA1732';
context.fillText("Flowers",510,50);
context.strokeRect(500,20,100,50);



/*


var img = new Image();
img.onload = function () {
    context2.drawImage(img, 120, 320,300*2,200);  /// (src,x,y,with,height)
}
img.src = "img/1.jpg";

*/



}
window.addEventListener("load",dosecond,false);




