// // console.log("hello world");

// const inputField = document.getElementById("input_box");
// const searchButton = document.getElementById("search");

// async function getCountryData(name) {
//   let url = `https://restcountries.com/v3.1/name/${name}`;
//   const response = await fetch(url);
//   //   console.log(response);
//   const data = await response.json();
//   //   console.log(data);

//   return data;
// }

// // const value = getCountryData("india");
// // console.log(value);

// searchButton.addEventListener("click", function () {
//   const inputValue = inputField.value;
//   console.log(inputValue);
//   //   const data = getCountryData(`${inputValue}`);
//   //   console.log(data);
//   //   const dataElement = document.createElement("div");
//   //   dataElement.innerHTML = data;
//   //   document.body.appendChild(dataElement);
//   searchButton.addEventListener("click", function () {
//     const inputValue = inputField.value;
//     console.log(inputValue);

//     getCountryData(inputValue).then((data) => {
//       console.log(data);
//       const dataElement = document.createElement("div");
//       dataElement.setAttribute("id", "my-data");
//       dataElement.innerHTML = `
//         <h2>${data[0].name.common}</h2>
//         <p>Capital: ${data[0].capital}</p>
//         <p>Region: ${data[0].region}</p>
//         <img src="${data[0].flags.png}" alt="Flag of ${data[0].name.common}" width="100" />
//       `;
//       document.body.appendChild(dataElement);
//     });
//   });
//   pollingFunction();
// });

// let interval;
// const pollingFunction = () => {
//   if (interval) return;
//   interval = setInterval(function () {
//     console.log("running");
//     const inputValue = inputField.value;
//     const dataField = document.getElementById("my-data");
//     if (inputValue === "") {
//       dataField.remove();
//       clearInterval(interval);
//     }
//   }, 1000);
// };

// // pollingFunction();

const inputField = document.getElementById("input_box");
const searchButton = document.getElementById("search");

async function getCountryData(name) {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Country not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country data:", error.message);
    return null;
  }
}

searchButton.addEventListener("click", () => {
  const inputValue = inputField.value.trim();

  if (!inputValue) {
    removeDataElement();
    return;
  }

  getCountryData(inputValue).then((data) => {
    removeDataElement();

    if (!data || !data[0]) {
      alert("Country not found.");
      return;
    }

    const country = data[0];

    const dataElement = document.createElement("div");
    dataElement.setAttribute("id", "my-data");
    dataElement.innerHTML = `
      <h2>${country.name.common}</h2>
      <p>Capital: ${country.capital}</p>
      <p>Region: ${country.region}</p>
      <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100" />
    `;
    document.body.appendChild(dataElement);
  });
});

inputField.addEventListener("input", () => {
  if (inputField.value.trim() === "") {
    removeDataElement();
  }
});

function removeDataElement() {
  const existing = document.getElementById("my-data");
  if (existing) {
    existing.remove();
  }
}
