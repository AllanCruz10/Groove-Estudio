document.addEventListener('DOMContentLoaded', () => {
  // ====== SELECTORS (1x só) ======
  const botao         = document.querySelector('.botao-menu');
  const menuLateral   = document.querySelector('.menu-lateral');
  const background    = document.querySelector('.background');
  const agenda        = document.querySelector('.container-agenda'); // opcional

  // logos (algumas páginas não têm todas — tratamos com filtro)
  const logos = [
    document.querySelector('.logo'),
    document.querySelector('.logoProducoes'),
    document.querySelector('.logoEstudio'),
    document.querySelector('.logoLocalizacao'),
    document.querySelector('.logoContato')
  ].filter(Boolean);

  // ====== FUNÇÕES DE ESTADO ======
  const abrirMenu = () => {
    if (!menuLateral || !botao || !background) return;

    menuLateral.classList.add('ativo');
    botao.classList.add('ativo');
    background.classList.add('ativo');
    document.body.classList.add('menu-aberto'); // faz o "Agende seu ensaio" sumir via CSS

    // fundo da página (se você realmente quiser isso)
    document.body.style.backgroundColor = '#34495e';

    // animação das logos (se existirem)
    logos.forEach(el => el.classList.add('ativo'));
  };

  const fecharMenu = () => {
    if (!menuLateral || !botao || !background) return;

    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.classList.remove('menu-aberto');

    document.body.style.backgroundColor = '#ecf0f1';

    logos.forEach(el => el.classList.remove('ativo'));
  };

  const toggleMenu = () => {
    if (menuLateral?.classList.contains('ativo')) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  };

  // ====== EVENTOS DO MENU ======
  if (botao) {
    botao.addEventListener('click', toggleMenu);
  }
  if (background) {
    background.addEventListener('click', fecharMenu);
  }
  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharMenu();
  });
  // Fecha ao clicar em qualquer link do menu (opcional)
  menuLateral?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', fecharMenu);
  });

  // ====== CARROSSEL ======
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carrossel-slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showSlide(n) {
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  if (slides.length) showSlide(0);
  prevButton?.addEventListener('click', () => showSlide(slideIndex - 1));
  nextButton?.addEventListener('click', () => showSlide(slideIndex + 1));

  // ====== FORMULÁRIO ======
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      alert('Mensagem enviada com sucesso!');
      this.reset();
    });
  }
});
