// получаем массив картинок
let images = document.querySelectorAll('.slider-img');
// получаем массив стрелочек
let controls = document.querySelectorAll('.controls');
// индекс активной картинки (которую видно в текущий момент)
let imgIndex = 0;


// 
function show(index) {
    images[imgIndex].classList.remove("active");
    images[index].classList.add("active");
    imgIndex = index;
}

controls.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains("left-arr")) {
            let index = imgIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
            //console.log(index);
        } else if (arrow.classList.contains("right-arr")) {
            let index = imgIndex +1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);

        }


    })
})

show(imgIndex);