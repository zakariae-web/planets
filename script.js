var planetModels = ["#planet1-model" ,"#planet2-model", "#planet3-model"];
var currentModelIndex = 0;

function changePlanet() {
    var scene = document.querySelector('a-scene');
    var planetsEntity = document.getElementById('planets');
    
    // Remove previous planets
    while (planetsEntity.firstChild) {
        planetsEntity.removeChild(planetsEntity.firstChild);
    }

    // Append new planet
    var newModel = planetModels[currentModelIndex];
    var newPlanet = document.createElement('a-entity');
    newPlanet.setAttribute('gltf-model', newModel);
    newPlanet.setAttribute('position', '0 0 -2');
    newPlanet.setAttribute('scale', '40 40 40');
    newPlanet.setAttribute('gps-entity-place', 'latitude: 35,6166022; longitude: -5,2771182; altitude: 0;');
    planetsEntity.appendChild(newPlanet);

    // Increment model index
    currentModelIndex = (currentModelIndex + 1) % planetModels.length;
}
