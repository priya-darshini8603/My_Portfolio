document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('text-gray-700', 'hover:bg-gray-200');
            });
            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('text-gray-700', 'hover:bg-gray-200');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('section-title')) {
                    entry.target.classList.add('visible');
                } else if (entry.target.classList.contains('skill-tag')) {
                    entry.target.classList.add('visible');
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                    }, 200);
                } else if (entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);
    document.querySelectorAll('.section-title, .skill-tag, .project-card').forEach(el => {
        observer.observe(el);
    });
    document.querySelectorAll('button, a').forEach(el => {
        if (!el.getAttribute('aria-label') && el.textContent.trim()) {
            el.setAttribute('aria-label', el.textContent.trim());
        }
        el.classList.add('focus-ring');
    });
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const link = card.querySelector('a');
                if (link) link.click();
            }
        });
    });

    const form = document.querySelector('form');
    if (form) {
        const formInputs = form.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.setAttribute('aria-required', 'true');
            input.classList.add('focus-ring');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });
});

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9',
                secondary: '#f472b6'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            }
        }
    }
}