import { apiKey, searchMovie } from './index.js';

document.querySelector('button').addEventListener('click', search);
document.querySelector('input').addEventListener('keydown', keypress);

const movieInfoDiv = document.getElementsByClassName('movie-container')[0];

function displayMovieInfo(movieInfo) {
  if (movieInfo.Response === 'True') {
    const html = `
      <div id="movieInfo">
          <h2>${movieInfo.Title}</h2>
          <p><span>Year:</span> ${movieInfo.Year}</p>
          <p><span>Genre:</span> ${movieInfo.Genre}</p>
          <p><span>Plot:</span> ${movieInfo.Plot}</p>
          <img src="${movieInfo.Poster}" alt="${movieInfo.Title} Poster" />
      </div>
      `;

    movieInfoDiv.innerHTML = html;
  } else {
    movieInfoDiv.innerHTML = '<p>No movie found with that title.</p>';
  }
}

function keypress(event) {
  if (event.key == 'Enter') {
    search();
  }
}

async function search() {
  const movieTitle = document.getElementById('movieTitle').value;
  const data = await searchMovie(movieTitle, apiKey);
  displayMovieInfo(data);
}
