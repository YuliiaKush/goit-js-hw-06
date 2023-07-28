const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
const inputValue = (evt) => {
     output.textContent = input.value.trim() !== "" ? evt.currentTarget.value : 'Anonymous';
}
input.addEventListener('input', inputValue)