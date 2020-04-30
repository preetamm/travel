var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  var sceneEl = document.querySelector('a-scene');
  let model = document.createElement('a-entity');
  model.setAttribute('gps-entity-place', `latitude: ${crd.latitude}; longitude: ${crd.longitude};`);
  model.setAttribute('gltf-model', '../assets/scene.gltf');
  model.setAttribute('rotation', '0 180 0');
  model.setAttribute('animation-mixer', '');
  model.setAttribute('scale', '0.5 0.5 0.5');
  sceneEl.appendChild(model);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
console.log("hrllo")
