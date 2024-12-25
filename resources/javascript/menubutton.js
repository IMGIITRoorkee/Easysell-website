var i = 0;

function show_hide() {
  const bars = document.getElementById("bars");
  const nav = document.querySelector('.main-nav');

  if (i === 1) {
    nav.style.display = "none"; 
    bars.classList.replace("fa-times", "fa-bars"); 
    i = 0;
  } else {
    nav.style.display = "flex"; 
    bars.classList.replace("fa-bars", "fa-times"); 
    i = 1;
  }
}
