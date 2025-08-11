const botao = document.querySelector('.botao-menu');
const menuLateral = document.querySelector('.menu-lateral');
const background = document.querySelector('.background');
const logo = document.querySelector('.logo');
const logoProducoes = document.querySelector('.logoProducoes');
const logoEstudio = document.querySelector('.logoEstudio');
const logoLocalizacao = document.querySelector('.logoLocalizacao');
const logoContato = document.querySelector('.logoContato');

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
    if (logo) logo.classList.toggle('ativo');
    if (logoProducoes) logoProducoes.classList.toggle('ativo');
    if (logoEstudio) { logoEstudio.classList.toggle('ativo');}
    if (logoLocalizacao) { logoLocalizacao.classList.toggle('ativo');}
    if (logoContato) { logoContato.classList.toggle('ativo');}
})


background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
    if (logo) logo.classList.remove('ativo');
    if (logoProducoes) logoProducoes.classList.remove('ativo');
    if (logoEstudio) {logoEstudio.classList.remove('ativo');}
    if (logoLocalizacao) {logoLocalizacao.classList.remove('ativo');}
    if (logoContato) {logoContato.classList.remove('ativo');}
});



// Carrossel de fotos
let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(n) {
    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Garante que o índice esteja dentro dos limites
    slideIndex = (n + slides.length) % slides.length;

    // Mostra o slide atual
    slides[slideIndex].classList.add('active');
}

// Eventos de clique nos botões
if (prevButton) {
    prevButton.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });
}

// Inicia o carrossel, mostrando a primeira foto
if (slides.length > 0) {
    showSlide(0);
}


document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Aqui você pode integrar com um backend, Google Forms, etc.
  alert('Mensagem enviada com sucesso!');
  this.reset();
});