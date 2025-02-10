function animateProgressBar(progressBar, duration) {
let progress = 0;
const increment = (1 / duration) * 100;

const interval = setInterval(() => {
    progress += increment;
    progressBar.style.width = `${progress}%`;

    if (progress >= 90) {
    clearInterval(interval);
    }
}, 10);
}

const progressBar = document.getElementById('bar-1');
animateProgressBar(progressBar, 300);

function animateProgressBar2(progressBar2, duration2) {
let progress2 = 0;
const increment2 = (1 / duration2) * 100;

const interval2 = setInterval(() => {
    progress2 += increment2;
    progressBar2.style.width = `${progress2}%`;

    if (progress2 >= 70) {
    clearInterval(interval2);
    }
}, 10);
}

const progressBar2 = document.getElementById('bar-2');
animateProgressBar2(progressBar2, 300);

function animateProgressBar3(progressBar3, duration3) {
let progress3 = 0;
const increment3 = (1 / duration3) * 100;

const interval3 = setInterval(() => {
    progress3 += increment3;
    progressBar3.style.width = `${progress3}%`;

    if (progress3 >= 85) {
    clearInterval(interval3);
    }
}, 10);
}

const progressBar3 = document.getElementById('bar-3');
animateProgressBar3(progressBar3, 300);

const ScrollNav = () =>{
    const nav = document.getElementById('nav');
    this.scrollY >= 50 ? nav.classList.add('scrollNav')
                       : nav.classList.remove('scrollNav');
}

window.addEventListener('scroll', ScrollNav);
ScrollNav();

const CloseMenu = document.querySelector('.close-menu');
const OpenMenu = document.querySelector('.open-menu');
const NavList = document.querySelector('.nav-list');
CloseMenu.style.display = 'none';

OpenMenu.addEventListener('click', () =>{
    CloseMenu.style.display = 'block';
    OpenMenu.style.display = 'none';
    NavList.classList.toggle('show');
});

CloseMenu.addEventListener('click', () =>{
    CloseMenu.style.display = 'none';
    OpenMenu.style.display = 'block';
    NavList.classList.toggle('show');
});

const navlink = document.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', () =>{
        NavList.classList.toggle('show');
    });
});