/* PARTICLES */

particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    color: {
      value: "#b6ff3b"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#b6ff3b",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }

  }

});


/* TYPING ANIMATION */

var typed = new Typed("#element", {

  strings: [
    "Web Developer",
    "Creative Designer",
    "Future Builder",
    "Frontend Developer"
  ],

  typeSpeed: 80,

  backSpeed: 50,

  loop: true

});


/* AOS */

AOS.init({

  duration: 1200,

  once: true

});


/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";

});