export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); // Transformar em Number
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number); // Transformar em Number

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const isDayOpen = diasSemana.includes(diaAtual);
  const isHourOpen = horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];
  if (isDayOpen && isHourOpen) funcionamento.classList.add('aberto');
}
