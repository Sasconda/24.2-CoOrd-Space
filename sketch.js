//setup - run once when the code is first starts
function setup() {
  createCanvas(1000, 2000); // this sets the size of the area in which we can draw things. We call it a canvas
  textSize(32); // sets the size of the textAscent()
}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  background(22, 100, 200); // this makes the whole canvas the screen grey

  if(mouseX > 300){
  rect(100,100,100,100)
  }

  var vY = 300; //  vertext Y pos
  var Xv = 200;     // virtex x pos
  var cS = 45;     // circle size
  
  ellipse(mouseX, mouseY, 20, 20); // draws a circle 20 pixels accross at location of the mouse pointer
  line(mouseX, mouseY, pmouseX, pmouseY); // draws a line from the mouse pointer, to where the mouse pointer previously was
  
DrawTimeSigil(Xv, vY, cS)
DrawTimeSigil(Xv, 600, cS)
DrawTimeSigil(Xv, 900, cS)
DrawTimeSigil(Xv, 1200, cS)
DrawTimeSigil(Xv, 1500, cS)
DrawTimeSigil(Xv, 1800, cS)
DrawTimeSigil(Xv, 2100, cS)

DrawTimeSigil(-150, vY, cS)
DrawTimeSigil(-150, 600, cS)
DrawTimeSigil(-150, 900, cS)
DrawTimeSigil(-150, 1200, cS)
DrawTimeSigil(-150, 1500, cS)
DrawTimeSigil(-150, 1800, cS)
DrawTimeSigil(-150, 2100, cS)

DrawTimeSigil(550, vY, cS)
DrawTimeSigil(550, 600, cS)
DrawTimeSigil(550, 900, cS)
DrawTimeSigil(550, 1200, cS)
DrawTimeSigil(550, 1500, cS)
DrawTimeSigil(550, 1800, cS)
DrawTimeSigil(550, 2100, cS)


}


function DrawTimeSigil(Xv, vY, cS){    
 
  beginShape();
    
    strokeWeight(5);
    stroke(0);
    fill(170, 120, 0);
    
    vertex(Xv, vY-280); // top left
    vertex(Xv+250, vY-280); //top right 

    vertex(Xv+140,vY-150 ); // middle right
    
    vertex(Xv+250, vY); // bottom right
    vertex(Xv, vY); // bottom left

    vertex(Xv+100,vY-150 ); // middle left
    
    endShape(CLOSE); 

    strokeWeight(2);
    fill(100,);

    circle(Xv+120, vY-230, cS); //top circle
    circle(Xv+120, vY-70, cS); //bottom circle
    
    describe('A Time Sigil.');
 
}  
