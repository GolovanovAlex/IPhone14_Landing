const btnClick = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu');
const nav = document.querySelector('.nav');

btnClick.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});
menuClose.addEventListener('click', () => {
  nav.classList.remove('menu-open');
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
