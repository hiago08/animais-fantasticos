export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    // O THIS É O PROPRIO ELEMENTO
    tooltipBox: '',
    element: '',
    handleEvent() {
      // handleEvent = Execução assim que o evento for disparado - mouse leave -> tooltip remove
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave); // Remove o evento depois de realizado - não necessário, mas bom para a otimização
      this.element.removeEventListener('mousemove', onMouseMove); // Remove o evento depois de realizado - não necessário, mas bom para a otimização
    },
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const textTooltip = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    // AQUI O THIS É CADA ELEMENTO HTML QUE CONTÉM A DATA-TOOLTIP
    const tooltipBox = createTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  if (tooltips.length) {
    tooltips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver);
    });
  }
}
