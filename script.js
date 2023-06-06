
const navigation = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    let visibility = navigation.getAttribute('data-visible');
    let background = document.querySelector('#Home');

    if (visibility === "false") {
        navigation.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
        background.classList.add("home__bg");
    } 
    else if (visibility === "true") {
        navigation.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
        background.classList.remove("home__bg");
    }
})    