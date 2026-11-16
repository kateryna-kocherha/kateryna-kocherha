const header = document.querySelector('.top');
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

function setOpen(open) {
  header.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
}

burger.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
window.matchMedia('(min-width: 821px)').addEventListener('change', () => setOpen(false));