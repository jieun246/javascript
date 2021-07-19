//! images array
const images = [
    "0.jpg", 
    "1.jpg", 
    "2.jpg" 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//! html element 생성 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//! body에 추가
document.body.appendChild(bgImage);
