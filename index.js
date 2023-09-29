var imgArray = ["rock","paper","scissor"];

var randomNumber1 = Math.floor(Math.random() * 3);
var image = "./assets/images/" + imgArray[randomNumber1] + ".png";
document.getElementById("img1").src = image;

var randomNumber2 = Math.floor(Math.random() * 3);
image = "./assets/images/" + imgArray[randomNumber2] + ".png";
document.getElementById("img2").src = image;

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw🤝";
}
else if(randomNumber1 == 0) {
    if(randomNumber2 == 1) {
        document.querySelector("h1").innerHTML = "Player2 won🏆";
    }
    else {
        document.querySelector("h1").innerHTML = "Player1 won🏆";
    }
}
else if(randomNumber1 == 1) {
    if(randomNumber2 == 0) {
        document.querySelector("h1").innerHTML = "Player1 won🏆";
    }
    else {
        document.querySelector("h1").innerHTML = "Player2 won🏆";
    }
}
else if(randomNumber1 == 2) {
    if(randomNumber2 == 0) {
        document.querySelector("h1").innerHTML = "Player2 won🏆";
    }
    else {
        document.querySelector("h1").innerHTML = "Player1 won🏆";
    }
}

