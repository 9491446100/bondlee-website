// ================================
// BONDLEE WEBSITE JAVASCRIPT
// ================================

// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Thank you for contacting Bondlee. " +
            "Our team will get back to you."
        );

        contactForm.reset();
    });
}


// ================================
// FAQ
// ================================

const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {
    item.addEventListener("toggle", function () {

        if (this.open) {
            faqItems.forEach((otherItem) => {
                if (otherItem !== this) {
                    otherItem.removeAttribute("open");
                }
            });
        }

    });
});


// ================================
// PAGE LOAD
// ================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Bondlee website loaded successfully.");
});