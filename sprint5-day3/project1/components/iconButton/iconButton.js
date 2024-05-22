/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/
/*
const buttonArr = [
  { btnText: 'Aç', btnColor: 'blue', iconClass: 'fa fa-folder-open' },
  { btnText: 'Düzenle', btnColor: 'orange', iconClass: 'fa fa-pen' },
  { btnText: 'Sil', btnColor: 'red', iconClass: 'fa fa-trash' },
];

function IconButton(obj) {
  const button = document.createElement('button');
  button.classList.add(`btn btn-${obj.btnColor}`);
  const icon = document.createElement('i');
  icon.classList.add(obj.iconClass);
  button.appendChild(icon);
  button.textContent = obj.btnText;
  return button;
}

const buttonsDiv = document.querySelector('div#icon-buttons');

buttonArr.forEach((obj) => buttonsDiv.appendChild(IconButton(obj)));*/

function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.className = `btn btn-${btnColor}`;
  const icon = document.createElement('i');
  icon.className = iconClass;
  button.appendChild(icon);
  button.appendChild(document.createTextNode(`${btnText}`));
  return button;
}

button1 = IconButton('Aç', 'blue', 'fa fa-folder-open');
button2 = IconButton('Düzenle', 'orange', 'fa fa-pen');
button3 = IconButton('Sil', 'red', 'fa fa-trash');

const buttonsDiv = document.querySelector('div#icon-buttons');

buttonsDiv.appendChild(button1);
buttonsDiv.appendChild(button2);
buttonsDiv.appendChild(button3);
