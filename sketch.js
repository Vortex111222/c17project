var box
function setup() 
{
  createCanvas(400, 400);
  box = new Box (100,200,20,20,2)
  box2 = new Box (100,300,20,20,2)
}

function draw() 
{
  background(220);
box.show ()
box.move()
box2.show()
box2.move ()
}

