
const elem = document.getElementById('map');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const resetButton = document.getElementById('reset');
const body = document.querySelector('body');


const panzoom = Panzoom(elem, {
  maxScale: 10,
  contain: 'outside',
  startScale: 1
})
panzoom.pan(10, 10)
panzoom.zoom(2, { animate: true })


// Panning and pinch zooming are bound automatically (unless disablePan is true).
// There are several available methods for zooming
// that can be bound on button clicks or mousewheel.
zoomInButton.addEventListener('click', panzoom.zoomIn)
zoomOutButton.addEventListener('click', panzoom.zoomOut)
resetButton.addEventListener('click', panzoom.reset)
elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)


function resetMap() {
  document.title = "change"
  panzoom.zoomOut
}

body.addEventListener('load', setTimeout(resetMap, 2000))




//const panzoom = Panzoom(cont, { contain: 'outside', startScale: 1.2 })
//zoomInButton.addEventListener('click', panzoom.zoomIn)
//zoomOutButton.addEventListener('click', panzoom.zoomOut)
//resetButton.addEventListener('click', panzoom.reset)
