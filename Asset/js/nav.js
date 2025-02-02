let isClickingNavLink = false; // Flag to detect if the user clicked a nav link

// Function to update hori-selector position
function test() {
    const tabsNewAnim = $('#navbarSupportedContent');
    const activeItemNewAnim = tabsNewAnim.find('.active');
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnim = activeItemNewAnim.position();

    requestAnimationFrame(() => {
        $(".hori-selector").css({
            "transform": `translate(${itemPosNewAnim.left}px, ${itemPosNewAnim.top}px)`,
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}

// Function to activate link and update the hori-selector position
function activateLink(element) {
    isClickingNavLink = true; // Set flag to true when a link is clicked

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach((item) => {
        item.classList.remove('active');
    });

    // Add active class to the clicked nav item
    element.parentElement.classList.add('active');

    // Scroll to section smoothly
    const url = element.getAttribute('data-url');
    document.querySelector(url).scrollIntoView({ behavior: 'smooth' });

    // Update hori-selector position
    test();

    // Allow scroll detection again after a short delay (1 second) to prevent jumping back
    setTimeout(function() {
        isClickingNavLink = false;
    }, 1000);
}

// Scroll event listener to check which section is currently in view
function handleScroll() {
    if (isClickingNavLink) return; // If a nav link was clicked, skip this scroll detection

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Activate the corresponding nav link based on scroll position
    navLinks.forEach(link => {
        if (link.getAttribute("data-url") === `#${currentSection}`) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });

    // Update hori-selector position based on scroll position
    test();
}

// Throttling the scroll event handler
function throttle(fn, wait) {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    };
}

// Call the test() function and scroll handler on page load and scroll
$(document).ready(function () {
    setTimeout(function () {
        test();
    });

    $(window).on('scroll', throttle(function () {
        handleScroll(); // Activate nav link based on scroll
    }, 100)); // Throttled to 100ms

    // Initially set active link for the current section
    handleScroll(); // Call on page load
});

// Handle window resize with throttling
$(window).on('resize', throttle(function () {
    setTimeout(function () {
        test();
    }, 500);
}, 100));

// Handle navbar toggler click with CSS transitions for faster performance
$(".navbar-toggler").click(function () {
    const navbar = $(".navbar-collapse");
    navbar.toggleClass("open");

    // Manually control the height using transitions for smoother experience
    if (navbar.hasClass("open")) {
        navbar.css("height", navbar.get(0).scrollHeight + "px");
    } else {
        navbar.css("height", "0px");
    }

    setTimeout(function () {
        test();
    }, 300); // Timeout adjusted to match CSS transition time
});