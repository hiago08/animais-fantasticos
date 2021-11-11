export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - this.windowMetade < 0;
      if (isVisible) {
        section.classList.add('ativo');
      } /* else if (section.classList.contains('ativo')){
        section.classList.remove('ativo'); //Caso queira remover a sessão na volta do scroll
      } */
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener('scroll', this.animaScroll);
    }
    return this;
  }
}
