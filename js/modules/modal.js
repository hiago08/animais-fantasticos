export default class Modal {
  constructor(btnOpen, btnClose, modalContainer) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.modalContainer = document.querySelector(modalContainer);

    /* bind this ao callback para
    fazer referencia ao objeto da
    classe */
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // Abre e fecha o modal
  openCloseModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.openCloseModal();
  }

  // Fecha o modal ao clicar do lado de fora
  clickOutModal(event) {
    if (event.target === this.containerModal) this.openCloseModal(event);
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
