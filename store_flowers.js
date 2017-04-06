function dofirst(){
var temp=239+90

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.font = '10pt Arial' ;
context.fillSyle = '#92290B' ;
context.strokeStyle = '#92290B';
context.fillText("Flowers",20,50);


///  drawing the images 
context.strokeRect(10,20,80,50);

context.strokeRect(10,100,200,300);

context.strokeRect(10+temp,100,200,300);
context.strokeRect(10+temp*2,100,200,300);
context.strokeRect(10+temp*3,100,200,300);





// drawing the prices 


context.strokeRect(10,20,80,50);

context.strokeRect(10+temp*0,200,200,300);

context.strokeRect(10+temp*1,200,200,300);
context.strokeRect(10+temp*2,200,200,300);
context.strokeRect(10+temp*3,200,200,300);

context.fillText("Vase with Assorted Flowers",26+temp*0,430);
context.fillText("User Rating : 4.5 / 5",26+temp*0,430+35);

context.fillText("Hand Bouquet of Red Roses",26+temp*1,430);
context.fillText("User Rating : 4.0 / 5",26+temp*1,430+35);

context.fillText("Vase with Red and white Flowers",26+temp*2,430);
context.fillText("User Rating : 4.1 / 5",26+temp*2,430+35);

context.fillText("Red Queen Flowers",26+temp*3,430);  
context.fillText("User Rating : 4.8 / 5",26+temp*3,430+35);  



var img1 = new Image();
img1.onload = function () {
    context.drawImage(img1, 11,105,195,290);  /// (src,x,y,with,height)


}
img1.src = "img/b.jpg";



var img2 = new Image();
img2.onload = function () {
   context.drawImage(img2, 11+temp,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img2.src = "img/a.jpg";

var img3 = new Image();
img3.onload = function () {
   context.drawImage(img3, 11+temp*2,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img3.src = "img/c.jpg";

var img4 = new Image();
img4.onload = function () {
   context.drawImage(img4, 11+temp*3,105,195,290);  /// (src,x,y,with,height)
//    context.drawImage(img, 250,105,195,290);  /// (src,x,y,with,height)

}
img4.src = "img/d.jpg";







}
window.addEventListener("load",dofirst,false);




