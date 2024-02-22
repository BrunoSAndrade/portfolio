'use strict';

$(() => {
    const content = $('section > .container, #projects h2');

    content.each((i, el) => {
        if (i > 0) {
            const targetElement = $(el);

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => { // Percorre todas as entradas
                    if (entry.isIntersecting) {
                        targetElement.addClass('slide-right fade-in');
                    }
                });
            });

            observer.observe(targetElement[0]); // Adiciona o elemento observado ao IntersectionObserver
        }
    });
});
