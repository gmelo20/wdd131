const cardsContainer = document.getElementById("temple-cards");
const navLinks = document.querySelectorAll("nav a");

function displayTemples(list) {
  cardsContainer.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    cardsContainer.appendChild(card);
  });
}

// Initial load
displayTemples(temples);

// Filter functions
function filterTemples(type) {
  let filtered = [];
  switch(type) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 8400);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Menu events
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.getAttribute("data-filter");
    filterTemples(filter);
  });
});

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
