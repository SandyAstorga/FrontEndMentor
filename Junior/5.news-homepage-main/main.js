document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menu = document.getElementById('icon-menu');
    const close = document.getElementById('close-menu');
    const menuContainer = document.querySelector('.menu');

    menu.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            menuContainer.classList.add('open');
            close.style.display = 'flex';
            body.classList.add('blur-background');

            const options = document.querySelectorAll('.options a');
            options.forEach(option => {
                option.addEventListener('click', function () {
                    menuContainer.classList.remove('open');
                    close.style.display = 'none';
                    body.classList.remove('blur-background');
                });
            });
        }
    });

    close.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            menuContainer.classList.remove('open');
            close.style.display = 'none';
            body.classList.remove('blur-background');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 769) {
            menuContainer.classList.remove('open');
            close.style.display = 'none';
            body.classList.remove('blur-background');
        }
    });
});
