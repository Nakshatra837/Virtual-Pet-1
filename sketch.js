//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, happyDogImg;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(50,50,25,25);
  dog.addImage(dogImg);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
 background(46,139,87);
  drawSprites();
  //add styles here

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}

  fill("white");
  textSize(30);
  text("Note:Press UP_ARROW Key To Feed The Drago Milk",400,100);
  



}

function readStock(data){
foodS = data.val();
}
 
function writeStock(x){
  database.ref('/').update({
  Food:x
  })

  

  
}
