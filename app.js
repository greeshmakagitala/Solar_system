// Define the solar system object
const solarSystem = {
  sun: {
    radius: 50,
    color: "yellow",
    orbitRadius: 0,
    orbitSpeed: 0,
    element: null,
  },
  planets: [
    {
      name: "Mercury",
      radius: 10,
      color: "gray",
      orbitRadius: 100,
      orbitSpeed: 0.02,
      element: null,
    },
    {
      name: "Venus",
      radius: 15,
      color: "orange",
      orbitRadius: 150,
      orbitSpeed: 0.015,
      element: null,
    },
    {
      name: "Earth",
      radius: 20,
      color: "lightblue",
      orbitRadius: 200,
      orbitSpeed: 0.01,
      element: null,
    },
    {
      name: "Mars",
      radius: 17,
      color: "red",
      orbitRadius: 250,
      orbitSpeed: 0.008,
      element: null,
    },
    {
      name: "Jupiter",
      radius: 30,
      color: "#d7a500",
      orbitRadius: 300,
      orbitSpeed: 0.005,
      element: null,
    },
    {
      name: "Saturn",
      radius: 28,
      color: "#d9d4c5",
      orbitRadius: 350,
      orbitSpeed: 0.003,
      element: null,
    },
    {
      name: "Uranus",
      radius: 25,
      color: "lightblue",
      orbitRadius: 400,
      orbitSpeed: 0.002,
      element: null,
    },
    {
      name: "Neptune",
      radius: 23,
      color: "darkblue",
      orbitRadius: 450,
      orbitSpeed: 0.001,
      element: null,
    },
  ],
};

// Create the solar system simulation
function createSolarSystem() {
  // Create the sun element
  const sunElement = document.createElement("div");
  sunElement.id = "sun";
  sunElement.style.backgroundColor = solarSystem.sun.color;
  sunElement.style.width = solarSystem.sun.radius * 2 + "px";
  sunElement.style.height = solarSystem.sun.radius * 2 + "px";
  document.body.appendChild(sunElement);
  solarSystem.sun.element = sunElement;

  // Create the planet elements
  for (let i = 0; i < solarSystem.planets.length; i++) {
    const planet = solarSystem.planets[i];
    const planetElement = document.createElement("div");
    planetElement.id = planet.name.toLowerCase();
    planetElement.className = "planet";
    planetElement.style.backgroundColor = planet.color;
    planetElement.style.width = planet.radius * 2 + "px";
    planetElement.style.height = planet.radius * 2 + "px";
    document.body.appendChild(planetElement);
    planet.element = planetElement;
  }
}

// Animate the solar system
function animateSolarSystem() {
  const sun = solarSystem.sun;

  // Animate the sun
  sun.element.style.left = window.innerWidth / 2 - sun.radius + "px";
  sun.element.style.top = window.innerHeight / 2 - sun.radius + "px";

  // Animate the planets
  for (let i = 0; i < solarSystem.planets.length; i++) {
    const planet = solarSystem.planets[i];
    const angle = planet.orbitSpeed;
    const radius = planet.orbitRadius;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const planetX = centerX + radius * Math.cos(angle);
    const planetY = centerY + radius * Math.sin(angle);

    planet.element.style.left = planetX - planet.radius + "px";
    planet.element.style.top = planetY - planet.radius + "px";

    // Update the angle for the next frame
    planet.orbitSpeed += 0.01; // Adjust the speed as desired
  }
}

// Call the createSolarSystem function to initialize the solar system elements
createSolarSystem();

// Start the animation loop
setInterval(() => {
  animateSolarSystem();
}, 16); // Adjust the interval as desired (e.g., for smoother or faster animation)
