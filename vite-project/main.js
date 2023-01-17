import "./style.css";
/* import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js' */
const URL = "https://api.artic.edu/api/v1/artworks";

/* document.querySelector("#app").innerHTML */ = `
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

const URL = "https://foodish-api.herokuapp.com/api/dessert";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.error(error);
  }
}
getData(URL);

