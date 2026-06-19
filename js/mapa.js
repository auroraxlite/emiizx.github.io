const map = new maplibregl.Map({

container: 'map',

style:
'https://demotiles.maplibre.org/style.json',

center: [-79.52,8.98],

zoom: 15,

pitch: 70,

bearing: -20,

antialias: true

});

map.addControl(
new maplibregl.NavigationControl()
);

map.on('load',()=>{

document
.getElementById("loading")
.style.display="none";

});
