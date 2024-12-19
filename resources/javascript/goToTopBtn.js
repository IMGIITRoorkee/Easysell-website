const scrollTOP = document.querySelector("#scrollTOP");
      scrollTOP.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });

window.addEventListener("scroll", minHeight)

function minHeight(){
    if(window.scrollY > 300){
        scrollTOP.style.display = "block";
    }else{
        scrollTOP.style.display = "none";
    }
}
