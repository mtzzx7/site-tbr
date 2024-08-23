const titles = document.querySelectorAll('.title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    // Mudar a seta para cima ou para baixo
    const arrow = title.querySelector('.arrow');
    arrow.textContent = content.style.display === 'none' ? '▼' : '▲';
  });
});