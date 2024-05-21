// Kodlar Buraya
function karanlikTemayiAcKapa() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    btn.textContent = 'Karanlık temayı kapat';
  } else {
    btn.textContent = 'Karanlık temayı aç';
  }
}

const btn = document.createElement('button');
btn.textContent = 'Karanlık temayı aç';
btn.setAttribute('id', 'acKapa');

document.querySelector('.description').append(btn);
btn.addEventListener('click', () => {
  karanlikTemayiAcKapa();
});
