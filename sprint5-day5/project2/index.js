import axios from 'axios';

/* Görev 1: YOUR_API_KEY'inizi kendi key'iniz ile değiştirin */
export const apiKey = '4147761f';

/* Görev 2: 
Aşağıdaki searchMovie fonksiyonunu aşağıdaki 2 istere göre tamamlayın:

1. 2 argüman alacak: sırasıyla arama kriteri ve apiKey'i string bir değer olarak alacak.
2. 'https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}' URL'ine istek atarak gelen response'u geri dönecek.
3. Eğer, yapılan istek hata alırsa console'a error olarak "Error fetching movie data!" yazdıracak.
*/

export async function searchMovie(searchTerm, key) {
  return axios
    .get(`https://www.omdbapi.com/?t=${searchTerm}&apikey=${key}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      console.error('Error fetching movie data!');
    });
}
