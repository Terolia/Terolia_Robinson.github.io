document.addEventListener("DOMContentLoaded", function() {

    // =========== INITIALIZE AOS (ANIMATE ON SCROLL) ===========
    AOS.init({
        duration: 800,
        once: true,
    });

    // =========== HERO BACKGROUND SLIDER ===========
    new Swiper(".hero-background-slider", {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // =========== NAVBAR HIDE/SHOW ON SCROLL ===========
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            navbar.style.top = '-80px';
        } else {
            navbar.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

    // =========== SMOOTH SCROLLING FOR NAV LINKS ===========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // =========== DYNAMIC HEADING COLOR AND FONT CHANGER ===========
    const heading = document.getElementById('dynamic-heading');
    const colors = ['#e63946', '#457b9d', '#f4a261', '#2a9d8f', '#ffb703', '#6a4c93'];
    const fonts = [
        "'Poppins', sans-serif",
        "'Gochi Hand', cursive",
        "Arial, sans-serif",
        "Georgia, serif",
        "'Courier New', monospace"
    ];
    let colorIdx = 0;
    let fontIdx = 0;

    function changeHeadingStyle() {
        colorIdx = (colorIdx + 1) % colors.length;
        fontIdx = (fontIdx + 1) % fonts.length;
        heading.style.color = colors[colorIdx];
        heading.style.fontFamily = fonts[fontIdx];
    }

    // Change font and color every 2 seconds automatically
    setInterval(changeHeadingStyle, 2000);

});


 
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. PRELOADER LOGIC ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Hides the preloader after a short delay
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000); // 1-second delay
    }

    // --- 2. AOS (ANIMATE ON SCROLL) INITIALIZATION ---
    AOS.init({
        duration: 800,
        once: true,
    });

    // --- 3. HERO BACKGROUND SLIDER ---
    new Swiper(".hero-background-slider", {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // --- 4. TROPHY CAROUSEL (3D COVERFLOW) ---
    new Swiper(".trophy-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // --- 5. NAVBAR HIDE/SHOW ON SCROLL ---
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                navbar.style.top = '-80px';
            } else {
                navbar.style.top = '0';
            }
            lastScrollY = window.scrollY;
        });
    }

    // --- 6. SMOOTH SCROLLING FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

// Trophy Banner Rotator
document.addEventListener("DOMContentLoaded", function() {
    const trophyImages = [
        "assests/1.png",
        "assests/2.png",
        "assests/3.png",
        "assests/bg 1 - Edited.jpg",
        "assests/event 3 - Edited.jpg"
    ];
    let trophyIdx = 0;
    const trophyBannerImg = document.getElementById("trophyBannerImg");

    function showNextTrophy() {
        trophyIdx = (trophyIdx + 1) % trophyImages.length;
        trophyBannerImg.src = trophyImages[trophyIdx];
    }

    setInterval(showNextTrophy, 2000);
});
