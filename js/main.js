(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

 
  function loadMaterialInfo() {
    //Make AJAX call here
const apiUrlmaterial = 'https://swiftpixel.com/earbud/api/materials/';

  fetch(apiUrlmaterial)
    .then(response => {
      if (!response.ok) {
        throw new Error('No Data fetched from Server.');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(material => {
        const clone = materialTemplate.content.cloneNode(true);
        const materialHeading = clone.querySelector(".material-heading");
        const materialDescription = clone.querySelector(".material-description");

        materialHeading.textContent = material.heading;
        materialDescription.textContent = material.description;

        materialList.appendChild(clone);
      });
    })
  

  }

  loadMaterialInfo();

const infoboxList = document.querySelector("#infobox-list");
const infoboxTemplate = document.querySelector("#infobox-template");

function loadinfoboxInfo() {
  const apiUrlinfobox = 'https://swiftpixel.com/earbud/api/infoboxes/';

  fetch(apiUrlinfobox)
    .then(response => {
      if (!response.ok) {
        throw new Error('No Data fetched from Server.');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(infobox => {
        const clone = infoboxTemplate.content.cloneNode(true);
        const infoboxHeading = clone.querySelector(".infobox-heading");
        const infoboxDescription = clone.querySelector(".infobox-description");
        const infoboxImage = clone.querySelector(".infobox-image");

        infoboxHeading.textContent = infobox.heading;
        infoboxDescription.textContent = infobox.description;
        infoboxImage.src = infobox.thumbnail; // Assuming infoboxImage is an <img> element

        infoboxList.appendChild(clone);
      });
    })
  
}

loadinfoboxInfo();



  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

