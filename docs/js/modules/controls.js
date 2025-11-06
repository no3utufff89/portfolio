import { gsap } from 'gsap';
import { getPageElements } from './pageElements.js';

const menuTimeline = gsap.timeline({ paused: true });

export function mobileMenuControl() {
    const pageElements = getPageElements();
    const mobileBtn = pageElements.burgerBtn;

    initMenuAnimations(pageElements);

    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('open');

        if (mobileBtn.classList.contains('open')) {
            openMobileMenu(pageElements);
        } else {
            closeMobileMenu(pageElements);
        }
    });

    pageElements.overlay.addEventListener('click', e => {
        const target = e.target;
        if (target === pageElements.overlay) {
            closeMobileMenu(pageElements);
            mobileBtn.classList.remove('open');
        }
    });

    const menuLinks = pageElements.mobileMenuBlock.querySelectorAll('.mobile-menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu(pageElements);
            mobileBtn.classList.remove('open');
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && pageElements.mobileMenuBlock.classList.contains('active')) {
            closeMobileMenu(pageElements);
            mobileBtn.classList.remove('open');
        }
    });
}

function initMenuAnimations(pageElements) {
    const { mobileMenuBlock, overlay } = pageElements;
    const menuItems = mobileMenuBlock.querySelectorAll('.mobile-menu__item');

    menuTimeline
        .set(mobileMenuBlock, {
            visibility: 'visible',
        })
        .to(
            overlay,
            {
                duration: 0.3,
                opacity: 1,
                visibility: 'visible',
                ease: 'power2.out',
            },
            0
        )
        .to(
            mobileMenuBlock,
            {
                duration: 0.5,
                x: 0,
                ease: 'power3.out',
            },
            0.1
        )
        // Анимация пунктов меню
        .to(
            menuItems,
            {
                duration: 0.3,
                x: 0,
                opacity: 1,
                stagger: 0.08,
                ease: 'power2.out',
            },
            0.2
        );
}

function openMobileMenu(pageElements) {
    const { mobileMenuBlock } = pageElements;

    enableFixedBody();

    mobileMenuBlock.classList.add('active');

    menuTimeline.play();
}

function closeMobileMenu(pageElements) {
    const { mobileMenuBlock } = pageElements;

    menuTimeline.reverse().then(() => {
        gsap.set(mobileMenuBlock, {
            visibility: 'hidden',
        });

        mobileMenuBlock.classList.remove('active');
    });

    disableFixedBody(300);
}

export function enableFixedBody() {
    document.body.classList.add('no-scroll');
}

export function disableFixedBody(delay) {
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, delay);
}
