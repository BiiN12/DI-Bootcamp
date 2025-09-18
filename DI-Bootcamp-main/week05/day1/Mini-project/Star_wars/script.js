const apiUrl = "https://www.swapi.tech/api/people/";
const findBtn = document.getElementById("find-button");

findBtn.addEventListener("click", () => {
  async function starWars(url) {
    try {
      const random = Math.round(Math.random() * 9);
      const response = await fetch(`${url}${random}`);
      const data = await response.json();
      const chr = data.result.properties;
      console.log(chr);

      const results = document.getElementById("results");

      results.innerHTML = `
            <i class="fa-solid fa-spinner"></i>
            <p>Loading...</p>
      `;
      setTimeout(() => {
        results.innerHTML = `
            <h3>${chr.name}</h3>
            <p>Height: ${chr.height}</p>
            <p>Gender: ${chr.gender}</p>
            <p>Birth Year: ${chr.birth_year}</p>
            <p>Eye Color: ${chr.eye_color}</p>
      `;
      }, 2000);
    } catch (e) {
      const results = document.getElementById("results");
      results.innerHTML = `
            <i class="fa-solid fa-spinner"></i>
            <p>Loading...</p>
      `;
      setTimeout(() => {
        results.innerHTML = `<h3>Oh no! That person isn't available</h3>`;
      }, 2000);
    }
  }
  starWars(apiUrl);
});

/* This one will not return a random person because the button is inside the async function */
// async function starWars(url) {
//   try {
//     const random = Math.round(Math.random() * 9);
//     console.log(random);
//     const response = await fetch(`${url}${random}`);
//     const data = await response.json();
//     const chr = data.result.properties;
//     console.log(chr);

//     const result = document.getElementById("results");
//     const findBtn = document.getElementById("find-button");

//     findBtn.addEventListener("click", () => {
//       result.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
//       setTimeout(() => {
//         result.innerHTML = `
//               <h3>${chr.name}</h3>
//               <p>Height: ${chr.height}</p>
//               <p>Gender: ${chr.gender}</p>
//               <p>Birth Year: ${chr.birth_year}</p>
//               <p>Eye Color: ${chr.eye_color}</p>
//         `;
//       }, 2000);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

// starWars(apiUrl);
