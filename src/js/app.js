import { initHeroAnimation, initSkillsAnimation } from './modules/animations.js';
import * as functions from './modules/functions.js';
import * as controls from './modules/controls.js';
import { projectsGlide } from './modules/sliders.js';

window.addEventListener('load', function () {
    functions.isWebp();
    // functions.preventClickDefault($('form'));
});

window.addEventListener('resize', function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {}, 100);
});

let timer;
window.addEventListener(
    'scroll',
    function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            const pageOffset = Math.round(window.pageYOffset);
            pageOffset > 300
                ? document.body.classList.add('scrolled')
                : document.body.classList.remove('scrolled');
            // scroll functions
        }, 100);
    },
    false
);
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    setTimeout(() => {
        if (document.getElementById('projects')) {
            const projectsSlider = projectsGlide();
        }
    }, 1000);
    controls.mobileMenuControl();
});
