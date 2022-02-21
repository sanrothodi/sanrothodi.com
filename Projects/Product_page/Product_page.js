console.log('Product page')

let productImage = document.getElementById('productImage');
let colorBtn = document.getElementsByClassName('color-btn');

for (var i = 0; i < colorBtn.length; i++) {
  colorBtn[i].addEventListener('click', function() {
    id = this.getAttribute('id');

    switch (id) {
      case 'color1': color1();
      break;

      case 'color2': color2();
      break;

      case 'color3': color3();
      break;

      case 'color4': color4();
      break;

      case 'color5': color5();
      break;
    };
  })
}

function color1() {
  productImage.src = 'Assets/black.png';
  console.log(productImage.src);
}

function color2() {
  productImage.src = 'Assets/green.png'
  console.log(productImage.src);
}

function color3() {
  productImage.src = 'Assets/purple.png'
  console.log(productImage.src);
}

function color4() {
  productImage.src = 'Assets/red.png'
  console.log(productImage.src);
}

function color5() {
  productImage.src = 'Assets/pink.png'
  console.log(productImage.src);
}



let textOnImage = document.getElementById('text-on-image');
let featureBtn = document.getElementsByClassName('feature-btn');
var dateAndTime = new Date();

for (var i = 0; i < featureBtn.length; i++) {
  featureBtn[i].addEventListener('click', function (){
      id = this.getAttribute('id');

      switch (id) {
        case 'feature1': feature1();
        break;

        case 'feature2': feature2();
        break;

        case 'feature3': feature3();
        break;
      }
  });
};

function feature1() {
  var time = dateAndTime.toLocaleTimeString();
  textOnImage.innerHTML = time;
  console.log(time);
};

function feature2() {
  var date = dateAndTime.toLocaleDateString();
  textOnImage.innerHTML = date;
  console.log(date);
}

var randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function feature3() {
  var heartRate = randomNum(60, 100);
  textOnImage.innerHTML = heartRate;
  console.log(heartRate);
}










// I added the console.log() in all the functions to track the changes on the terminal, but it isn't necessary at all. ;D
