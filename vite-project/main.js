const form = document.querySelector('.search-form');
const imageResults = document.querySelector('.image-container');

const apiEntry = "https://api.tvmaze.com/search/shows";

console.log(fetch(apiEntry));

fetch(apiEntry)
    .then((response) => response.json()) 
    .then((data) => console.log(data)); 

async function fetchData(apiEntry) {
    try {
        const response = await fetch(apiEntry);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}
fetchData(apiEntry);

const apiResponseDOM = document.getElementById("api-response");
const putMovieInHTML = async () => {
    const movie = await fetchData(apiEntry);
    apiResponseDOM.innerHTML = `Movie: ${movie.content}`;
};
putMovieInHTML();

form.addEventListener('submit', async function (e) {
  e.preventDefault();
const searchTerm = form.elements.query.value;
const config = { params: { q: searchTerm } };
const res = await axios.get(' https://api.tvmaze.com/search/shows', config);
addImages(res.data);

  if (searchTerm === '') {
    const heading = document.createElement('div');
    const headingText = document.createElement('p');
    headingText.innerText = 'No Results Found';
    heading.append(headingText);
    heading.classList.add('result-heading');
    imageResults.append(heading);
  }
});

const addImages = (shows) => {
  imageResults.innerHTML = '';

  const heading = document.createElement('div');
  const headingText = document.createElement('p');
  headingText.innerText = 'Top Results';
  heading.append(headingText);
  heading.classList.add('result-heading');
  imageResults.append(heading);

  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container');

  for (let result of shows) {
    if (result.show.image) {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image-result');
      const image = document.createElement('img');
      image.src = result.show.image.medium;

      const overlayDiv = document.createElement('div');
      overlayDiv.classList.add('overlay');

      const overlayTitleDiv = document.createElement('div');
      overlayTitleDiv.classList.add('overlay-title');
      const title = document.createElement('p');
      title.innerText = result.show.name;

      overlayTitleDiv.append(title);
      overlayDiv.append(overlayTitleDiv);

      const overlayRatingDiv = document.createElement('div');
      overlayRatingDiv.classList.add('overlay-rating');
      const rating = document.createElement('p');
      overlayRatingDiv.appendChild(rating);

      if (result.show.rating.average === null) {
        rating.innerText = `Not Rated Yet`;
      } else {
        rating.innerText = `Rating: ${result.show.rating.average}`;
      }
      overlayDiv.append(overlayRatingDiv);
      imageDiv.append(image);
      imageDiv.append(overlayDiv);
      resultContainer.append(imageDiv);
    }

    imageResults.append(resultContainer);
  }
};