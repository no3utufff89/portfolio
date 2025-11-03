import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimation = () => {
    const heroImages = {
        react: document.querySelector('.hero__react-image'),
        css: document.querySelector('.hero__css-image'),
        html: document.querySelector('.hero__html-image'),
        figma: document.querySelector('.hero__figma-image'),
    };

    const heroMainImage = document.querySelector('.hero__image');

    const tl = gsap.timeline({
        defaults: {
            ease: 'back.in',
        },
    });

    tl.fromTo(
        heroImages.css,
        {
            x: 150,
            y: 50,
            opacity: 0,
            rotation: -180,
        },
        {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
        }
    )
        .fromTo(
            heroImages.react,
            {
                x: 200,
                y: -30,
                opacity: 0,
                rotation: 90,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
            },
            '-=1.2'
        )
        .fromTo(
            heroImages.html,
            {
                x: 180,
                y: 80,
                opacity: 0,
                rotation: -90,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
            },
            '-=1.2'
        )
        .fromTo(
            heroImages.figma,
            {
                x: 120,
                y: -60,
                opacity: 0,
                rotation: 180,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
            },
            '-=1.2'
        )

        .fromTo(
            heroMainImage,
            {
                opacity: 0,
                scale: 0.9,
                x: 80,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 1.2,
            }
        )

        .add(() => {
            startFloatingAnimations();
        });

    function startFloatingAnimations() {
        gsap.to([heroImages.react], {
            y: '+=15',
            rotation: '+=8',
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to([heroImages.css], {
            y: '+=25',
            x: '+=10',
            rotation: '+=12',
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to([heroImages.html], {
            y: '+=19',
            x: '+=8',
            rotation: '+=7',
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to([heroImages.figma], {
            y: '+=12',
            rotation: '+=12',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }
};

export const initSkillsAnimation = () => {
    const skillsSection = document.querySelector('.skills');
    const skillsCards = document.querySelectorAll('.skills-card');
    const skillsTitle = document.querySelector('.skills__title');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: skillsSection,
            start: 'top 96%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
        },
    });

    tl.fromTo(
        skillsTitle,
        {
            opacity: 0,
            y: -30,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
        }
    );

    tl.fromTo(
        skillsCards,
        {
            opacity: 0,
            y: 50,
            rotationY: 15,
        },
        {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'back.out(1.3)',
        },
        '-=0.3'
    );
};

export const menuAnimation = () => {};
