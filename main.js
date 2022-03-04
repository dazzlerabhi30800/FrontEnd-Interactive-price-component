const button = document.querySelector('.button');
const circle = document.querySelector('.circle');
const sliderDot = document.querySelector('.slider-dot');

circle.addEventListener('click', () => {
    circle.classList.toggle('active');
    if(circle.classList.contains('active')){
        button.style.backgroundColor = "hsl(174, 86%, 45%)";
    } else {
        button.style.backgroundColor = "rgb(168, 168, 168)";
    }
});


var draggedPercentage;

sliderDot.addEventListener('drag', function(event) {

});

  sliderDot.addEventListener("dragend", function(event) {
    // reset the transparency
    // event.target.style.opacity = .3;
    // console.log(event);
    // console.log("The dragend is " + event.screenX);
    // console.log("the percentage of left is "+ event.screenX/12);
    // sliderDot.style.left = `${event.screenX/12}%`;
    // if(event.screenX > 1087) {
    //     sliderDot.style.left = `87.25%`;
    //     console.log('hello');
    // } else {
    //     sliderDot.style.left = `${event.clientX/12}%`;
    //     console.log('hello');
    // }
});
  sliderDot.addEventListener("dragleave", function(event) {
    // reset the transparency
    // event.target.style.opacity = .3;
    // console.log(event);
    // console.log("The dragleave is " + event.screenX);
    // console.log("the percentage of left is "+ event.screenX/12);
    // sliderDot.style.left = `${event.screenX/12}%`;
    if(event.screenX > 1087) {
        sliderDot.style.left = `87.25%`;
    } else {
        sliderDot.style.left = `${event.clientX/80}%`;
    }
    
});
sliderDot.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    // event.preventDefault();
    console.log("the dragover is " + event.clientX);
    // event.target.style.opacity = .3;
    sliderDot.style.left = `${event.clientX/14}%`;
  });
sliderDot.addEventListener("drop", function(event) {
    // prevent default to allow drop
    event.preventDefault();
    // console.log("The drop is " + event.screenX);
    // event.target.style.opacity = .3;
    // sliderDot.style.left = `${event.screenX/12}%`;
  });
