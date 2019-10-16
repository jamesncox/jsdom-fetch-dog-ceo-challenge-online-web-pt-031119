console.log("%c HI", "color: firebrick");

function fetchDogs() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}

function renderDogs(json) {
  const dogImageContainer = document.querySelector("dog-image-container");
  json.forEach(dog => {
    const img = document.createElement("img");
    img.innerHTML = "Image Added";
    dogImageContainer.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  fetchDogs();
});
