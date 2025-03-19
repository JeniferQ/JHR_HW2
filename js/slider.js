export function slider(consoles, index = 0) {
  const slideInfo = document.querySelector(".console-con");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let currentIndex = index;

  function showSlide(index) {
    slideInfo.innerHTML = "";

    const currentSlide = consoles[index];
    currentSlide.consoleInfo();
    currentSlide.gameInfo();

    if (index === 4) {
      currentSlide.extraInfo();
      console.log("extra showing");
    }
  }

  showSlide(currentIndex);

  function prevSlide() {
    currentIndex = (currentIndex - 1 + consoles.length) % consoles.length;
    showSlide(currentIndex);
    console.log("prev");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % consoles.length;
    showSlide(currentIndex);
    console.log("next");
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
}
