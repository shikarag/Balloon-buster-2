var red_ballon, blue_ballon, green_ballon, pink_ballon;

var background, background_Image;

var red_ballonImage, blue_ballonImage, green_ballonImage, pink_ballonImage;

var bow, bow_Image;

var arrow, arrow_Image;

function preload(){
      background_Image = loadImage("background0.png");
     
      red_ballonImage = loadImage("red_balloon0.png");
      blue_ballonImage = loadImage("blue_balloon0.png");
      green_ballonImage = loadImage("green_balloon0.png");
      pink_ballonImage = loadImage("pink_balloon0.png");
     
      bow_Image = loadImage("bow0.png");
      arrow_Image = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
      background = createSprite(0,0, 600, 600);
      background.addImage(background_Image);
      background.scale = 2.5;
  
      bow = createSprite (480, 220, 20, 50);
      bow.addImage(bow_Image);
      bow.scale = 1;
  
      arrow = createSprite (480, bow.y, 20, 50);
      arrow.addImage(arrow_Image);
      arrow.scale = 0.2;
  
      for(var i=80;i<390;i=i+60){
          red_ballon = createSprite(50, i, 2, 2);
          red_ballon.addImage(red_ballonImage);
          red_ballon.scale = 0.08;
      }
  
      for(var i=130;i<390;i=i+60){
          blue_ballon = createSprite(100, i, 10, 10);
          blue_ballon.addImage(blue_ballonImage);
          blue_ballon.scale = 0.09;
      }
  
      for(var i=180;i<390;i=i+60){
          green_ballon = createSprite(150, i, 10, 10);
          green_ballon.addImage(green_ballonImage);
          green_ballon.scale = 0.075;
      }
  
      for(var i=230;i<390;i=i+60){
          pink_ballon = createSprite(200, i, 10, 10);
          pink_ballon.addImage(pink_ballonImage);
          pink_ballon.scale = 1;
      }
  
  
}


function draw() {

   background.velocityX = -3;
       if (background.x < 0){
           background.x = background.width/2;
       }
 
        bow.y = World.mouseY;
        console.log(bow.y);
  
        arrow.y = World.mouseY;
  
        if (keyDown("space")){
            arrow.velocityX = -4;
        }
  
        if (arrow.x < 0){
            arrow.x = 480;
            arrow.velocityX = 0;
        }
  
drawSprites();
}

