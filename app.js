
const sidebar = document.getElementById('sidebar');
const navToggle = document.querySelector('.bars');
const topBtn = document.getElementById('back-to-top-button');


navToggle.addEventListener('click', function() {
    // console.log(sidebar.classList);
    // console.log(sidebar.classList.contains("random"));
    // console.log(sidebar.classList.contains("show-sidebar"));
    
    sidebar.classList.toggle('show-sidebar');
});