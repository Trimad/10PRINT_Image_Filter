function imgChosen(file) {
  var temp = URL.createObjectURL(gui1.getValue("Image Chooser"));
  gui1.setValue("Image", temp);
  img = loadImage(temp, drawImg);
  imageDropped = true;
  drawImg();

}

function changeLine() {
  lineType = gui1.getValue("Draw Style").value;
  drawImg();
}

function saveImage() {
  saveCanvas('canvas', '.png');
  //saveCanvas(c, 'myCanvas', 'png');
}

function changeBowing() {
  bowing = gui1.getValue("Bowing");
  scribble.bowing = bowing; // changes the bowing of lines
  drawImg();
}

function changeRoughness() {
  roughness = gui1.getValue("Roughness");
  scribble.roughness = roughness; // changes the roughness of the lines
  drawImg();
}

function changeSpacing() {
  spacing = gui1.getValue("Spacing");
  drawImg();
}

function changeThreshold() {
  threshold = gui1.getValue("Threshold");
  drawImg();
}

function changeWeight() {
  weight = gui1.getValue("Stroke Weight");
  strokeWeight(weight);
  drawImg();
}

function changeBrightness() {
  brightnessRange = gui1.getValue("Brightness");
  drawImg();
}
