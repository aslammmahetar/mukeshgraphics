
// Initialize Swiper for text slider
var textSwiper = new Swiper(".textSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 3, // Show 3 slides at once
    spaceBetween: 30, // Space between slides
    loop: true, // Infinite loop
    grabCursor: true, // Show grab cursor on hover
    centeredSlides: false, // Don't center the active slide

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Pagination dots
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // When window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // Autoplay (optional)
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var portfolioSwiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 3, // Show 3 slides at once
    spaceBetween: 30, // Space between slides
    loop: true, // Infinite loop
    centeredSlides: false,
    grabCursor: true,

    // Navigation
    navigation: {
        nextEl: ".portfolio-swiper-button-next",
        prevEl: ".portfolio-swiper-button-prev",
    },

    // Pagination
    pagination: {
        el: ".portfolio-swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // Autoplay (optional)
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var portfolioSwiper = new Swiper(".customer-swiper", {
    slidesPerView: 5, // Show 3 slides at once
    spaceBetween: 30, // Space between slides
    loop: true, // Infinite loop
    centeredSlides: false,
    grabCursor: true,

    // Navigation
    navigation: {
        nextEl: ".customer-swiper-button-next",
        prevEl: ".customer-swiper-button-prev",
    },

    // Pagination
    pagination: {
        el: ".customer-swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },

    // Autoplay (optional)
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// Mobile drawer functionality
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    mobileDrawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeDrawer.addEventListener('click', () => {
    mobileDrawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    mobileDrawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Function to show/hide button based on scroll position
function toggleScrollToTop() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
window.addEventListener('scroll', toggleScrollToTop);
scrollToTopBtn.addEventListener('click', scrollToTop);

// Optional: Progress indicator
function updateProgress() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    // Uncomment below if you want progress circle
    // scrollToTopBtn.style.setProperty('--progress', `${scrollPercent}%`);
}

window.addEventListener('scroll', updateProgress);
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset previous errors and success message
    resetMessages();

    // Validate form
    const isValid = validateForm();

    if (isValid) {
        // Simulate form submission
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');

        // Reset form
        this.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
});

function validateForm() {
    let isValid = true;

    // First Name
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim()) {
        showError('firstNameError');
        firstName.classList.add('error');
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim()) {
        showError('lastNameError');
        lastName.classList.add('error');
        isValid = false;
    }

    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        showError('emailError');
        email.classList.add('error');
        isValid = false;
    }

    // Phone (optional but validate if provided)
    const phone = document.getElementById('phone');
    if (phone.value.trim()) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
            showError('phoneError');
            phone.classList.add('error');
            isValid = false;
        }
    }

    // Message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        showError('messageError');
        message.classList.add('error');
        isValid = false;
    }

    return isValid;
}

function showError(errorId) {
    document.getElementById(errorId).classList.add('show');
}

function resetMessages() {
    // Remove error classes from inputs
    const errorInputs = document.querySelectorAll('.form-input.error, .form-textarea.error, .form-select.error');
    errorInputs.forEach(input => input.classList.remove('error'));

    // Hide error messages
    const errorMessages = document.querySelectorAll('.error-message.show');
    errorMessages.forEach(message => message.classList.remove('show'));

    // Hide success message
    document.getElementById('successMessage').classList.remove('show');
}

// Real-time validation
document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('error')) {
            this.classList.remove('error');
            const errorId = this.id + 'Error';
            if (document.getElementById(errorId)) {
                document.getElementById(errorId).classList.remove('show');
            }
        }
    });
});