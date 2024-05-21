// Kodlar Buraya
const images = document.querySelectorAll('header img');
const mainİmg = document.getElementById('main-image');
images.forEach((i) => {
  i.addEventListener('mouseenter', () => {
    mainİmg.src = i.src;
  });
});
