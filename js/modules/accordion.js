export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  function activeAccordion() {
    /* O this faz referência a o item da função que
    esta chamando essa função (Mesma coisa do event.currentTarget) */
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
