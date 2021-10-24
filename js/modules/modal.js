export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function openCloseModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }
  function clickOutModal(event) {
    if (event.target === this) openCloseModal(event);
  }
  if (btnOpen && btnClose && modalContainer) {
    btnOpen.addEventListener('click', openCloseModal);
    btnClose.addEventListener('click', openCloseModal);
    modalContainer.addEventListener('click', clickOutModal);
  }
}
