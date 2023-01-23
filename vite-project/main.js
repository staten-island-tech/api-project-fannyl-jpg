import "./style.css";
/* import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js' */
/* const URL = "https://api.artic.edu/api/v1/artworks"; */

/* document.querySelector("#app").innerHTML =*/ `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

/* setupCounter(document.querySelector("#counter")); */

/* const URL = "https://api.artic.edu/api/v1/artworks/search?q=cats";
 */
/* async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    }
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.error(error);
  }
}
getData(URL); */

const URL = "https://api.artic.edu/api/v1/artworks/search?q=cats";
console.log(fetch(URL));

fetch(URL)
  .then((response) => response.json()) // use the `.json()` method
  .then((data) => console.log(data)); // `.json()` is also async, chain another `.then()` to log the object

// let's turn this to an async/await function
async function fetchData("https://api.artic.edu/api/v1/artworks/search?q=cats") {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(URL);

const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
  // defining an async arrow function
  const quote = await fetchData(URL);
  apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML();
