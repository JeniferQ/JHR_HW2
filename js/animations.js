// This file holds GSAP animations

// GSAP library is linked in index.html

export function initAnimations() {
  gsap.from(".hero-content", {
    scrollTrigger: {
      trigger: ".hero-content",
      start: "top 50%",
      end: "bottom 50%",
      toggleActions: "play none none none",
      markers: false,
    },
    duration: 2,
    opacity: 0,
    y: -50,
    ease: "ease2.inOut",
  });

  gsap.from(".story-text-con", {
    scrollTrigger: {
      trigger: ".story-paragraph-con",
      start: "top 90%",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "ease2.inOut",
  });

  gsap.from(".story-divisory-line", {
    scrollTrigger: {
      trigger: ".story-paragraph-con",
      start: "top 90%",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 2,
    opacity: 0,
    x: 100,
    ease: "ease2.inOut",
  });

  gsap.from(".story-text-con img", {
    scrollTrigger: {
      trigger: ".story-paragraph-con",
      start: "top 90%",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 3,
    opacity: 0,
    y: -50,
    ease: "ease2.inOut",
  });

  gsap.from(".story-paragraph", {
    scrollTrigger: {
      trigger: ".story-paragraph",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "ease2.inOut",
    stagger: 0.3,
  });

  gsap.from(".story-image", {
    scrollTrigger: {
      trigger: ".story-image",
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "ease2.inOut",
  });

  gsap.from(".page-divs", 2, {
    scrollTrigger: {
      trigger: ".page-divs",
      start: "top bottom",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 2,
    opacity: 0,
    ease: "ease2.inOut",
    y: -50,
  });

  gsap.from(".page-divisory-line", 2, {
    scrollTrigger: {
      trigger: ".page-divs",
      start: "top bottom",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    duration: 2,
    opacity: 0,
    ease: "ease2.inOut",
    y: -50,
  });
}

gsap.from(".timeline-text", 2, {
  scrollTrigger: {
    trigger: ".timeline-text",
    start: "top bottom",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    markers: false,
  },
  duration: 2,
  opacity: 0,
  ease: "ease2.inOut",
  y: -150,
});

gsap.from(".carousel-buttons", 3, {
  scrollTrigger: {
    trigger: ".timeline-text",
    start: "top bottom",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    markers: false,
  },
  duration: 5,
  opacity: 0,
  ease: "ease2.inOut",
});

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

gsap.from(".footer", 1, {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 60%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    markers: false,
  },
  duration: 3,
  opacity: 0,
  ease: "ease2.inOut",
  y: -25,
});

gsap.from(".footer img", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 60%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    markers: false,
  },
  duration: 1,
  y: 25,
  opacity: 0,
  scale: 0.75,
  ease: "ease2.inOut",
});
