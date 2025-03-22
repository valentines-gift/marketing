let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail .item');

// Configuración
let countItem = items.length;
let itemActive = 0;

// Evento siguiente click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Evento click anterior
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto slider
let refresInterval = setInterval(() => {
    next.click();
}, 3000);

function showSlider() {
    // Remover el item anterior
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Activar el nuevo item
    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');

    // Reiniciar el intervalo de auto slider
    clearInterval(refresInterval);
    refresInterval = setInterval(() => {
        next.click();
    }, 19000);
}

// Click en thumbnail
thumbnail.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
