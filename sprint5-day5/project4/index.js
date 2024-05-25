/* 
Öncelikle YOUR_API_KEY'i kendi api keyiniz ile değiştirin
*/

export const apiKey = '4147761f';

/*

Görev: DisplayMovieInfo fonksiyonunu aşağıdaki isterlere göre oluşturun.

1. Bir tane argüman alacak: film datasını içeren bir obje.
2. Eğer bu objenin içindeki "Response" özelliği string olarak "True" ise aşağıdaki movieInfo id'li div element'ini dönecek.

<div id="movieInfo">
  <h2>{Title}</h2>
  <p><span>Year:</span> {Year}</p>
  <p><span>Genre:</span> {Genre}</p>
  <p><span>Plot:</span> {plot}</p>
  <img src="{Poster}" alt="{Title}">
</div>

Eğer "Response" !== "True" ise aşağıdaki paragrafı dönecek

<p>No movie found with that title.</p>

*/
export function DisplayMovieInfo(movie) {
  /* Kodlar Buraya */
  if (movie.Response === 'True') {
    //div
    const movieInfoDiv = document.createElement('div');
    movieInfoDiv.id = 'movieInfo';
    //h2
    const title = document.createElement('h2');
    title.textContent = movie.Title;
    //p
    const year = document.createElement('p');
    const genre = document.createElement('p');
    const plot = document.createElement('p');
    //span
    const spanYear = document.createElement('span');
    spanYear.textContent = 'Year: ';
    const spanGenre = document.createElement('span');
    spanGenre.textContent = 'Genre: ';
    const spanPlot = document.createElement('span');
    spanPlot.textContent = 'Plot: ';
    //img
    const img = document.createElement('img');
    img.src = movie.Poster;
    img.alt = movie.Title + ' Poster';
    //appends

    year.append(spanYear, `${movie.Year}`);
    genre.append(spanGenre, `${movie.Genre}`);
    plot.append(spanPlot, `${movie.Plot}`);

    movieInfoDiv.append(title, year, genre, plot, img);

    return movieInfoDiv;
  } else {
    const notFound = document.createElement('p');
    notFound.textContent = 'No movie found with that title.';
    return notFound;
  }
}
