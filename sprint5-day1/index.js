const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/42PDMF2/logo.png',
    'cta-img': 'https://i.ibb.co/XssVKxk/cta.png',
    'accent-img': 'https://i.ibb.co/5FZmL26/accent.png',
  },
};

/* Kodlar Buradan aşağıya */
const navitems = document.querySelectorAll('header nav a');
for (let i = 0; i < navitems.length; i++) {
  navitems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navitems[i].classList.add('italic');
}

document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

const topContentBaslik = document.querySelectorAll('.top-content h4');
topContentBaslik[0].textContent = siteContent['top-content']['left-h4'];
topContentBaslik[1].textContent = siteContent['top-content']['right-h4'];

const topContentParagraf = document.querySelectorAll('.top-content p');
topContentParagraf[0].textContent = siteContent['top-content']['left-content'];
topContentParagraf[1].textContent = siteContent['top-content']['right-content'];

const bottomContentBaslik = document.querySelectorAll('.bottom-content h4');
bottomContentBaslik[0].textContent = siteContent['bottom-content']['left-h4'];
bottomContentBaslik[1].textContent = siteContent['bottom-content']['middle-h4'];
bottomContentBaslik[2].textContent = siteContent['bottom-content']['right-h4'];

const bottomContentParagraf = document.querySelectorAll('.bottom-content p');
bottomContentParagraf[0].textContent =
  siteContent['bottom-content']['left-content'];
bottomContentParagraf[1].textContent =
  siteContent['bottom-content']['middle-content'];
bottomContentParagraf[2].textContent =
  siteContent['bottom-content']['right-content'];

const iletisim = document.querySelector('.contact').children;
iletisim[0].textContent = siteContent.contact['contact-h4'];
iletisim[1].textContent = siteContent.contact.address;
iletisim[2].textContent = siteContent.contact.phone;
iletisim[3].textContent = siteContent.contact.email;

document.querySelector('footer a').textContent = siteContent.footer.copyright;
document.querySelector('footer a').classList.add('bold');

document.getElementById('logo-img').src = siteContent.images['logo-img'];
document.getElementById('cta-img').src = siteContent.images['cta-img'];
document.getElementById('middle-img').src = siteContent.images['accent-img'];
