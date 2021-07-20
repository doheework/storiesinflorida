let img1;
let img2;
let img3;
let img4;
let dice;
let sliderR;
let sliderG;
let sliderB;
let button;


function preload() {
  img1 = loadImage('element_size.png');
  img2 = loadImage('controller.png');
  img3 = loadImage('fullhand.png');
  img4 = loadImage('overhand.png');

}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  
  sliderR = createSlider(0, 255, 159);
  sliderG = createSlider(0, 255, 55);
  sliderB = createSlider(0, 255, 76);
  sliderR.position(280 , 300);
  sliderG.position(280, 350);
  sliderB.position(280, 400);
  
  button = createButton('save');
  button.position(330, 650);
  button.mousePressed(savebook);

  button = createImg('pngegg.png');
  button.position(310, 500);
  button.size(70,70);
  button.mousePressed(randomcolour);

  saveCanvas =  createGraphics(878.1, 697.1);

  background(255,255,255);
  image(img2, 115, 62, 459,809);
  
}

function randomcolour() {
  var val = random(0,255);
  var ran = random(0,255);
  var dom = random(0,255);
  sliderR.value(val);
  sliderB.value(ran);
  sliderG.value(dom);
}

function draw() {
  

  let colourR = sliderR.value();
  let colourG = sliderG.value();
  let colourB = sliderB.value();
  fill(colourR,colourG,colourB);
  noStroke();
  rect(674.4,98.6,878.1, 697.1);
  noTint();
  image(img1, 500,-40,1226.9, 974.3);
  tint(colourR, colourG, colourB,120);
  image(img3,500,-40,1226.9, 974.3);
  tint(159,55,76);
  tint(colourR, colourG, colourB,200);
  image(img4, 500,-40.4,1226.9, 974.3);
   
}

function savebook(){
  let c = get(674.4,98.6,878.1, 697.1);
  saveCanvas.image(c, 0, 0);
  save(saveCanvas, "storiesinflorida.png");
  
}
