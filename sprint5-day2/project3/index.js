// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.
const images = document.querySelectorAll('img');
images.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('grayscale');
  });

  img.addEventListener('mouseleave', () => {
    img.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/

window.addEventListener('keydown', (e) => {
  if (e.key === '1') {
    document.body.classList.add('theme1');
  }
  if (e.key === '2') {
    document.body.classList.add('theme2');
  }
  if (e.key === '3') {
    document.body.classList.add('theme3');
  }
  if (e.key === 'Escape') {
    document.body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/
const input = document.querySelector('input');
const btn = document.querySelector('button');

input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();
  if (input.value.length > 5) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/
const result = document.querySelector('#submitResult');

btn.addEventListener('click', () => {
  result.textContent = `${input.value} başarı ile kaydedildi...`;
  input.value = '';
  btn.disabled = true;
});
