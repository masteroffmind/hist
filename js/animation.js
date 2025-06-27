document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация заголовков
    gsap.from('.animate-heading', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.3
    });

    // Анимация изображения
    gsap.from('.animate-image', {
        opacity: 0,
        scale: 0.85,
        rotate: 3,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.3
    });

    // Анимация текста
    gsap.from('.animate-text', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });

    // Анимация кнопок
    gsap.from('.animate-buttons .btn', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)',
        stagger: 0.15,
        delay: 0.9
    });

    // Анимация карт
    gsap.from('.animate-card', {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -120 : 120),
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.animate-card',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        stagger: 0.2
    });

    // Эффекты наведения
    document.querySelectorAll('.btn-primary, .animate-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.03,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});