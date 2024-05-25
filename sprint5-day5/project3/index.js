// Aşağıdaki kodları değiştirmeyin. Satır 47'ye geçebilirsiniz.

function searchMovie() {
  const movieTitle = document.getElementById('movieTitle').value;

  const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
  displayText();
  axios
    .get(apiUrl)
    .then((response) => {
      const movieInfo = response.data;

      displayMovieInfo(movieInfo);
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });
}

const movieInfoDiv = document.querySelector('.movie-container');

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

function displayText() {
  const div = document.createElement('p');
  div.setAttribute('id', 'controlText');
  div.textContent = 'Searching...';
  movieInfoDiv.append(div);
}

/* Görev 1: Öncelikle YOUR_API_KEY'ini kendi API_KEY ile güncelle. */

const apiKey = '4147761f';

/* 
Görev 1: sayfadaki search için 2 farklı event listener eklemek.

1- button'a click edilince searchMovie fonskiyonunu çalıştırmalı
2- search input alanına metin girdikten sonra 'Enter' tuşuna basınca searchMovie fonskiyonunu çalıştırmalı.

*/
const btn = document.querySelector('button');
btn.addEventListener('click', searchMovie());
const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchMovie();
  }
});
