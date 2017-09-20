var photos = [
  "https://cdn.shopify.com/s/files/1/0657/6821/products/1_248d476a-bac9-4e8b-ab41-448c5242fc82_grande.jpg?v=1489761307"
];

var currentImg = document.getElementById("slider");
var img = document.createElement("img");
img.setAttribute("src", photos[0]);
currentImg.appendChild(img);
