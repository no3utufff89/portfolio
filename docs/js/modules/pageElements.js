export function getPageElements() {
    const burgerBtn = document.querySelector('.nav-btn');
    const overlay = document.querySelector('.overlay');
    const mobileMenuBlock = document.querySelector('.mobile-menu');

    return {
        burgerBtn,
        overlay,
        mobileMenuBlock,
    };
}
