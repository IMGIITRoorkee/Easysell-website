window.onscroll = function () {
    updateProgressBar();
  };

  function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    const progressWidth = (scrollPosition / totalHeight) * 100;

    progressBar.style.width = progressWidth + "%";
  }