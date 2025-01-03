function animateCounter(element, end, duration) {
    let startTime = null;

    function updateCounter(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const displayValue = Math.floor(progress * end).toLocaleString();
      element.innerText = displayValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = end.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function startCounterWhenVisible() {
    const counterElement = document.querySelector(".counteranimation");
    const targetValue = 60000;

    const checkVisibility = () => {
      if (isElementInViewport(counterElement)) {
        animateCounter(counterElement, targetValue, 1000);
        window.removeEventListener("scroll", checkVisibility);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }

  window.onload = startCounterWhenVisible;
  