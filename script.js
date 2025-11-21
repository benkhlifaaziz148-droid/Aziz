// ===== Smooth Scroll Button =====
const scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// ===== Reveal on Scroll =====
const revealElements = document.querySelectorAll('.section, .skill, .project-card');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== Add CSS transitions dynamically =====
const style = document.createElement('style');
style.innerHTML = `
    .section, .skill, .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.7s ease;
    }
    
    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
