const menuIcon = document.getElementById('icon-menu');
const menuContainer = document.getElementById('menu-container');
const menuLinks = menuContainer.querySelectorAll('a');

// functions
function toggleMenu() {
    if (window.innerWidth <= 768) {
        const isMenuVisible = menuContainer.style.display === 'flex';
        menuContainer.style.display = isMenuVisible ? 'none' : 'flex';
    }
}

function handleResize() {
    if (window.innerWidth > 768) {
        menuContainer.style.display = 'none';
    }
}

menuIcon.addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    if (!menuIcon.contains(event.target) && !menuContainer.contains(event.target)) {
        if (window.innerWidth <= 768) {
            menuContainer.style.display = 'none';
        }
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            menuContainer.style.display = 'none';
        }
    });
});

window.addEventListener('resize', handleResize);
