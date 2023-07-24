const number = document.getElementById('count');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

let count = 0;


increment.addEventListener('click', function() {
  count++;
  number.textContent = count;
});


decrement.addEventListener('click', function() {
    count--;
    number.textContent = count;
});