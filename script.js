document.addEventListener("DOMContentLoaded", function () {
  var colors = ["rgb(247, 92, 169)", "yellow", "red", "orange"];
  var currentColorIndex = 0;

  var typed = new Typed("#element", {
    strings: [
      "Web Developer.",
      "Programmer.",
      "Canva Designer.",
      "Video Editor.",
    ],
    typeSpeed: 45,
    backSpeed: 40,
    backDelay: 1000,
    startDelay: 400,
    loop: true,
    preStringTyped: function () {
      document.getElementById("element").style.color =
        colors[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    },
  });

  let navLinks = document.querySelectorAll(".elements li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        let offset = getWindowOffset();
        let targetRect = targetElement.getBoundingClientRect();
        let targetPosition = targetRect.top + window.scrollY;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth",
        });
        if (window.innerWidth <= 768) {
          document.getElementsByTagName("nav")[0].style.left = "-130%";
        }
      }
    });
  });

  document.querySelectorAll(".footer-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      if (targetElement) {
        let offset = getWindowOffset();
        let targetRect = targetElement.getBoundingClientRect();
        let targetPosition = targetRect.top + window.scrollY;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth",
        });
        if (window.innerWidth <= 768) {
          document.getElementsByTagName("nav")[0].style.left = "-130%";
        }
      }
    });
  });

  function getWindowOffset() {
    return window.innerWidth < 768 ? 5 : 60;
  }

  window.addEventListener("resize", function () {
    let offset = getWindowOffset();
  });
});

function calculateAge(birthdate) {
  const birthYear = birthdate.getFullYear();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  const isBirthdayPassed =
    currentMonth > birthdate.getMonth() ||
    (currentMonth === birthdate.getMonth() &&
      currentDate >= birthdate.getDate());

  return isBirthdayPassed
    ? currentYear - birthYear
    : currentYear - birthYear - 1;
}

function updateAgeDisplay() {
  const birthdate = new Date("2007-12-27");
  const age = calculateAge(birthdate);
  document.getElementById("ageSpan").textContent = age;
}

updateAgeDisplay();

setInterval(updateAgeDisplay, 1000 * 60 * 60 * 24);

// function startAgeCounter(birthdateString) {
//   const birthdate = new Date(birthdateString);

//   function updateAge() {
//     const now = new Date();
//     let years = now.getFullYear() - birthdate.getFullYear();
//     let months = now.getMonth() - birthdate.getMonth();
//     let days = now.getDate() - birthdate.getDate();
//     let hours = now.getHours() - birthdate.getHours();
//     let minutes = now.getMinutes() - birthdate.getMinutes();
//     let seconds = now.getSeconds() - birthdate.getSeconds();
//     let milliseconds = now.getMilliseconds() - birthdate.getMilliseconds();

//     if (milliseconds < 0) {
//       milliseconds += 1000;
//       seconds -= 1;
//     }

//     if (seconds < 0) {
//       seconds += 60;
//       minutes -= 1;
//     }

//     if (minutes < 0) {
//       minutes += 60;
//       hours -= 1;
//     }

//     if (hours < 0) {
//       hours += 24;
//       days -= 1;
//     }

//     if (days < 0) {
//       const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
//       days += previousMonth.getDate();
//       months -= 1;
//     }

//     if (months < 0) {
//       months += 12;
//       years -= 1;
//     }

//     console.clear();
//     console.log(
//       `Age: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`
//     );
//   }

//   updateAge();

//   setInterval(updateAge, 100);
// }

// startAgeCounter("2007-12-27T00:00:00");

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementsByTagName("nav")[0].style.left = "0%";
  document.getElementById("close").style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementsByTagName("nav")[0].style.left = "-130%";
});

const cardFaces = document.querySelectorAll(".card-face");
let colorIndex = 0;

function changeColor(color) {
  cardFaces.forEach((cardFace) => {
    cardFace.style.color = color;
  });
}

setInterval(() => {
  let colors = ["white", "aqua", "#f0f66e"];
  changeColor(colors[colorIndex]);
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

const carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach((item) => {
  item.addEventListener("click", function () {
    const img = item.querySelector(".carousel-item__img");
    const imageUrl = img.getAttribute("src");
    window.open(imageUrl, "_blank");
  });
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function downloadResume() {
  var cvFilePath = "./resume/Divyansh Goyal Resume.pdf";
  var link = document.createElement("a");
  link.href = cvFilePath;
  link.download = "Divyansh Goyal Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.addEventListener("scroll", function () {
  var animatedElements = document.querySelectorAll(".animated-element");
  animatedElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("animate__animated", "animate__fadeInUp");
      element.classList.remove("animated-element");
      setTimeout(() => {
        element.classList.remove("animate__animated", "animate__fadeInUp");
      }, 800);
    }
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

tsParticles.load("tsparticles", {
  background: {
    color: "#0e0b16",
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "star",
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outMode: "out",
      bounce: false,
    },
  },
});
