document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['<b>Web Developer.</b>', '<b>Programmer.</b>', '<b>Canva Designer.</b>', '<b>Video Editor.</b>'],
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 400,
        loop: true
    });

    let navLinks = document.querySelectorAll('.elements li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                let offset = getWindowOffset();
                let targetRect = targetElement.getBoundingClientRect();
                let targetPosition = targetRect.top + window.scrollY;

                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
                if (window.innerWidth <= 768) {
                    document.getElementsByTagName('nav')[0].style.left = '-130%';
                }
            }
        });
    });

    document.querySelectorAll('.footer-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);
            if (targetElement) {
                let offset = getWindowOffset();
                let targetRect = targetElement.getBoundingClientRect();
                let targetPosition = targetRect.top + window.scrollY;

                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
                if (window.innerWidth <= 768) {
                    document.getElementsByTagName('nav')[0].style.left = '-130%';
                }
            }
        });
    });

    function getWindowOffset() {
        return window.innerWidth < 768 ? 5 : 60;
    }

    window.addEventListener('resize', function () {
        let offset = getWindowOffset();
    });
});

function calculateAge(birthdate) {
    const birthYear = birthdate.getFullYear();
    const currentYear = new Date().getFullYear();
    const isBirthdayPassed = birthdate.getMonth() <= new Date().getMonth() && birthdate.getDate() <= new Date().getDate();

    return isBirthdayPassed ? currentYear - birthYear : currentYear - birthYear - 1;
}

function updateAgeDisplay() {
    const birthdate = new Date('2007-12-27');
    const age = calculateAge(birthdate);
    document.getElementById('ageSpan').textContent = age;
}

updateAgeDisplay();
setInterval(updateAgeDisplay, 1000 * 60 * 60 * 24 * 365);

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementsByTagName('nav')[0].style.left = '0%';
    document.getElementById('close').style.display = 'block';
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementsByTagName('nav')[0].style.left = '-130%';
});

const cardFaces = document.querySelectorAll('.card-face');
let colorIndex = 0;

function changeColor(color) {
    cardFaces.forEach(cardFace => {
        cardFace.style.color = color;
    });
}

setInterval(() => {
    let colors = ['white', 'aqua', '#f0f66e'];
    changeColor(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);


const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach(item => {
    item.addEventListener('click', function () {
        const img = item.querySelector('.carousel-item__img');
        const imageUrl = img.getAttribute('src');
        window.open(imageUrl, '_blank');
    });
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

function downloadResume() {
    var cvFilePath = './resume/Divyansh Goyal Resume.pdf';
    var link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'Divyansh Goyal Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.addEventListener('scroll', function () {
    var animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
            element.classList.remove('animated-element');
            setTimeout(() => {
                element.classList.remove('animate__animated', 'animate__fadeInUp')
            }, 800);
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}