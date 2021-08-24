var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairyImage1.png", "images/fairyImage2.png");
	//fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(600, 550);

	//write code to play fairyVoice sound


	//create fairy sprite and add animation for fairy
    fairy = createSprite(450,100);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	star = createSprite(450,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(450 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 450 && starBody.position.y > 450){
	  Matter.Body.setStatic(starBody, true);
  }
  star.y = fairy.y;
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
    if(keyDown("right_arrow")){
        fairy.x = fairy.x + 20;
	}
	if(keyDown("left_arrow")){
        fairy.x = fairy.x - 20;
	}
	if(keyDown("up_arrow")){
        fairy.y = fairy.y - 20;
	}
	if(keyDown("down_arrow")){
        fairy.y = fairy.y + 20;
	}
}
