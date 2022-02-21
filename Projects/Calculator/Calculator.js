console.log('Simple iPhone calculator')

let output = document.getElementsByClassName('output') [0];
let equation = '';
let number = '';
let id = '';
let type = '';

let input = document.getElementsByClassName('input');
let i = 0;

for (i; i < input.length; i++) {
  input[i].addEventListener('click', function () {
    id = this.getAttribute('data-id');
    type = this.getAttribute('data-type');

    switch (type) {
      case 'allClear': allClear();
      break;

      case 'percentage': percentage();
      break;

      case 'operator': operator();
      break;

      case 'symbol': symbol();
      break;

      case 'sign': sign();
      break;

      case 'equal': equal();
      break;

      case 'numbers': numbers();
      break;
    }
  }, false);
}

function allClear() {
  number = '';
  equation = '';
  output.innerHTML = '';
  console.log('Clear');
}

function percentage() {
  number = eval(number+id);
  equation = number;
  output.innerHTML = number;
  console.log(number);
}

function operator() {
  equation += id;
  output.innerHTML = number + "" + id;
  number = number + "" + id + '';
  console.log(id);
}

function symbol() {
  number += id;
  equation += id;
  output.innerHTML = number;
  console.log(number);
}

function sign() {
  number = eval(number+id);
  equation = number;
  output.innerHTML = number;
  console.log(number);
}

function equal() {
  number = eval(equation);
  equation = number;
  output.innerHTML = number;
  console.log(number);
}

function numbers() {
    number += id;
    equation += id;
    output.innerHTML = number;
    console.log(number);
}

// I added the console.log() in all the functions to track the changes on the terminal, but it isn't necessary at all. ;D
