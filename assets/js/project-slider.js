'use strict';

$(() => {
    const projects = $('.project-single');
    const bulletsContainer = $('.bullets');
    const arrow = $('.arrow');
    const bullets = [];
    let actualIndex = 0;

    const maxIndex = projects.length;

    initSlider();

    function initSlider() {
        for (let i = 0; i < maxIndex; i++) {
            const bullet = $(`<span></span>`);
            if (i === 0) {
                bullet.addClass('active');
            }
            bulletsContainer.append(bullet);
            bullets.push(bullet);
        }

        projects.hide();
        projects.eq(0).fadeIn();
        bullets[0].addClass('active');

        bulletClick();
        arrowClick();
    }

    function bulletClick() {
        bullets.forEach((bullet, index) => {
            bullet.click(() => {
                if (index !== actualIndex) {
                    projects.eq(actualIndex).fadeOut();
                    actualIndex = index;
                    projects.eq(actualIndex).fadeIn();
                    updateBulletClasses();
                }
            });
        });
    }

    function arrowClick() {
        arrow.click((event) => {
            projects.eq(actualIndex).fadeOut();
            actualIndex += event.target.id === 'prev' ? -1 : 1;
            actualIndex = actualIndex < 0 ? maxIndex - 1 : actualIndex % maxIndex;
            projects.eq(actualIndex).fadeIn();
            updateBulletClasses();
        });
    }

    function updateBulletClasses() {
        bullets.forEach((bullet, index) => {
            bullet.toggleClass('active', index === actualIndex);
        });
    }
});
