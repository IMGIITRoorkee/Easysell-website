var i = 0;

function show_hide() {
    if (i == 1) {
        document.querySelector('.main-nav').style.left = '120%';
        document.querySelector('#li3').style.left = '-120%';
        return i = 0;
    } else {
        console.log('ya')
        document.querySelector('.main-nav').style.left = '0%';
        document.querySelector('#li3').style.left = '-13.9%';
        return i = 1;
    }
}