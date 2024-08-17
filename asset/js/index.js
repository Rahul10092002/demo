function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("number-ye");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCount();
        observer.unobserve(target); // Unobserve after the count starts
      }
    });
  }, observerOptions);

  observer.observe(target);

  function startCount() {
    let count = 0;
    const targetNumber = 15;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / targetNumber));

    const timer = setInterval(() => {
      count++;
      target.textContent = count + "+";
      if (count >= targetNumber) {
        clearInterval(timer);
      }
    }, stepTime);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting:", entry.target);
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  });

  const elements = document.querySelectorAll(
    ".columnab, .column-2ab, .column-mp, .column-2-mp, .column-15, .column-16"
  );
  elements.forEach((element) => {
    console.log("Observing element:", element);
    observer.observe(element);
  });
});
