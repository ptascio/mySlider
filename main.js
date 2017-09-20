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

var currentImg = document.getElementById("slider");
var img = document.createElement("img");
img.setAttribute("src", photos[idx]);
currentImg.appendChild(img);
function updatePhoto(){


  setTimeout(function(){
    img.setAttribute("src", photos[idx]);
    img.setAttribute("style", "opacity: 0.5");
    setTimeout(function(){
      img.setAttribute("style", "opacity: 1");
    }, 500);
  }, 500);

  currentImg.appendChild(img);
}
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
prevBtn.addEventListener("click", () => {previous();});
nextBtn.addEventListener("click", () => {next();});
