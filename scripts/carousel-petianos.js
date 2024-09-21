const imgs = document.getElementById("img_petianos");
const img = document.querySelectorAll("#img_petianos img");

let index = 0;

function carrosel() {
    index++;

    if (index > img.length - 1) {
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 302}px)`; 
}

setInterval(carrosel, 1800);
