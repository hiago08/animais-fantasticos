export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
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
    });
  }

  let observer;
  function handleMutation(mutation) {
    // O que fazer quando o observer ver mutação
    if (mutation[0].target.classList.contains('ativo')) {
      // Se a section contém ativo
      observer.disconnect(); // Desconecta o observer, pois não é mais necessário
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation); // Objeto que irá observar
  observer.observe(observerTarget, { attributes: true });
  // Metodo de observação - Observado e o que irá observar
}
