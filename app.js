
const sidebar = document.getElementById('sidebar');
const navToggle = document.querySelector('.bars');
const topBtn = document.getElementById('back-to-top-button');


navToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});