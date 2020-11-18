
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,jungle,jungleIMG
var score
var Ground,groundIMG,invicibleGround
var gameOver,gameOverImage
var PLAY = 1
var END = 0
gameState = PLAY
var score = 0
var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  jungleIMG = loadImage("648c177419c9a0eba07bb15e4441d29f.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameOverImage = loadImage("sprite_0.png")
}



function setup() {
  createCanvas(600,400)
  
  jungle = createSprite(190,180.20,50)
  jungle.addImage(jungleIMG)
  jungle.scale = 1.5
  
  Ground = createSprite(200,370,400,10)
  Ground.scale = 3
  Ground.x = 4
  Ground.shapeColor = "green"
  
  monkey = createSprite(60,330,20,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.13
  monkey.collide(Ground)
  console.log(monkey.y)
  
  invicibleGround = createSprite(200,370,800,20)
  invicibleGround.visible = false
  
   obstacleGroup = new Group()
  bananaGroup = new Group()
   
}


function draw() {
background("white")
  if(gameState===PLAY){
    
  if(keyDown("space")&& monkey.y >= 311.59)
  {
    monkey.velocityY = -15
  }
    monkey.velocityY = monkey.velocityY + 0.8
    if(Ground.x < 0)
    {
    Ground.x = Ground.width/2
    score = score + Math.round(getFrameRate()/60);

    }
    obstacles()
    createBanana()
    
    if(monkey.isTouching(bananaGroup)){
      score = score+1
    }
    else if(monkey.isTouching(obstacleGroup)){
      gameState = END
      
      obstacleGroup.destroyEach()
      bananaGroup.destroyEach()
    }
  }
  monkey.collide(invicibleGround)

  drawSprites()
  text("score = "+score,300,100)
    text("SurvivalTime: "+ survivalTime, 500,50);
}
function obstacles(){
  if (frameCount % 90 === 0){
  obstacle = createSprite(560,330,20,50)
  obstacle.x = Math.round(random(1000,120))
  obstacle.addImage(obstacleImage)
   
  obstacle.scale = 0.2
  obstacle.velocityX = -8
  obstacleGroup.add(obstacle)
  }
}
function createBanana(){
  if(frameCount % 50 === 0)
  {
  banana = createSprite(200,200,20,20)
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.velocityX = -8 
    bananaGroup.add(banana)
  }
}




