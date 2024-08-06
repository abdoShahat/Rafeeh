// Throttle function to improve performance
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

function checkSectionInView() {
  const sections = document.querySelectorAll("section");
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      currentSection = section;
    }
  });

  if (currentSection) {
    sections.forEach((section) => {
      section.classList.remove(
        "target-section",
        "fadeIn",
        "slideIn",
        "zoomIn",
        "bounceInLeft",
        "bounceInRight"
      );
    });
    currentSection.classList.add("target-section");

    // Apply different animations based on section ID or any other logic
    if (currentSection.id === "section1") {
      currentSection.classList.add("bounceInLeft");
      const title1 = currentSection.querySelectorAll(".title");
      const description = currentSection.querySelectorAll(".description");
      title1.forEach((el) => {
        el.classList.add("fadeIn");
      });
      description.forEach((el) => {
        el.classList.add("fadeIn");
      });
    } else if (currentSection.id === "section2") {
      new WOW().init();
      function count() {
        const counters = document.querySelectorAll(".number");
        const speed = 100; // Adjust the speed as needed

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 100);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
      }
      count();
      currentSection.classList.add("bounceInRight");
      const title = currentSection.querySelectorAll(".title");
      const content = currentSection.querySelectorAll(".content");
      const stat = currentSection.querySelectorAll(".stat");
      const number = currentSection.querySelectorAll(".number");
      title.forEach((el) => {
        el.classList.add("fadeIn");
      });
      content.forEach((el) => {
        el.classList.add("fadeIn");
      });
      stat.forEach((el) => {
        el.classList.add("slideInUp");
      });
      number.forEach((el) => {
        el.classList.add("zoomIn");
      });
    } else if (currentSection.id === "section3") {
      currentSection.classList.add("fadeIn");
    } else if (currentSection.id === "section4") {
      currentSection.classList.add("slideIn");
    } else if (currentSection.id === "section5") {
      currentSection.classList.add("bounceInLeft");
    } else if (currentSection.id === "section6") {
      currentSection.classList.add("bounceInRight");
    } else if (currentSection.id === "section7") {
      currentSection.classList.add("bounceInLeft");
    }
  }
}

// Listen to the scroll event with throttling
window.addEventListener("scroll", throttle(checkSectionInView, 200));
