var i = 0;

function show_hide() {
  const bars = document.getElementById("bars");
  const nav = document.querySelector('.main-nav');

  if (i === 1) {
    nav.classList.remove('active');
    bars.classList.replace("fa-times", "fa-bars");
    setTimeout(() => {
      nav.style.display = "none";
    }, 300);
    i = 0;
  } else {
    nav.style.display = "flex";
    setTimeout(() => {
      nav.classList.add('active');
    }, 10);
    bars.classList.replace("fa-bars", "fa-times");
    i = 1;
  }
}