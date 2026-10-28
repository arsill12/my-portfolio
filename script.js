const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});
 
 
// Close menu when resizing to desktop

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
    }
});


// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        // menuToggle.setAttribute("aria-expanded", "false");
        // menuToggle.setAttribute("aria-label", "Open menu");
    });
});



   // Animate skill bars when the section becomes visible
    const skillSection = document.querySelector(".skills");
    const skillBars = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            bar.style.width = bar.dataset.level + "%";
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillSection);


     // Automatically update the copyright year
        document.getElementById("currentYear").textContent =
            new Date().getFullYear();

        // Demo form submission
        const contactForm = document.getElementById("contactForm");
        const formStatus = document.getElementById("formStatus");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formStatus.textContent =
                "Form design is working! Connect a backend to send messages.";

            // Clear the form fields
            contactForm.reset();
        });


        // Hire Me button smooth scrolling
document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const contactSection = document.querySelector("#contact");

        if (contactSection) {
            event.preventDefault();
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



const ctaSection = document.querySelector(".project-cta");

if (ctaSection && window.matchMedia("(min-width: 769px)").matches) {
    let ticking = false;

    function updateParallax() {
        const rect = ctaSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom >= 0 && rect.top <= viewportHeight) {
            const distance = (viewportHeight - rect.top) * 0.08;

            ctaSection.style.setProperty(
                "--parallax-y",
                `${distance - 40}px`
            );
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    updateParallax();
}


// typing code
new Typed(".typing", {
        strings: ["Web Developer", "Web Designer", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });