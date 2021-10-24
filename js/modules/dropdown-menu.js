import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    // O this é o data dropdown
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropdownMenu.forEach((item) => {
    ['touchstart', 'click'].forEach((event) => {
      item.addEventListener(event, handleClick);
    });
  });
}
