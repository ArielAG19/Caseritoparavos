// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Filtros de categorías
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        const cat = card.getAttribute('data-category') || '';
        card.style.display = cat.includes(filter) ? '' : 'none';
      }
    });
  });
});
// Función para mostrar secciones y ocultar las demás
function showSection(id) {
  const sections = ['hero','comidas', 'contacto', 'info'];
  sections.forEach(sec => {
    document.getElementById(sec).style.display = (sec === id) ? 'block' : 'none';
  });
}

// Botones del Hero
document.querySelectorAll('.hero-cta a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = btn.getAttribute('href').substring(1); // quita el #
    showSection(target);
    // opcional: hacer scroll suave
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// También los botones de la navegación principal
document.querySelectorAll('.nav a').forEach(navBtn => {
  navBtn.addEventListener('click', e => {
    e.preventDefault();
    const target = navBtn.getAttribute('href').substring(1);
    showSection(target);
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  });
});
// Logo vuelve al hero
document.querySelector('.brand').addEventListener('click', e => {
  e.preventDefault();
  showSection('hero'); // muestra la sección hero y oculta las demás
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
});
