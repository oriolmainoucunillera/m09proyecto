var slider_content = document.getElementById("box");
var image = ['1', '2', '3'];
var i = image.length;

function nextImage() {
    if (i < image.length) {
        i = 1 + i;
    } else {
        i = 1;
    }

    slider_content.innerHTML = "<img src=img/" + image[i - 1] + ".jpg>";
}

function prewImage() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }

    slider_content.innerHTML = "<img src=img/" + image[i - 1] + ".jpg>";
}

setInterval(nextImage, 5500);