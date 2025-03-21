export function initSlider(consoles, index = 0) {
  const slideInfo = document.querySelector(".console-con");
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  let isAnimating = false;

  let currentIndex = index;

  function showConsoles(index) {
    const prevIndex = (index - 1 + consoles.length) % consoles.length;
    const nextIndex = (index + 1) % consoles.length;

    track.innerHTML = "";

    // previous img
    const prevImg = document.createElement("img");
    prevImg.src = `images/ps${prevIndex + 1}.png`;
    prevImg.classList.add("prev-img", "carousel-img");
    prevImg.addEventListener("click", () => prevSlide());

    // current img
    const currentImg = document.createElement("img");
    currentImg.src = `images/ps${index + 1}.png`;
    currentImg.classList.add("current-img", "carousel-img");

    // next img
    const nextImg = document.createElement("img");
    nextImg.src = `images/ps${nextIndex + 1}.png`;
    nextImg.classList.add("next-img", "carousel-img");
    nextImg.addEventListener("click", () => nextSlide());

    track.append(prevImg, currentImg, nextImg);
  }

  function showSlide(index) {
    slideInfo.innerHTML = "";
    animateConsole();

    const currentSlide = consoles[index];
    currentSlide.consoleInfo();
    currentSlide.gameInfo();

    if (index === 4) {
      currentSlide.extraInfo();
      console.log("extra showing");
    }
  }

  function animateConsole() {
    gsap.fromTo(".console-con", 
      {
        opacity: 0,
        y: 50
      }, 
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".console-con",
          start: "top bottom",
          end: "bottom 50%"
        }
      }
    );
  }

  function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;

    gsap.fromTo(".carousel-img", 
      { x: 0, opacity: 1 }, 
      { x: -300, opacity: 0, duration: 0.5, ease: "power1.out",
        onComplete: function() {
          currentIndex = (currentIndex - 1 + consoles.length) % consoles.length;
          showConsoles(currentIndex);
          showSlide(currentIndex);

          gsap.fromTo(".carousel-img", 
            { x: -300, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.5, ease: "power1.out",
              onComplete: function() {
                isAnimating = false;
                console.log("prev");
              }
            });
        }
      });
  }
  
  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    gsap.fromTo(".carousel-img", 
      { x: 0, opacity: 1 }, 
      { x: 300, opacity: 0, duration: 0.5, ease: "power1.out",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % consoles.length;
          showConsoles(currentIndex);
          showSlide(currentIndex);

          gsap.fromTo(".carousel-img", 
            { x: 300, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 0.5, ease: "power1.out",
              onComplete: () => {
                isAnimating = false;
                console.log("next");
              }
            });
        }
      });
  }

  showConsoles(currentIndex);
  showSlide(currentIndex);

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}
