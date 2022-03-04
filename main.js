const button = document.querySelector('.button');
const circle = document.querySelector('.circle');
const sliderDot = document.querySelector('.slider-dot');
let slider = document.querySelector('#slider');
let price = document.querySelector('#price');
let period = document.querySelector('.month');
const discount = 0.25;
let pageView = document.querySelector('.page-view');

var prices = [8, 12, 16, 24, 36];

pageView.innerHTML = "100K";



circle.addEventListener('click', () => {
    circle.classList.toggle('active');
    if(circle.classList.contains('active')){
        button.style.backgroundColor = "hsl(174, 86%, 45%)";
        // price.innerText = "12";
        // period.innerText = "/yearly";
        Discount();
    } else {
        button.style.backgroundColor = "rgb(168, 168, 168)";
        // price.innerText = "16";
        // period.innerText = "/monthly";
        Discount();
    }
});



function Discount() {
  period.innerHTML = "";

  if(circle.classList.contains('active')) {
    period.innerHTML = "/yearly";
    for(let i = 0; i< prices.length; i++){
      prices[i] = prices[i] - prices[i] * discount;
    }
    listener();
  } else {
    period.innerHTML = "/monthly";
    prices = [8, 12, 16, 24, 36];
    listener();
  }
}


var listener = function () {
  window.requestAnimationFrame(function () {
    switch (slider.value) {
      case "1":
        price.innerHTML = Number(prices[0]).toFixed(2);
        pageView.innerHTML = "10K";
        break;
      case "2":
        price.innerHTML = Number(prices[1]).toFixed(2);
        pageView.innerHTML = "50K";
        break;
      case "3":
        price.innerHTML = Number(prices[2]).toFixed(2);
        pageView.innerHTML = "100K";
        break;
      case "4":
        price.innerHTML = Number(prices[3]).toFixed(2);
        pageView.innerHTML = "500K";
        break;
      case "5":
        price.innerHTML = Number(prices[4]).toFixed(2);
        pageView.innerHTML = "1M";
        break;
    }
  })
};


slider.addEventListener("mousedown", function () {
  listener();
  slider.addEventListener('mousemove', listener);
});

slider.addEventListener("mouseup", function () {
  slider.removeEventListener('mousemove', listener);
})


slider.addEventListener('keydown', listener);


slider.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  // console.log(value);
  // console.log("This . value is " + this.value);
  // console.log("This . min is " + this.min);
  // console.log("This . max is " + this.max);
  this.style.background =
  "linear-gradient(to right, #10d5c2 0%, #10d5c2 " +
  value +
  "%, #d0d0d1 " +
  value +
  "%, #b3b3b6 100%)";
}

