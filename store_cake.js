function dofirst(){
var temp=239+90

var canvas = document.getElementById('canvas2');
var context = canvas.getContext('2d');
var context_title = canvas.getContext('2d');
context.font = '10pt Arial' ;
context.fillSyle = '#92290B' ;
context.strokeStyle = '#92290B';
context.fillText("cakes",16,50);

/*     Drawing the images      */
context.strokeRect(10,20,80,50);

context.strokeRect(10,100,200,300);

context.strokeRect(10+temp,100,200,300);
context.strokeRect(10+temp*2,100,200,300);
context.strokeRect(10+temp*3,100,200,300);

/**   drawing the prices          */

context.strokeRect(10,20,80,50);

context.strokeRect(10,200,200,300);

context.strokeRect(10+temp,200,200,300);
context.strokeRect(10+temp*2,200,200,300);
context.strokeRect(10+temp*3,200,200,300);


context.fillText("Chocolate KitKat cake 500gms",26+temp*0,430);
context.fillText("User Rating : 4.1 / 5",26+temp*0,430+35);

context.fillText("Baked cherry cheese cake",26+temp*1,430);
context.fillText("User Rating : 4.9 / 5",26+temp*1,430+35);

context.fillText("Banofee pie 1kg",26+temp*2,430);
context.fillText("User Rating : 4.3 / 5",26+temp*2,430+35);

context.fillText("Butterscotch 500gms",26+temp*3,430);  
context.fillText("User Rating : 4.2 / 5",26+temp*3,430+35);  





var img1 = new Image();
img1.onload = function () {
   context.drawImage(img1, 11,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img1.src = "img/download.jpg";



var img2 = new Image();
img2.onload = function () {
   context.drawImage(img2, 11+temp,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img2.src = "img/baked-cherry-cheese-cake.jpg";

var img3 = new Image();
img3.onload = function () {
   context.drawImage(img3, 11+temp*2,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img3.src = "img/banofee-pie.jpg";

var img4 = new Image();
img4.onload = function () {
   context.drawImage(img4, 11+temp*3,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img4.src = "img/cake_PNG13105.png" ;











}
window.addEventListener("load",dofirst,false);


