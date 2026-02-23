function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    highlightActiveNav();
    animateCounters();
    initTestimonials();
};

function highlightActiveNav() {
    let links = document.querySelectorAll(".nav-item");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
});

function animateCounters() {
    let counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = target / 100;
        function update() {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        }
        update();
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Please fill all required fields.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

/* Testimonials slider: rotates `.testimonial` blocks */
function initTestimonials() {
    let testimonials = document.querySelectorAll('.testimonial');
    if (!testimonials || testimonials.length <= 1) return;
    let index = 0;
    function show(i) {
        testimonials.forEach((t, idx) => {
            t.classList.toggle('active-testimonial', idx === i);
        });
    }
    show(index);
    setInterval(() => {
        index = (index + 1) % testimonials.length;
        show(index);
    }, 5000);
}