/* import "../styles/style.css";
import { counter } from "./counter"; */

const API_URL = "https://api.artic.edu/api/v1/artworks/search?q=cats"

fetch(API_URL)
.then(res=>res.json())
.then(data =>{
	console.log(data);
	data.results.forEach((movie) => {
		let movieCard = `
			<div class="card">
				<img src='https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}${movie.poster_path}'class="card-img-top">
				<div class="card-body">
					<h2 class="card-title">${movie.original_title}</h2>
					<p class="card-text">${movie.overview}</p>
					<span class="btn btn-primary">Rates: ${movie.vote_average}</span>
				</div>
			</div>
		`;
		result.innerHTML += movieCard;
 	// console.log(movieCard);
	
	});
})

document.querySelector(".btn").addEventListener("click",(x)=>{
	x.preventDefault();
	let input = document.querySelector(".form-control").value;
	const SEARCH_API =`https://api.artic.edu/api/v1/artworks/search?q=cats=${input}`;

fetch(SEARCH_API)
.then(res => res.json())
.then((search) => {
	search.results.forEach((movie) => {
		let searchedMovie = `
			<div class="card">
				<img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}'class="card-img-top">
				<div class="card-body">
					<h2 class="card-title">${movie.original_title}</h2>
					<p class="card-text">${movie.overview}</p>
					<span class="btn btn-primary">Rates: ${movie.vote_average}</span>
				</div>
			</div>
		`;
        
		searchResult.innerHTML += searchedMovie;
		result.style.display = "none";
		searchResult.style.display = "default";
	})
})
})
