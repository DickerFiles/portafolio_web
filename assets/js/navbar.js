// Cargar nav dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    // Determinar la ruta correcta del navbar según el directorio actual
    const path = window.location.pathname.includes('/pages/') ? '../navbar.html' : './navbar.html';
    
    fetch(path)
        .then(response => response.text())
        .then(data => {
            const navContainer = document.querySelector('nav');
            if (navContainer) {
                navContainer.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
