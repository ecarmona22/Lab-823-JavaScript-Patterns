window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var x, y, dx, dy, radius;
var b1,b2,b3;

function ballFactory(rad){
  var Ball = {
    radius:rad,
    xLoc: Math.random()*window.innerWidth,
    yLoc:Math.random()*window.innerHeight,
    dx:Math.random()*10-5,
    dy:Math.random()*10-5,

    getDiameter:function(){
      return 2*rad;
    },
    draw:function(){
      ctx.beginPath();
      ctx.arc(this.xLoc,this.yLoc, this.radius, Math.PI*2, 0, false);
      ctx.stroke();

      this.xLoc += this.dx;
      this.yLoc += this.dy;

      if(this.xLoc > window.innerWidth || this.xLoc < 0)  this.dx = -this.dx;
      if(this.yLoc > window.innerHeight || this.yLoc < 0)  this.dy = -this.dy;

    }
  }
  return Ball;
}

// Two:Constructor function:: Simplifies the code above
function Ball(rad){
  this.radius = rad;
  this.xLoc = Math.random()*window.innerWidth;
  this.yLoc = Math.random()*window.innerHeight;
  this.dx = Math.random()*10-5;
  this.dy = Math.random()*10-5;
   this.getDiameter = function(){
     return this.rad*2;
   }
   this.draw= function(){
     ctx.beginPath();
     ctx.arc(this.xLoc,this.yLoc, this.radius, Math.PI*2, 0, false);
     ctx.stroke();

     this.xLoc += this.dx;
     this.yLoc += this.dy;

     if(this.xLoc > window.innerWidth || this.xLoc < 0)  this.dx = -this.dx;
     if(this.yLoc > window.innerHeight || this.yLoc < 0)  this.dy = -this.dy;

   }
}

//  Three:Add a method to the prototype
Ball.prototype.getArea = function () {
  return this.radius*this.radius*Math.PI;
};

// Four:Classical syntax::Hand holding for Java programmers
// Where does the function "getDiameter()" end up?
class ClassyBall{
   constructor(rad){
     this.rad = rad;
     this.xLoc = Math.random()*window.innerWidth;
     this.yLoc = Math.random()*window.innerHeight;
     this.dx = Math.random()*10-5;
     this.dy = Math.random()*10-5;
   }

   getDiameter(){
     return this.rad*2;
   }
   draw(){
     ctx.beginPath();
     ctx.arc(this.xLoc,this.yLoc, this.radius, Math.PI*2, 0, false);
     ctx.stroke();

     this.xLoc += this.dx;
     this.yLoc += this.dy;

     if(this.xLoc > window.innerWidth || this.xLoc < 0)  this.dx = -this.dx;
     if(this.yLoc > window.innerHeight || this.yLoc < 0)  this.dy = -this.dy;


   }

}

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, 1)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context


  x = Math.random()*window.innerWidth;
  y = Math.random()*window.innerHeight;
  dx = Math.random()*10 - 5;
  dy = Math.random()*10 - 5;

  b1 = ballFactory(30);
  b2 = new Ball(20);
  b3 = new ClassyBall(10);
  animate();



}

function animate(){

  radius = 30;
  requestAnimationFrame(animate);//calls function again 30 fps
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.strokeStyle = 'rgba(255,255,255)';
  b1.draw();
  b2.draw();
  b3.draw();

}

//  JavaScript object patterns
//  One:Ball Factory:: Build and return a Ball
