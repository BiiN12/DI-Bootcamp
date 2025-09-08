// Exercise: Solar System

// 1. Create array of planets
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const planetColors = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

// Get the section element
const section = document.querySelector(".listPlanets");

// 2-4. Create planets with different colors
for (let i = 0; i < planets.length; i++) {
  // Create div element
  const planetDiv = document.createElement("div");

  // Add planet class
  planetDiv.classList.add("planet");

  // Add specific color class
  planetDiv.classList.add(planetColors[i]);

  // Add planet name as text
  planetDiv.textContent = planets[i];

  // Append to section
  section.appendChild(planetDiv);
}

console.log("Basic solar system created!");

// 5. Bonus: Create planets with moons
console.log("\n=== Bonus: Adding Moons ===");

const planetsWithMoons = [
  { name: "Mercury", moons: 0, color: "mercury" },
  { name: "Venus", moons: 0, color: "venus" },
  { name: "Earth", moons: 1, color: "earth" },
  { name: "Mars", moons: 2, color: "mars" },
  { name: "Jupiter", moons: 4, color: "jupiter" },
  { name: "Saturn", moons: 3, color: "saturn" },
  { name: "Uranus", moons: 2, color: "uranus" },
  { name: "Neptune", moons: 1, color: "neptune" },
];

// Clear existing planets for bonus version

section.innerHTML = "";

// Create planets with moons
planetsWithMoons.forEach((planet, planetIndex) => {
  // Create planet div
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.classList.add(planet.color);
  planetDiv.textContent = planet.name;

  // Create moons for this planet
  for (let moonIndex = 0; moonIndex < planet.moons; moonIndex++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");

    // Position moons around the planet
    const angle = (360 / planet.moons) * moonIndex;
    const radius = 70;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    moonDiv.style.left = `${50 + x}px`;
    moonDiv.style.top = `${50 + y}px`;

    planetDiv.appendChild(moonDiv);
  }

  section.appendChild(planetDiv);
});

console.log("Solar system with moons created!");
