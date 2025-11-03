// Отключение действий при нажатии на кнопки
export function preventClickDefault(elem) {
    elem.on('click', function (e) {
        e.preventDefault();
    });
}
export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.body.classList.add(className);
    });
}
export function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
export function enableFixedBody(target) {
    document.body.classList.add('no-scroll');
    setTimeout(() => {
        target.classList.add('active');
    }, 10);
}
export function disableFixedBody(delay, target) {
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        target.classList.remove('active');
    }, delay);
}
