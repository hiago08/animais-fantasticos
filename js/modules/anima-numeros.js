export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  /* Recebe um elemento do dom, com número
  em seu texto, incrementa a partir de 0 até
  o numero final */
  static incrementnumber(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa o incremento para cada div de numeros
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementnumber(numero));
  }

  handleMutation(mutation) {
    // O que fazer quando o observer ver mutação
    if (mutation[0].target.classList.contains(this.observerClass)) {
      // Se a section contém ativo
      this.observer.disconnect(); // Desconecta o observer, pois não é mais necessário
      this.animaNumeros();
    }
  }

  /* Adiciona o mutationObserver para verificar quando
  a classe ativo é adcionada ao element target */
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // Objeto que irá observar
    this.observer.observe(this.observerTarget, { attributes: true });
    // Metodo de observação - Observado e o que irá observar
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
