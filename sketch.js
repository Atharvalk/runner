var path,pathimage
var runner,runerimage
var coin,coinimage
var bomb,bombimage
var energy,energyimage

function preload(){
  pathimage = loadImage("path.png")
  runnerimage = loadAnimation("Runner-1.png","Runner-2.png")
  coinimage = loadImage("coin.png")
  bombimage = loadImage("bomb.png")
  energyimage = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
 path=createSprite(200,200)
 path.addImage("path",pathimage)
 path.velocityY=4
 runner=createSprite(200,200,10,10)
 runner.addAnimation("images",runnerimage)
 runner.scale=0.05
 coin=createSprite(200,100,5,5)
 coin.addImage("coin",coinimage)
 coin.scale=0.3
 bomb=createSprite(100,180,5,5)
 bomb.addImage("bomb",bombimage)
 bomb.scale=0.08
 energy=createSprite(300,60,5,5)
 energy.addImage("energy",energyimage)
 energy.scale=0.08
}


function draw() {
  background(0);
  if(path.y>400){
    path.y=path.height/2
  }
drawSprites()
}
