export function initCarousel() {
  // variables
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const dots = document.querySelectorAll(".dot");
  const consoles = ["ps1.png", "ps2.png", "ps3.png", "ps4.png", "ps5.png"];
  let currentIndex = 0;
  let isAnimating = false;

  function updateCarousel() {
    if (isAnimating) return; // bug fix to prevent unwanted animation
    isAnimating = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
        track.innerHTML = "";

        // previous
        const prevIndex =
          (currentIndex - 1 + consoles.length) % consoles.length;
        const prevImg = document.createElement("img");
        prevImg.src = `images/${consoles[prevIndex]}`;
        prevImg.classList.add("prev-img", "carousel-img");
        prevImg.style.opacity = currentIndex === 0 ? 0 : 1;
        prevImg.addEventListener("click", () => moveToIndex(prevIndex));

        // current
        const currentImg = document.createElement("img");
        currentImg.src = `images/${consoles[currentIndex]}`;
        currentImg.classList.add("current-img", "carousel-img");

        // next
        const nextIndex = (currentIndex + 1) % consoles.length;
        const nextImg = document.createElement("img");
        nextImg.src = `images/${consoles[nextIndex]}`;
        nextImg.classList.add("next-img", "carousel-img");
        nextImg.style.opacity = currentIndex === consoles.length - 1 ? 0 : 1;
        nextImg.addEventListener("click", () => moveToIndex(nextIndex));

        // append images to slider
        track.appendChild(prevImg);
        track.appendChild(currentImg);
        track.appendChild(nextImg);

        // gsap position reset
        gsap.set([prevImg, currentImg, nextImg], { clearProps: "all" });

        // active dot
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
        });
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
            consoles[(currentIndex - 1 + consoles.length) % consoles.length]
          )
            ? (currentIndex - 1 + consoles.length) % consoles.length
            : currentIndex) ||
        (currentIndex === 0 &&
          prevImg.src.includes(consoles[consoles.length - 1]))
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
      const prevIndex = (currentIndex - 1 + consoles.length) % consoles.length;
      const prevImg = document.createElement("img");
      prevImg.src = `images/${consoles[prevIndex]}`;
      prevImg.classList.add("prev-img", "carousel-img");
      prevImg.style.opacity = currentIndex === 0 ? 0 : 1;
      prevImg.addEventListener("click", () => moveToIndex(prevIndex));

      const currentImg = document.createElement("img");
      currentImg.src = `images/${consoles[currentIndex]}`;
      currentImg.classList.add("current-img", "carousel-img");

      const nextIndex = (currentIndex + 1) % consoles.length;
      const nextImg = document.createElement("img");
      nextImg.src = `images/${consoles[nextIndex]}`;
      nextImg.classList.add("next-img", "carousel-img");
      nextImg.style.opacity = currentIndex === consoles.length - 1 ? 0 : 1;
      nextImg.addEventListener("click", () => moveToIndex(nextIndex));

      track.appendChild(prevImg);
      track.appendChild(currentImg);
      track.appendChild(nextImg);

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
      isAnimating = false;
    }
  }

  // Function to move to a specific index
  function moveToIndex(index) {
    if (isAnimating) return; //prevent animation if one is in progress
    currentIndex = index;
    updateCarousel();
  }

  // Event listeners for arrows
  prevBtn.addEventListener("click", () =>
    moveToIndex((currentIndex - 1 + consoles.length) % consoles.length)
  );
  nextBtn.addEventListener("click", () =>
    moveToIndex((currentIndex + 1) % consoles.length)
  );

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => moveToIndex(index));
  });

  // Initialize the carousel
  updateCarousel();
}
