const elements = document.getElementsByClassName('c1-text-para');
const mediaQuery = window.matchMedia('(max-width: 800px)');

const mobileText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum magna ut elit ultrices eleifend. Donec id suscipit erat. Proin tristique enim mauris, ut eleifend enim sodales quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum magna ut elit ultrices eleifend.';

const desktopText = elements[0].innerHTML;

const handleScreenChange = (event) => {
    if (event.matches) {
        Array.from(elements).forEach(element => {
            element.innerHTML = mobileText;
        });
    } else if (!event.matches) {
        Array.from(elements).forEach(element => {
            element.innerHTML = desktopText;
        });
    }
};

handleScreenChange(mediaQuery);
mediaQuery.addEventListener("change", handleScreenChange);
