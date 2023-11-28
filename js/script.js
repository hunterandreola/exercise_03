




document.getElementById("pic").addEventListener("click", displayImage);


var imageDisplay = 0;
var images = [
    ({ title: 'boy', src: 'images/stickboy.jpg' }),
    ({ title: 'boy2', src: 'images/stickboy2.jpg' }),
    ({ title: 'boy3', src: 'images/stickboy3.jpg' }),
    ({ title: 'boy4', src: 'images/stickboy4.jpg' }),
    ({ title: 'boy5', src: 'images/stickboy5.jpg' }),
    ({ title: 'boy6', src: 'images/stickboy6.jpg' }),
    ({ title: 'boy7', src: 'images/stickboy7.jpg' })
];


function displayImage() {
    document.images["pic"].src = images[imageDisplay].src;
    document.images["pic"].alt = images[imageDisplay].title;
    imageDisplay++;
    if (imageDisplay > images.length - 1) {
        imageDisplay = 0;
    }
}

var img = document.getElementById("pic");
img.onmouseover = function () {
    this.style.cursor = "pointer";
}
img.onmouseout = function () {
    this.style.cursor = "default";
}