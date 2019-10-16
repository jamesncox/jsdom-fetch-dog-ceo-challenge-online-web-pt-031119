console.log("%c HI", "color: firebrick");

function fetchDogs() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}

function renderDogs(json) {
  const dogImageContainer = document.querySelector("#dog-image-container");
  json.message.forEach(dog => {
    const img = document.createElement("img");
    img.src = dog;
    dogImageContainer.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchDogs();
});

function fetchBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
  console.log(json);
  const dogBreeds = document.querySelector("#dog-breeds");
  json.message.forEach(dog => {
    const breed = document.createElement("breed");
    breed.src = dog;
    dogBreeds.appendChild(breed);
  });
}

document.addEventListener("DomContentLoaded", function() {
  fetchBreeds();
});
