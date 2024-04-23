const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.primary-navigation a');
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
});
