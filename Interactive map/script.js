// Initialize the map
const map = L.map("map").setView([20, 0], 2); // world view

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Locations data
const locations = [
  {
    name: "Eiffel Tower",
    coords: [48.8584, 2.2945],
    description: "An iconic symbol of Paris, France.",
    category: "landmark",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
  },
  {
    name: "Statue of Liberty",
    coords: [40.6892, -74.0445],
    description: "A colossal neoclassical sculpture on Liberty Island in New York City.",
    category: "landmark",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
  },
  {
    name: "Great Wall of China",
    coords: [40.4319, 116.5704],
    description: "Ancient wall stretching across northern China.",
    category: "historic",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/GreatWallBadaling.jpg"
  },
  {
    name: "Sydney Opera House",
    coords: [-33.8568, 151.2153],
    description: "A multi-venue performing arts centre in Sydney, Australia.",
    category: "culture",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg"
  },
  {
    name: "Pyramids of Giza",
    coords: [29.9792, 31.1342],
    description: "Ancient pyramids built as tombs in Giza, Egypt.",
    category: "historic",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"
  }
];

// Add markers
const markers = {};
locations.forEach((loc) => {
  const marker = L.marker(loc.coords).addTo(map);
  marker.bindPopup(
    `<b>${loc.name}</b><br>${loc.description}<br><img src="${loc.image}" alt="${loc.name}" />`
  );
  markers[loc.name.toLowerCase()] = marker;
});

// Search functionality
document.getElementById("search").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  if (markers[query]) {
    const marker = markers[query];
    map.setView(marker.getLatLng(), 6);
    marker.openPopup();
  }
});
