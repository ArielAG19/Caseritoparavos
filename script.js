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
