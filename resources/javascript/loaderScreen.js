window.addEventListener("load", function () {
    const introLanding = document.getElementById("intro-landing");
    const mainContent = document.querySelector(".main-content");
    // Start the slide-away animation
    introLanding.style.animation = "slideAway 2.5s ease-out 2s forwards";
    // After the animation, hide the intro and show the main content
    setTimeout(() => {
      introLanding.style.display = "none";
      mainContent.style.display = "block"; // Show the main content
      document.body.style.overflow = "auto"; // Restore scrolling
    }, 5000); // Match the animation duration (5 seconds)
  });
  // Inline keyframe animation
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes slideAway {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
  document.head.appendChild(style);