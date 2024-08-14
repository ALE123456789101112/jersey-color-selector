//rgb colour picker https://pixabay.com/illustrations/colour-wheel-spectrum-rainbow-1740381/
var i = 1;


onEvent("next"+i, "click", function( ) {
  if (i<10) {
    i++;
  }
  updateScreen();
});
if (i>1) {
  onEvent("previous"+i, "click", function( ) {
    i--;
    updateScreen();
  });
}
onEvent("palette"+i, "click", function( ) {
  changeColour();
});





function changeColour() {
  var r = randomNumber(50, 255);
  var g = randomNumber(50, 255);
  var b = randomNumber(50, 255);
  setProperty("icon"+i, "icon-color", rgb(r, g, b));
  setProperty("name"+i, "background-color", rgb(r, g, b, 0.5));
  setProperty("one"+i, "text-color", rgb(r,g,b));
  setProperty("hundred"+i, "text-color", rgb(r,g,b));
  setProperty("teamStrength"+i, "text-color", rgb(r,g,b));
  setProperty("colour"+i, "text-color", rgb(r,g,b));
  setProperty("next"+i, "icon-color", rgb(r,g,b));
  if (i>1) {
    setProperty("previous"+i, "icon-color", rgb(r,g,b));
  }
  setProperty("label"+i, "text-color", rgb(r,g,b));
}
function updateScreen() {
  setProperty("label"+i, "text", i);
  setScreen("team"+i);
}
