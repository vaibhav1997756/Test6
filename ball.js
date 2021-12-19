let ove = document.querySelector('.ove');
let moveBy = 11;
window.addEventListener('load', () => {
    ove.style.position = 'absolute';
    ove.style.left = 0;
    ove.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            ove.style.left = parseInt(ove.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            ove.style.left = parseInt(ove.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            ove.style.top = parseInt(ove.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            ove.style.top = parseInt(ove.style.top) + moveBy + 'px';
            break;
    }
});
