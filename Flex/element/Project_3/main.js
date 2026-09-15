const flexContainer = document.querySelector('.flex-container');
const input = document.querySelector('.input');

input.max = flexContainer.offsetWidth;


input.addEventListener('input', () => {
    flexContainer.style.maxWidth = input.value + 'px';
})