export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - windowMetade < 0;
      if (isVisible) {
        section.classList.add('ativo');
      } /* else if (section.classList.contains('ativo')){
        section.classList.remove('ativo'); //Caso queira remover a sessão na volta do scroll
      } */
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}