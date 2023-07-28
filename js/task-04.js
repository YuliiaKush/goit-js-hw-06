let counterValue = 0;
const span = document.querySelector('#counter #value');
const minus = span.previousElementSibling;
const plus = span.nextElementSibling;
minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);

function increment(){
	counterValue +=1;
    document.getElementById('value').innerHTML = counterValue;
    console.log(counterValue);
}
function decrement(){
	counterValue -=1;
    document.getElementById('value').innerHTML = counterValue;
    console.log(counterValue);
}