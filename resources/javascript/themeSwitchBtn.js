const themeSwitch = document.querySelector('.theme-switch-btn');
const header = document.querySelector('head');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        header.removeChild(document.querySelector('.dark-theme-css'));
    } else {
        body.classList.add('dark-theme');
        const darkThemeCSS = document.createElement('link');
        darkThemeCSS.rel = 'stylesheet';
        darkThemeCSS.href = './resources/css/landingpage-dark.css';
        darkThemeCSS.classList.add('dark-theme-css');
        header.appendChild(darkThemeCSS);
    }
});