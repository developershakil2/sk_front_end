const navBar = document.querySelector(".headerNav");


window.addEventListener("scroll", () => {

    setTimeout(() => {
        navBar.classList.toggle("sticky", window.scrollY > 10);
    }, 1800)
});

var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: 'play',
    perPage: 1,
});
splide.mount();