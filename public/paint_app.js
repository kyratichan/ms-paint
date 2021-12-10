// Colors
let white = '#ffffff';
let red = '#fa5352'; // fa5352 fa4b4b
let orange = '#f6b759'; // f6b759 ff9453
let yellow = '#00bf9a'; // 00bf9a ffd953
let green = '#008081'; // 008081 96df4f
let blue = '#1c90ff'; // 1c90ff 5ec2fb
let purple = '#060181'; // 060181 a067e6
let pink = '#ee66ac';
let brown = '#895739';
let black = '#212529'; // 212529 000000
let gray1 = '#c0c0c0'; // c0c0c0 7d7d7d
let gray2 = '#6c757d'; // 6c757d 464646
let colors = [red, orange, yellow, green, blue, purple, pink, brown, white, gray1, gray2, black];

// Canvas Variables
let canvasDistX = 25;
let canvasDistY = 97.5;
let canvasWidth;
let canvasHeight;
let canvasColor = white;

// Brush Variables
let brushColor = black;
let prevBrushColor = brushColor;
let brushSize = 20;
let brushOpacity = 255;
let brushShape = "line";
let incrementBrush = 2;

// Button Variables
let closeButtonSize = 25;
let buttonSize = 35;
let buttonDist = 10;
let shadowDist = 2;
let shadowColor = gray2;

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.parent("canvas");
  background('#c0c0c0');

  // Drawing canvas
  canvasWidth = displayWidth-canvasDistX*2;
  canvasHeight = displayHeight-canvasDistY*3+canvasDistX;

  fill(canvasColor);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX, canvasDistY, canvasWidth, canvasHeight);
  
  // Set saveCanvas graphics image size
  saveCanvas =  createGraphics(canvasWidth, canvasHeight);

  // Buttons
  // Close Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - closeButtonSize - buttonDist + shadowDist, buttonDist + shadowDist, closeButtonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - closeButtonSize - buttonDist, buttonDist, closeButtonSize);
  // X icon
  line(width - closeButtonSize - buttonDist + 5, buttonDist + 5, width - buttonDist - 5, buttonDist + closeButtonSize - 5)
  line(width - buttonDist - 5, buttonDist + 5, width - closeButtonSize - buttonDist + 5, buttonDist + closeButtonSize - 5)
  
  // Save Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(canvasDistX + shadowDist, canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Save Icon
  noStroke();
  fill(black);
  rect(canvasDistX + buttonDist * 1.5/2, canvasDistY - buttonDist * 0.5 - buttonSize + shadowDist, buttonSize - buttonDist * 3/2);
  fill(white);
  triangle(canvasDistX + buttonDist * 1.5/2 + buttonSize - buttonDist * 3/2, canvasDistY - buttonDist * 0.5 - buttonSize + shadowDist, canvasDistX + buttonDist * 1.5/2 + buttonSize - buttonDist * 3/2 - buttonDist / 2, canvasDistY - buttonDist * 0.5 - buttonSize + shadowDist, canvasDistX + buttonDist * 1.5/2 + buttonSize - buttonDist * 3/2, canvasDistY - buttonSize + shadowDist);
  rect(canvasDistX + buttonDist*6/5, canvasDistY - buttonDist * 0.5 - buttonSize + shadowDist, buttonDist*2/3, buttonDist/3);
  rect(canvasDistX + buttonDist*5/4, canvasDistY + buttonDist * 0.5 - buttonSize + shadowDist, buttonDist, buttonDist/1.5);

  // Brush Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(canvasDistX + buttonSize + buttonDist + shadowDist, canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX + buttonSize + buttonDist, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Brush icon
  stroke(black);
  strokeWeight(6);
  line(canvasDistX + 2 * buttonSize + buttonDist - 10, canvasDistY - buttonDist - buttonSize + 10, canvasDistX + buttonSize + buttonDist + 12, canvasDistY - buttonDist - 12);
  stroke(black);
  strokeWeight(1);
  line(canvasDistX + buttonSize + buttonDist + 9, canvasDistY - buttonDist - 8, canvasDistX + 2 * buttonSize + buttonDist - 8, canvasDistY - buttonDist - 8)
  noStroke();
  fill(black);
  triangle(canvasDistX + buttonSize + buttonDist + 8,canvasDistY - buttonDist - 8, canvasDistX + buttonSize + buttonDist + 12, canvasDistY - buttonDist - 9, canvasDistX + buttonSize + buttonDist + 9, canvasDistY - buttonDist - 12);
  

  // Eraser Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(canvasDistX + 2 * buttonSize + 2 * buttonDist + shadowDist, canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX + 2 * buttonSize + 2 * buttonDist, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Eraser icon
  rotate(PI/4);
  rect(canvasDistX + 2.68*buttonSize + 2 * buttonDist, canvasDistY - 2 * buttonDist - 3.73*buttonSize, 9, 18);
  fill(black);
  rect(canvasDistX + 2.68*buttonSize + 2 * buttonDist, canvasDistY - 2 * buttonDist - 3.73*buttonSize, 9, 12);
  rotate(-PI/4);
  
  // Clear Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(canvasDistX + 3 * buttonSize + 3 * buttonDist + shadowDist, canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX + 3 * buttonSize + 3 * buttonDist, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Clear icon
  line(canvasDistX + 3 * buttonSize + 3 * buttonDist+8, canvasDistY - buttonDist - buttonSize + 12, canvasDistX + 4 * buttonSize + 3 * buttonDist - 8, canvasDistY - buttonDist - buttonSize + 12);
  line(canvasDistX + 3 * buttonSize + 3 * buttonDist + 14, canvasDistY - buttonDist - buttonSize + 12, canvasDistX + 3 * buttonSize + 3 * buttonDist + 14, canvasDistY - buttonDist - buttonSize + 8);
  line(canvasDistX + 4 * buttonSize + 3 * buttonDist - 14, canvasDistY - buttonDist - buttonSize + 12, canvasDistX + 4 * buttonSize + 3 * buttonDist - 14, canvasDistY - buttonDist - buttonSize + 8);
  line(canvasDistX + 3 * buttonSize + 3 * buttonDist + 14, canvasDistY - buttonDist - buttonSize + 8, canvasDistX + 4 * buttonSize + 3 * buttonDist - 14, canvasDistY - buttonDist - buttonSize + 8);
  line(canvasDistX + 3 * buttonSize + 3 * buttonDist + 12, canvasDistY - buttonDist - 8, canvasDistX + 3 * buttonSize + 3 * buttonDist+11, canvasDistY - buttonDist - buttonSize + 12);
    line(canvasDistX + 4 * buttonSize + 3 * buttonDist - 12, canvasDistY - buttonDist - 8, canvasDistX + 4 * buttonSize + 3 * buttonDist - 11, canvasDistY - buttonDist - buttonSize + 12);
  line(canvasDistX + 3 * buttonSize + 3 * buttonDist + 12, canvasDistY - buttonDist - 8, canvasDistX + 4 * buttonSize + 3 * buttonDist - 12, canvasDistY - buttonDist - 8);
  
  // Line Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*7 - buttonDist*10 - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*7 - buttonDist*10 - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Line icon
  strokeWeight(4);
  line(width - buttonSize*7 - buttonDist*10 - canvasDistX + 8, canvasDistY - buttonDist - 1*buttonSize/2, width - buttonSize*6 - buttonDist*10 - canvasDistX - 8, canvasDistY - buttonDist - 1 * buttonSize/2)
  
  // Circle Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*6 - buttonDist*9 - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*6 - buttonDist*9 - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Circle icon
  fill(black);
  circle(width - 11 * buttonSize/2 - buttonDist * 9 - canvasDistX, canvasDistY - buttonDist - 1 * buttonSize/2, buttonSize - 2 * 8);
  
  // Square Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*5 - buttonDist*8 - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*5 - buttonDist*8 - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Square icon
  fill(black);
  rect(width - buttonSize*5 - buttonDist*8 - canvasDistX + 8, canvasDistY - buttonDist - buttonSize + 8, buttonSize - 2*8);
  
  // Triangle Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*4 - buttonDist*7 - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*4 - buttonDist*7 - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // Triangle icon
  fill(black);
  triangle(width - buttonSize*4 - buttonDist*7 - canvasDistX + 8, canvasDistY - buttonDist - 8, width - canvasDistX - buttonSize*3 - buttonDist*7 - 8, canvasDistY - buttonDist - 8, width - 7*buttonSize/2 - buttonDist*7 - canvasDistX, canvasDistY - buttonDist - buttonSize + 8)
  
  // Slash Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*3 - buttonDist*6 - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*3 - buttonDist*6 - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // \ icon
  strokeWeight(3);
  line(width - buttonSize*3 - buttonDist*6 - canvasDistX + 12, canvasDistY - buttonDist - buttonSize + 8, width - canvasDistX - buttonSize*2 - buttonDist*6 - 12, canvasDistY - buttonDist - 8)
  
  // + Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize*2 - buttonDist - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize*2 - buttonDist - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // + icon
  strokeWeight(3);
  line(width - buttonSize*2 - buttonDist - canvasDistX + 8, canvasDistY - buttonDist - 1*buttonSize/2, width - canvasDistX - buttonSize - buttonDist - 8, canvasDistY - buttonDist - 1*buttonSize/2)
  line(width - 3*buttonSize/2 - buttonDist - canvasDistX, canvasDistY - buttonDist - buttonSize + 8, width - 3*buttonSize/2 - buttonDist - canvasDistX, canvasDistY - buttonDist - 8)
  
  // - Button
  // Shadow
  noStroke();
  fill(shadowColor);
  rect(width - buttonSize - canvasDistX + shadowDist,  canvasDistY - buttonDist - buttonSize + shadowDist, buttonSize);
  // Button
  fill(white);
  stroke(black);
  strokeWeight(2);
  rect(width - buttonSize - canvasDistX, canvasDistY - buttonDist - buttonSize, buttonSize);
  // - icon
  strokeWeight(3);
  line(width - buttonSize - canvasDistX + 10, canvasDistY - buttonDist - 1*buttonSize/2, width - canvasDistX - 10, canvasDistY - buttonDist - 1*buttonSize/2)

  // Color Palette
  let colorBoxDist = 20;
  let colorBoxSize = (width - 11 * colorBoxDist - 2 * canvasDistX) / 12;

  for (i = 0; i < 12; i++) {
    fill(colors[i]);
    rect(canvasDistX+i*colorBoxSize+i*colorBoxDist, canvasDistY + canvasHeight + colorBoxDist, colorBoxSize);
  }
}

