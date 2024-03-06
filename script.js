

// SHOW CONTENT FOR EACH POINT OF INTEREST:
// ----------------------------------------------






// PANZOOM / MAP CONTROLS:
// ----------------------------------------------
// (panjoom.js library by Timmy Willison and other contributors)
// https://github.com/timmywil/panzoom/blob/main/MIT-License.txt, 
// https://timmywil.com/panzoom

// get the elements
const map = document.getElementById('map');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const resetButton = document.getElementById('reset');

// initiate panzoom
let panzoom = {}
panzoom = new Panzoom(map, {
  minScale: 1,
  maxScale: 5,
  step: 0.25,
  contain: "outside",
  // panzoomMouseMove: 0,
  panOnlyWhenZoomed: 1,
});

// eventlisteners for buttons & scroll
zoomInButton.addEventListener('click', panzoom.zoomIn)
zoomOutButton.addEventListener('click', panzoom.zoomOut)
resetButton.addEventListener('click', panzoom.reset)
map.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)



// ROTATE & CENTERING FUNCTIONS:
// ----------------------------------------------
// (JavaScript Concentric Range Slider by tadejf84)
// https://github.com/tadejf84/js-range-slider// 

// get the elements
const rotateButton = document.getElementById('rotate');
rotateButton.addEventListener('click', function rotate() {
  map.firstElementChild.style.transform = "rotate(10deg)";
})


