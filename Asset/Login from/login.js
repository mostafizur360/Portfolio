// Get elements
const lightbox = document.getElementById('lightbox');
const openLightboxButton = document.getElementById('openLightbox');
const closeLightboxButton = document.getElementById('closeLightbox');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterFormLink = document.getElementById('showRegisterForm');
const showLoginFormLink = document.getElementById('showLoginForm');

// Open the lightbox
openLightboxButton.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // Show the lightbox
    loginForm.classList.add('active'); // Show the login form by default
});

// Close the lightbox only when the close button is clicked
closeLightboxButton.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
    loginForm.classList.remove('active'); // Reset the login form
    registerForm.classList.remove('active'); // Reset the register form
});

// Switch to Register form
showRegisterFormLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    loginForm.classList.remove('active'); // Hide login form
    registerForm.classList.add('active'); // Show register form
});

// Switch to Login form
showLoginFormLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    registerForm.classList.remove('active'); // Hide register form
    loginForm.classList.add('active'); // Show login form
});
