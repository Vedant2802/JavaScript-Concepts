// By default the HTTP method that fetch uses is the GET method

// async function fetchPost(params) {
//   const URL = "https://restcountries.com/v3.1/name/india";

//   try {
//     const data = await fetch(URL);
//     console.log(data);
//     if (data.status === 200) {
//       const response = await data.json();
//       //   return response;
//       console.log(response);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchPost();

// Fetch usage with query parameters

// async function fetchWithQueryParams(params) {
//   let URL = "https://restcountries.com/v3.1/name/india";
//   const queryParams = {
//     area: 3287590,
//   };
//   try {
//     const queryString = new URLSearchParams(queryParams).toString();
//     console.log(queryString);
//     const newUrl = `${URL}&${queryString}`;
//     const response = await fetch(newUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchWithQueryParams();

const ids = [1, 2, 3, 4, 5];

const fetchData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const loopAll = async () => {
  let responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
  let data = await Promise.allSettled(
    responses.map((item) => item.value.json())
  );
  console.log(data);
};

loopAll();