function draw() {
  canvasWidth = displayWidth-canvasDistX*2;
  canvasHeight = displayHeight-canvasDistY*3+canvasDistX;
  let colorBoxDist = 20;
  let colorBoxSize = (width - 11 * colorBoxDist - 2 * canvasDistX) / 12;
}
  
// Define helper methods

let clearCanvas = () => {
  fill(canvasColor);
  stroke(black);
  strokeWeight(2);
  rect(canvasDistX, canvasDistY, canvasWidth, canvasHeight);
}

let closeWindow = () => {
  fill(white);
  noStroke();
  rect(0, 0, width, height);
}

let updatePrevBrushColor = () => {
  prevBrushColor = brushColor;
}

let setColor = (color) => {
  brushColor = color;
  updatePrevBrushColor();
}

// Keyboard / mouse functions

function mouseDragged() {
    // paint!
  if (mouseX > canvasDistX + brushSize/2 && mouseX < width - canvasDistX - brushSize/2 && mouseY > canvasDistY + brushSize/2 && mouseY < canvasDistY + canvasHeight - brushSize/2) {
    if (brushShape == "circle") {
      noStroke();
      fill(brushColor);
      circle(mouseX, mouseY, brushSize);
    }
    if (brushShape == "line") {
      strokeWeight(brushSize/2);
      stroke(brushColor);
      noFill();
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (brushShape == "square") {
      noStroke();
      fill(brushColor);
      rect(mouseX, mouseY, brushSize);
    }
    if (brushShape == "slash") {
      strokeWeight(brushSize/8);
      stroke(brushColor);
      triangle(mouseX, mouseY, mouseX+brushSize/2, mouseY+brushSize/2, mouseX-brushSize/2, mouseY-brushSize/2);
    }
    if (brushShape == "triangle") {
      noStroke();
      fill(brushColor);
      triangle(mouseX, mouseY-brushSize/2, mouseX+brushSize/2, mouseY+brushSize/2, mouseX-brushSize/2, mouseY+brushSize/2);
    }
  }
}

function keyPressed() {

  // keyCodes: http://keycode.info/
  
  // Keyboard Shortcuts for Colors
  if (keyCode == 82) { // if R, then red
    setColor(red);
  }
  if (keyCode == 79) { // if O, then orange
    setColor(orange);
  }
  if (keyCode == 89) { // if Y, then yellow
    setColor(yellow);
  }
  if (keyCode == 71) { // if G, then green
    setColor(green);
  }
  if (keyCode == 66) { // if B, then blue
    setColor(blue);
  }
  if (keyCode == 80) { // if P, then purple
    setColor(purple);
  }
  if (keyCode == 77) { // if M, then magenta
    setColor(pink);
  }
  if (keyCode == 78) { // if N, then brown
    setColor(brown);
  }
  if (keyCode == 87) { // if W, then white
    setColor(white);
  }
  if (keyCode == 49) { // if 1, then gray1
    setColor(gray1);
  }
  if (keyCode == 50) { // if 2, then gray2
    setColor(gray2);
  }
  if (keyCode == 75) { // if K, then black
    setColor(black);
  }
  
  // Keyboard Shortcuts for Shapes
  if (keyCode == 220) { // if \, then slash
    brushShape = "slash";
  }
  if (keyCode == 67) { // if C, then circle
    brushShape = "circle";
  }
  if (keyCode == 83) { // if S, then square
    brushShape = "square";
  }
  if (keyCode == 84) { // if T, then triangle
    brushShape = "triangle";
  }
  if (keyCode == 76) { // if L, then line
    brushShape = "line";
  }
  
  // Keyboard Shortcuts for Brush Size
  if (keyCode == 221) { // if arrow up, then increase brush size
    brushSize += incrementBrush;
  }
  if (keyCode == 219) { // if arrow down, then decrease brush size
    brushSize -= incrementBrush;
  }
  
  // Keyboard Shortcuts for Tools
  if (keyCode == 68) { // if D, then draw tool
    setColor(prevBrushColor);
  }
  if (keyCode == 69) { // if E, then eraser tool
    updatePrevBrushColor();
    brushColor = canvasColor;
  }
  if (keyCode == 8) { // if backspace (delete), then clear all
    updatePrevBrushColor();
    setup();
  }
  if (keyCode == 88) { // if X, then close window
    updatePrevBrushColor();
    closeWindow();
  }
}

function mousePressed() {
  canvasWidth = displayWidth-canvasDistX*2;
  canvasHeight = displayHeight-canvasDistY*3+canvasDistX;
  let colorBoxDist = 20;
  let colorBoxSize = (width - 11 * colorBoxDist - 2 * canvasDistX) / 12;
  
  // Picking colors
  for (i = 0; i < 12; i++) {
    if (mouseX >= canvasDistX + colorBoxSize*i + colorBoxDist*(i) && mouseX <= canvasDistX + colorBoxSize*(i+1) + colorBoxDist*(i) && mouseY >= canvasDistY + canvasHeight + canvasDistX && mouseY <= canvasDistY + canvasHeight + canvasDistX + colorBoxSize) {
        setColor(colors[i]);
        console.log('picked' + brushColor);
    }
  }
  
  // Select save button
  if (mouseX >= canvasDistX && mouseX <= canvasDistX + buttonSize && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    let c = get(canvasDistX, canvasDistY, canvasWidth, canvasHeight);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, "untitled.png");
  }
  
  // Select brush button
  if (mouseX >= canvasDistX + buttonDist + buttonSize && mouseX <= canvasDistX + buttonDist + 2*buttonSize && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    setColor(prevBrushColor);
  }
  
  // Select eraser button
  if (mouseX >= canvasDistX + 2 * buttonDist + 2 * buttonSize && mouseX <= canvasDistX + 2 * buttonDist + 3 * buttonSize && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    updatePrevBrushColor();
    brushColor = canvasColor;
  }
  
  // Select clear all / delete button
  if (mouseX >= canvasDistX + 3 * buttonDist + 3 * buttonSize && mouseX <= canvasDistX + 3 * buttonDist + 4 * buttonSize && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    updatePrevBrushColor();  
    setup();
  }
  
  
  // Select line button
  if (mouseX >= width - buttonSize*7 - buttonDist*10 - canvasDistX && mouseX <= width - buttonSize*6 - buttonDist*10 - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushShape = "line";
  }
  
  // Select circle button
  if (mouseX >= width - buttonSize*6 - buttonDist*9 - canvasDistX && mouseX <= width - buttonSize*5 - buttonDist*9 - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushShape = "circle";
  }
  
  // Select square button
  if (mouseX >= width - buttonSize*5 - buttonDist*8 - canvasDistX && mouseX <= width - buttonSize*4 - buttonDist*8 - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushShape = "square";
  }
  
  // Select triangle button
  if (mouseX >= width - buttonSize*4 - buttonDist*7 - canvasDistX && mouseX <= width - buttonSize*3 - buttonDist*7 - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushShape = "triangle";
  }
  
  // Select slash button
  if (mouseX >= width - buttonSize*3 - buttonDist*6 - canvasDistX && mouseX <= width - buttonSize*2 - buttonDist*6 - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushShape = "slash";
  }
  
  // Select + button
  if (mouseX >= width - buttonSize*2 - buttonDist - canvasDistX && mouseX <= width - buttonSize - buttonDist - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushSize += incrementBrush;
  }
  
  // Select - button
  if (mouseX >= width - buttonSize - canvasDistX && mouseX <= width - canvasDistX && mouseY >= canvasDistY - buttonDist - buttonSize && mouseY <= canvasDistY - buttonDist) {
    brushSize -= incrementBrush;
  }
  
  // Select close button
  if (mouseX >= width - closeButtonSize - buttonDist && mouseX <= width - buttonDist && mouseY >= buttonDist && mouseY <= buttonDist + closeButtonSize) {
    updatePrevBrushColor();
    closeWindow();
  }
}