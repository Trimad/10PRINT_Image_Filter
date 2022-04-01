var img;
var imageDropped = false;
var spacing = 16;
var threshold = 128;
var scribble = new Scribble();
var lineType = ['line', 'rectangle', 'ellipse'];
var bowing = 1;
var roughness = 1;
var ellipseSteps = 1;
var weight = 1;
var brightnessRange = 1;

function setup() {

  gui1 = QuickSettings.create(0, 0, "Canvas Setup")
    .addFileChooser("Image Chooser", "Choose a primary image...", "image/*", imgChosen)
    .addImage("Image", "")
    .addDropDown("Draw Style", lineType, changeLine)
    .addRange("Stroke Weight", 1, 64, weight, 1, changeWeight)
    .addRange("Brightness", 0, 3, 1, 0.1, changeBrightness)
    .addRange("Spacing", 4, 128, spacing, 1, changeSpacing)
    .addRange("Threshold", 0, 255, threshold, 1, changeThreshold)
    .addRange("Bowing", 0, 64, bowing, 1, changeBowing)
    .addRange("Roughness", 0, 64, roughness, 1, changeRoughness)
    .addButton("Save Image", saveImage);

  lineType = 'line';
  noLoop();

}
var c;
function drawImg() {

  c = createCanvas(img.width, img.height);
  strokeWeight(weight);
  noFill();
  img.loadPixels();

  for (var x = 0; x < img.width; x += spacing) {
    for (var y = 0; y < img.height; y += spacing) {
      var index = (x + y * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      //var a = img.pixels[index + 3];
      stroke((r * brightnessRange), (g * brightnessRange), (b * brightnessRange));
      var bright = (r + g + b) / 3;
      switch (lineType) {
        case 'line':
          if (bright < threshold) {
            scribble.scribbleLine(x, y, x + spacing, y + spacing);
          } else {
            scribble.scribbleLine(x + spacing, y, x, y + spacing);
          }
          break;
        case 'ellipse':
          scribble.scribbleEllipse(x, y, spacing, spacing);
          break;
        case 'rectangle':
          scribble.scribbleRect(x, y, spacing, spacing);
          break;
      }
    }
  }
}
