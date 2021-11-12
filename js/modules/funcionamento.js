export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); // Transformar em Number
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number); // Transformar em Number
  }

  dadosAtuais() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  estaAberto() {
    const isDayOpen = this.diasSemana.includes(this.diaAtual);
    const isHourOpen = this.horarioAtual >= this.horarioSemana[0] && this.horarioAtual < this.horarioSemana[1];
    return isDayOpen && isHourOpen;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAtuais();
      this.ativaAberto();
    }
    return this;
  }
}
