document.addEventListener("DOMContentLoaded", function () {
    // Function to change font colors dynamically
    function changeFontColors(primary, header, sectionHeader, paragraph) {
        document.documentElement.style.setProperty('--primary-font-color', primary);
        document.documentElement.style.setProperty('--header-font-color', header);
        document.documentElement.style.setProperty('--section-header-color', sectionHeader);
        document.documentElement.style.setProperty('--paragraph-font-color', paragraph);
    }

    // eexample usage: Change colors
    changeFontColors('#005dff', '#005dff', '#005dff', '#ffffff');

    // Carousel for Programming Languages
    const trackLang = document.querySelector(".skills-container .carousel-track");
    const logosLang = trackLang.querySelectorAll(".skill-logo");

    let cloneCountLang = logosLang.length;

    // Clone each logo to ensure the infinite scroll effect for Programming Languages
    logosLang.forEach((logo) => {
        const clone = logo.cloneNode(true);
        trackLang.appendChild(clone);
    });

    let offsetLang = 0;
    const speedLang = 0.5; // Adjust the speed of the scrolling

    function animateLogosLang() {
        offsetLang -= speedLang;
        const maxOffsetLang = -trackLang.scrollWidth / 2;

        if (offsetLang <= maxOffsetLang) {
            offsetLang = 0;
        }

        trackLang.style.transform = `translateX(${offsetLang}px)`;
        requestAnimationFrame(animateLogosLang);
    }

    animateLogosLang();

    // Carousel for Front-End Development
    const trackFE = document.querySelectorAll(".skills-container .carousel-track")[1];
    const logosFE = trackFE.querySelectorAll(".skill-logo");

    let cloneCountFE = logosFE.length;

    // Clone each logo to ensure the infinite scroll effect for Front-End Development
    logosFE.forEach((logo) => {
        const clone = logo.cloneNode(true);
        trackFE.appendChild(clone);
    });

    let offsetFE = 0;
    const speedFE = 0.5; // Adjust the speed of the scrolling

    function animateLogosFE() {
        offsetFE -= speedFE;
        const maxOffsetFE = -trackFE.scrollWidth / 2;

        if (offsetFE <= maxOffsetFE) {
            offsetFE = 0;
        }

        trackFE.style.transform = `translateX(${offsetFE}px)`;
        requestAnimationFrame(animateLogosFE);
    }

    animateLogosFE();

    // Carousel for Back-End Development
    const trackBE = document.querySelectorAll(".skills-container .carousel-track")[2];
    const logosBE = trackBE.querySelectorAll(".skill-logo");

    let cloneCountBE = logosBE.length;

    // Clone each logo to ensure the infinite scroll effect for Back-End Development
    logosBE.forEach((logo) => {
        const clone = logo.cloneNode(true);
        trackBE.appendChild(clone);
    });

    let offsetBE = 0;
    const speedBE = 0.5; // Adjust the speed of the scrolling

    function animateLogosBE() {
        offsetBE -= speedBE;
        const maxOffsetBE = -trackBE.scrollWidth / 2;

        if (offsetBE <= maxOffsetBE) {
            offsetBE = 0;
        }

        trackBE.style.transform = `translateX(${offsetBE}px)`;
        requestAnimationFrame(animateLogosBE);
    }

    animateLogosBE();
});
