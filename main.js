var photos = [
  "https://cdn.shopify.com/s/files/1/0657/6821/products/1_248d476a-bac9-4e8b-ab41-448c5242fc82_grande.jpg?v=1489761307",
  "http://media.guitarcenter.com/is/image/MMGS7/John-Petrucci-Monarchy-Majesty-Electric-Guitar-Black-Knight/J49572000004000-00-220x220.jpg",
  "http://media.guitarcenter.com/is/image/MMGS7/ES-Les-Paul-Semi-Hollow-Electric-Guitar-Light-Caramel-Burst/J08747000001000-00-500x500.jpg"
];

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


var slideSliderContainer = document.getElementById("slide-slider");
var slideImg = document.createElement("img");
slideImg.setAttribute("src", photos[idx]);
slideSliderContainer.appendChild(slideImg);

var slideNextBtn = document.getElementById("slide-next");
slideNextBtn.addEventListener("click", () => {slideRight();});
  var timer = 1000;
  var marginLeft = 0;
function slideRight(){
  var marginLeftSent = `margin-left: ${marginLeft}px`;
  Object.assign(slideImg.style,{opacity:0});
  setTimeout(function() {
    while (marginLeft < 100){
      marginLeft+=0.5;
      marginLeftSent = `margin-left: ${marginLeft}px;`;
      // window.requestAnimationFrame(() => {moveOver(marginLeftSent);});
      moveOver(marginLeftSent, marginLeft);
    }
  }, 100);
setTimeout(function() {
  getOut();
}, 1000);
}

function getOut(){
  slideImg.parentNode.removeChild(slideImg);
  addNewPhoto();
}
function moveOver(margin, mL){
  Object.assign(slideImg.style,{marginLeft: `${mL}px`});
}

function addNewPhoto(){
  idx+=1;
  marginLeft = 0;
  slideImg.style.border = "1px solid red";
  slideImg.style.marginLeft = "-100px";
  slideImg.style.opacity = "1";
  console.log(slideImg);
  slideSliderContainer.appendChild(slideImg);
}
