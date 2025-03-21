import { slider } from "./slider.js";

export function initCarousel(consoles) {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const consoleImages = ["ps1.png", "ps2.png", "ps3.png", "ps4.png", "ps5.png"];
  let currentIndex = 0;
  let isAnimating = false;

  function updateCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
        track.innerHTML = "";

        // previous img
        const prevIndex =
          (currentIndex - 1 + consoleImages.length) % consoleImages.length;
        const prevImg = document.createElement("img");
        prevImg.src = `images/${consoleImages[prevIndex]}`;
        prevImg.classList.add("prev-img", "carousel-img");
        prevImg.addEventListener("click", () => moveToIndex(prevIndex));

        // current img
        const currentImg = document.createElement("img");
        currentImg.src = `images/${consoleImages[currentIndex]}`;
        currentImg.classList.add("current-img", "carousel-img");

        // next img
        const nextIndex = (currentIndex + 1) % consoleImages.length;
        const nextImg = document.createElement("img");
        nextImg.src = `images/${consoleImages[nextIndex]}`;
        nextImg.classList.add("next-img", "carousel-img");
        nextImg.addEventListener("click", () => moveToIndex(nextIndex));

        // append images
        track.appendChild(prevImg);
        track.appendChild(currentImg);
        track.appendChild(nextImg);

        // gsap position reset
        gsap.set([prevImg, currentImg, nextImg], { clearProps: "all" });
        // Update the console info after the animation is complete
        slider(consoles, currentIndex);
      },
    });

    const existingImages = track.querySelectorAll("img");

    if (existingImages.length > 0) {
      const prevImg = existingImages[0];
      const currentImg = existingImages[1];
      const nextImg = existingImages[2];

      if (
        currentIndex >
          (prevImg.src.includes(
            consoleImages[
              (currentIndex - 1 + consoleImages.length) % consoleImages.length
            ]
          )
            ? (currentIndex - 1 + consoleImages.length) % consoleImages.length
            : currentIndex) ||
        (currentIndex === 0 &&
          prevImg.src.includes(consoleImages[consoleImages.length - 1]))
      ) {
        tl.to(currentImg, {
          x: "-500",
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        })
          .to(nextImg, { x: "500%", duration: 0.5, ease: "power1.inOut" }, "<")
          .fromTo(
            track,
            { x: "500%" },
            { x: "0%", duration: 0.5, ease: "power1.inOut" },
            "<"
          )
          .set(track, { clearProps: "all" });
      } else {
        tl.to(currentImg, {
          x: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        })
          .to(prevImg, { x: "20%", duration: 0.5, ease: "power1.inOut" }, "<")
          .fromTo(
            track,
            { x: "-100%" },
            { x: "0%", duration: 0.5, ease: "power1.inOut" },
            "<"
          )
          .set(track, { clearProps: "all" });
      }
    } else {
      const prevIndex =
        (currentIndex - 1 + consoleImages.length) % consoleImages.length;
      const prevImg = document.createElement("img");
      prevImg.src = `images/${consoleImages[prevIndex]}`;
      prevImg.classList.add("prev-img", "carousel-img");
      prevImg.addEventListener("click", () => moveToIndex(prevIndex));

      const currentImg = document.createElement("img");
      currentImg.src = `images/${consoleImages[currentIndex]}`;
      currentImg.classList.add("current-img", "carousel-img");

      const nextIndex = (currentIndex + 1) % consoleImages.length;
      const nextImg = document.createElement("img");
      nextImg.src = `images/${consoleImages[nextIndex]}`;
      nextImg.classList.add("next-img", "carousel-img");
      nextImg.addEventListener("click", () => moveToIndex(nextIndex));

      track.appendChild(prevImg);
      track.appendChild(currentImg);
      track.appendChild(nextImg);

      isAnimating = false;
      // Update the console info after the animation is complete
      slider(consoles, currentIndex);
    }
  }

  function moveToIndex(index) {
    if (isAnimating) return;
    currentIndex = index;
    updateCarousel();

    gsap.from(".console-con", 1, {
      scrollTrigger: {
        trigger: ".console-con",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false,
      },
      duration: 1,
      opacity: 0,
      ease: "ease2.inOut",
      y: 50,
    });

    const consoleCon = document.querySelector(".carousel-track");
    if (consoleCon) {
      consoleCon.scrollIntoView({ behavior: "smooth" });
    }
  }

  // event listeners for arrows
  prevBtn.addEventListener("click", () =>
    moveToIndex(
      (currentIndex - 1 + consoleImages.length) % consoleImages.length
    )
  );
  nextBtn.addEventListener("click", () =>
    moveToIndex((currentIndex + 1) % consoleImages.length)
  );

  // initialize the carousel
  updateCarousel();
}
