export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // Bind para os callbacks events
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  onMouseLeave(event) {
    // handleEvent = Execução assim que o evento for disparado - mouse leave -> tooltip remove
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // Remove o evento depois de realizado - não necessário, mas bom para a otimização
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove); // Remove o evento depois de realizado - não necessário, mas bom para a otimização
  }

  // Cria a tooltipBox e adciona ao body
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const textTooltip = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    // Cria a tooltipbox e coloca em uma propriedade
    this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
