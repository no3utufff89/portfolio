import Glide from '@glidejs/glide';

export function projectsGlide() {
    const projectsSlider = new Glide('.projects__glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 0, // Минимальный gap
        swipeThreshold: 20,
        animationDuration: 400,
        rewind: false,
        peek: 0, // Убираем peek
        animationTimingFunc: 'ease-in-out',
        bound: false,
        rewindDuration: 600,

        breakpoints: {
            1024: {
                perView: 2,
                gap: 8,
            },
            768: {
                perView: 2,
                gap: 5,
            },
            560: {
                perView: 1.1,
                gap: 5,
            },
        },
    });
    document.querySelector('.glide__arrow_right').addEventListener('click', () => {
        projectsSlider.go('>');
    });
    document.querySelector('.glide__arrow_left').addEventListener('click', () => {
        projectsSlider.go('<');
    });
    projectsSlider.mount();
    return projectsSlider;
}
