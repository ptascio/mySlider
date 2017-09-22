var photos = [
  "https://cdn.shopify.com/s/files/1/0657/6821/products/1_248d476a-bac9-4e8b-ab41-448c5242fc82_grande.jpg?v=1489761307",
  "http://media.guitarcenter.com/is/image/MMGS7/John-Petrucci-Monarchy-Majesty-Electric-Guitar-Black-Knight/J49572000004000-00-220x220.jpg",
  "http://media.guitarcenter.com/is/image/MMGS7/ES-Les-Paul-Semi-Hollow-Electric-Guitar-Light-Caramel-Burst/J08747000001000-00-500x500.jpg"
];

//fade container
var idx = 0;

function previous(){
  img.setAttribute("style", "opacity: 0.0");
  if(idx === 0){
    idx = photos.length-1;
  }else {
    idx-=1;
  }
  setTimeout(function(){
    updatePhoto();
  }, 1000);
}

function next(){
    img.setAttribute("style", "opacity: 0.0");
  if(idx === photos.length-1){
    idx = 0;
  }else {
    idx+=1;
  }
  setTimeout(function(){
    updatePhoto();
  }, 1000);
}

var fadeSliderContainer = document.getElementById("fade-slider");
var img = document.createElement("img");
img.setAttribute("src", photos[idx]);
fadeSliderContainer.appendChild(img);
function updatePhoto(){
  setTimeout(function(){
    img.setAttribute("src", photos[idx]);
    img.setAttribute("style", "opacity: 0.5");
    setTimeout(function(){
      img.setAttribute("style", "opacity: 1");
    }, 500);
  }, 500);

  fadeSliderContainer.appendChild(img);
}
var fadePrevBtn = document.getElementById("fade-prev");
var fadeNextBtn = document.getElementById("fade-next");
fadePrevBtn.addEventListener("click", () => {previous();});
fadeNextBtn.addEventListener("click", () => {next();});



//slide container
var slideIdx = 0;
var slideSliderContainer = document.getElementById("slide-slider");
var slideImg = document.createElement("img");
slideImg.setAttribute("src", photos[slideIdx]);
slideSliderContainer.appendChild(slideImg);

var slideNextBtn = document.getElementById("slide-next");
slideNextBtn.addEventListener("click", () => {animateSlideRight();});
var slidePrevBtn = document.getElementById("slide-prev");
slidePrevBtn.addEventListener("click", () => {animateSlideLeft();});
var timer = 1000;
var marginLeft = 0;
var marginLeftSent = `margin-left: ${marginLeft}px`;

function animateSlideRight(){
  window.requestAnimationFrame(moveImgRight);
}

function animateSlideLeft(){
  window.requestAnimationFrame(moveImgLeft);
}

function moveImgRight(){
  marginLeft+=10;
  slideImg.style.marginLeft = marginLeft.toString() + "px";
  if (marginLeft < 200){
    window.requestAnimationFrame(moveImgRight);
  }else {
    getOut();
  }
}

function moveImgLeft(){
  marginLeft-=10;
  slideImg.style.marginLeft = marginLeft.toString() + "px";
  if (marginLeft > -200){

    window.requestAnimationFrame(moveImgLeft);
  }else {
    getOut();
  }
}



function getOut(){
  slideImg.parentNode.removeChild(slideImg);

    addNewPhoto();
}

function addNewPhoto(left){
  if (slideIdx === photos.length - 1){
    slideIdx = 0;
  }else {
    slideIdx+=1;
  }
  if (marginLeft === -200){
    marginLeft = 200;
  }else {
    marginLeft = -200;
  }
  slideImg.setAttribute("src", photos[slideIdx]);
  slideImg.style.marginLeft = "-200px";

  slideSliderContainer.appendChild(slideImg);
  slideInNewPic();
}

function slideInNewPic(){
  if (marginLeft > 0){
    marginLeft-=10;
  }else {
  marginLeft+=10;
  }
  slideImg.style.marginLeft = marginLeft.toString() + "px";
  if (marginLeft !== 0){
    window.requestAnimationFrame(slideInNewPic);
  }
}
