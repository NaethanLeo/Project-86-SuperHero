canvas = new fabric.Canvas("myCanvas");

plX = 15;
plY = 15;

blkW = 30;
blkH = 30;

var plObj = "";
var BodyObj = "";

function plUpdate(){
   fabric.Image.fromURL("player.png", function(Img){
       plObj = Img;
       plObj.scaleToWidth(150);
       plObj.scaleToHeight(150);

       plObj.set({
           top : plY, left : plX 
       });
       canvas.add(plObj);
   }) 
}

function newBodyImg(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        bodyObj = Img;
        bodyObj.scaleToWidth(blkW);
        bodyObj.scaleToHeight(blkH);
 
        bodyObj.set({
            top : plY, left : plX 
        });
        canvas.add(bodyObj);
    }) 
 }