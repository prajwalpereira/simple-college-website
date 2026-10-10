/* ============================================================
   Harbour College — main script
   Sidebar, theme, global search, event countdown, smart chat,
   testimonial slider, dynamic news feed, toasts, form checks
   ============================================================ */

/* ---------------- Shared data ---------------- */

const EVENTS = [
    { name: "Open Day", date: "2026-03-15T09:00:00", description: "Campus tours & info sessions" },
    { name: "Research Symposium", date: "2026-04-10T10:00:00", description: "Student research showcase" },
    { name: "Tech Fest", date: "2026-05-02T09:00:00", description: "Hackathons and workshops" }
];

const NEWS_DATA = [
    {
        id: 1,
        title: "Admissions Open 2026-27",
        category: "Admissions",
        date: "2026-01-15",
        summary: "Applications are now open for all undergraduate and postgraduate programs.",
        body: "Harbour College is accepting applications for the 2026-27 academic year across BCA, BSc Computer Science, BCom, MSc Computer Science, MCom and MBA programs. Merit-based and need-based scholarships are available for eligible candidates. Visit the admissions office or the Contact page for deadlines and application procedures."
    },
    {
        id: 2,
        title: "New AI & Robotics Lab Inaugurated",
        category: "Campus",
        date: "2026-01-28",
        summary: "A state-of-the-art lab for artificial intelligence and robotics projects is now open.",
        body: "The new AI & Robotics Lab provides students with GPU workstations, robotic kits and simulation software. The lab will support final-year projects, hackathons and faculty research in machine learning and computer vision. Lab time can be booked through the department office."
    },
    {
        id: 3,
        title: "National IT Fest Announced",
        category: "Events",
        date: "2026-02-05",
        summary: "This year's Tech Fest brings hackathons, workshops and guest talks to campus.",
        body: "The annual National IT Fest will run for three days with 24-hour hackathons, technical workshops, a coding championship and guest sessions from industry leaders. Team registration opens two weeks before the event. Prizes and certificates await winners in every category."
    },
    {
        id: 4,
        title: "Ranked Top 10 in Karnataka",
        category: "Achievements",
        date: "2026-02-18",
        summary: "Harbour College features among the region's top institutions in the annual rankings.",
        body: "The college has been ranked among the top 10 institutions in Karnataka for academic outcomes, placements and infrastructure. The ranking recognises our NAAC A Grade accreditation, 98% placement rate and the research output of faculty and students."
    },
    {
        id: 5,
        title: "24 Hour Hackathon This Weekend",
        category: "Events",
        date: "2026-02-22",
        summary: "Students build solutions around sustainability in a full-day coding marathon.",
        body: "Teams of up to four students will develop working prototypes on the theme 'Technology for Sustainable Futures'. Mentors from industry will guide teams through the night. Meals, swag and prize money are provided, and all branches are welcome to participate."
    },
    {
        id: 6,
        title: "15 University Gold Medalists",
        category: "Achievements",
        date: "2026-03-02",
        summary: "Our students topped university examinations across computing and commerce.",
        body: "Fifteen Harbour College students secured gold medals in university examinations this year, continuing the college's tradition of academic excellence. Congratulations to the students, and to the faculty and families who supported them."
    },
    {
        id: 7,
        title: "Industry Workshop Series Begins",
        category: "Campus",
        date: "2026-03-08",
        summary: "Monthly workshops with 50+ recruiting partners start this semester.",
        body: "The Career Services team launches a monthly workshop series with industry partners covering resume writing, technical interviews and emerging tools. Sessions are free for all students and open to alumni on request."
    },
    {
        id: 8,
        title: "Scholarship Applications Now Open",
        category: "Admissions",
        date: "2026-03-12",
        summary: "Merit and need-based scholarships available for the 2026 intake.",
        body: "High achievers and deserving students can apply for scholarships covering up to 100% of tuition fees. Applications are reviewed on a rolling basis, and early applicants have the best chance of support. See the admissions office for eligibility details."
    }
];

const SEARCH_INDEX = [
    { title: "Home", page: "index.html", category: "Overview", keywords: "home about college harbour", featured: true },
    { title: "History of the College", page: "index.html", category: "About", keywords: "history established 1985 heritage alumni tradition" },
    { title: "Vision & Mission", page: "index.html", category: "About", keywords: "vision mission values innovation integrity excellence responsibility" },
    { title: "BSc Computer Science", page: "courses.html", category: "Courses", keywords: "bsc computer science software development algorithms systems engineering", featured: true },
    { title: "Bachelor of Commerce (BCom)", page: "courses.html", category: "Courses", keywords: "bcom commerce accounting finance entrepreneurship business analytics" },
    { title: "Master of Business Administration (MBA)", page: "courses.html", category: "Courses", keywords: "mba master business administration leadership management projects", featured: true },
    { title: "BCA", page: "courses.html", category: "Courses", keywords: "bca software engineering artificial intelligence cybersecurity cloud computing" },
    { title: "MSc Computer Science", page: "courses.html", category: "Courses", keywords: "msc machine learning deep learning big data cloud research thesis" },
    { title: "MCom", page: "courses.html", category: "Courses", keywords: "mcom financial management marketing research business analytics strategy" },
    { title: "Admissions 2026", page: "index.html", category: "Admissions", keywords: "admission admit apply application 2026 intake scholarship", featured: true },
    { title: "Upcoming Events", page: "index.html", category: "Events", keywords: "events open day research symposium tech fest hackathon workshops" },
    { title: "Alumni Voices", page: "index.html", category: "About", keywords: "testimonials alumni stories success careers" },
    { title: "News & Updates", page: "news.html", category: "News", keywords: "news updates announcements ai robotics lab it fest achievements" },
    { title: "Placements & Industry Links", page: "courses.html", category: "Careers", keywords: "placement career industry recruiters internship jobs cv interview" },
    { title: "Facilities & Student Support", page: "courses.html", category: "Campus", keywords: "facilities labs library mentorship counseling hostel" },
    { title: "Frequently Asked Questions", page: "courses.html", category: "Help", keywords: "faq how apply scholarships eligibility duration" },
    { title: "Contact Information", page: "contact.html", category: "Contact", keywords: "contact email phone address location mangalore hampankatta", featured: true },
    { title: "Send a Message", page: "contact.html", category: "Contact", keywords: "enquiry form message feedback admission help" },
    { title: "College Brochure", page: "courses.html", category: "Courses", keywords: "brochure download pdf prospectus" }
];

const CHATBRAIN = [
    { keys: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"], reply: "Hello! I'm the Harbour College assistant. Ask me about admissions, courses, fees, placements or upcoming events." },
    { keys: ["admission", "admit", "apply", "application", "eligibility"], reply: "Admissions for the 2026 intake are open! Eligibility varies by program — most UG courses need 10+2. Ask me about scholarships or visit the Contact page." },
    { keys: ["course", "courses", "program", "degree", "study", "bca", "bsc", "bcom", "mba", "msc", "mcom", "subject"], reply: "We offer BCA, BSc Computer Science, BCom, MSc Computer Science, MCom and MBA. Check the Courses page for full curricula and durations." },
    { keys: ["fee", "fees", "cost", "price", "tuition", "scholarship", "financial"], reply: "Merit and need-based scholarships are available for the 2026 intake. For the detailed fee structure, contact admissions at info@harbourcollege.edu." },
    { keys: ["placement", "job", "jobs", "career", "internship", "recruit", "salary", "employ"], reply: "Our placement rate is 98% with 50+ recruiting partners. Career Services offers CV coaching, mock interviews and employer networking events." },
    { keys: ["event", "events", "fest", "hackathon", "symposium", "open day", "workshop", "seminar"], reply: "Upcoming events include Open Day, the Research Symposium and Tech Fest. See the News page for dates and details." },
    { keys: ["contact", "phone", "email", "address", "location", "reach", "call", "visit"], reply: "Reach us at info@harbourcollege.edu, +91 9876543210, or visit us at Hampankatta, Mangalore. The Contact page has an enquiry form too." },
    { keys: ["hostel", "accommodation", "housing", "room", "stay"], reply: "On-campus hostels are available for all students. Contact the office at +91 9876543210 for availability and fees." },
    { keys: ["faculty", "teacher", "professor", "staff", "research"], reply: "Our 150+ faculty members hold doctoral qualifications with active research in AI, Data Science and Business Analytics." },
    { keys: ["campus", "facility", "lab", "library", "infrastructure"], reply: "Campus highlights include modern AI and networking labs, a digital library, and mentorship programs. See the Courses page under Student Support." },
    { keys: ["thank", "thanks", "great", "awesome", "nice"], reply: "You're welcome! Anything else I can help you with?" },
    { keys: ["human", "person", "someone", "staff member", "real"], reply: "A staff member will respond to enquiries within 2 business days. Meanwhile I can help with courses, fees, placements and events!" },
    { keys: ["bye", "goodbye", "see you"], reply: "Goodbye! Hope to see you at Harbour College soon." }
];

/* ---------------- Sidebar ---------------- */

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    localStorage.setItem("sidebar", sidebar.classList.contains("active") ? "open" : "closed");
}

function initSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && localStorage.getItem("sidebar") === "open") {
        sidebar.classList.add("active");
    }
}

/* ---------------- Theme ---------------- */

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateModeIcon();
}

function updateModeIcon() {
    const icon = document.querySelector(".mode-toggle i");
    if (icon) icon.className = document.body.classList.contains("dark-mode") ? "fas fa-sun" : "fas fa-moon";
}

/* ---------------- Mobile nav ---------------- */

function initMobileNav() {
    const btn = document.getElementById("mobileMenuBtn");
    const sidebar = document.getElementById("sidebar");
    if (!btn || !sidebar) return;

    btn.addEventListener("click", e => {
        e.stopPropagation();
        sidebar.classList.toggle("mobile-open");
    });

    document.addEventListener("click", e => {
        if (sidebar.classList.contains("mobile-open") && !sidebar.contains(e.target)) {
            sidebar.classList.remove("mobile-open");
        }
    });

    sidebar.querySelectorAll(".nav-item").forEach(a =>
        a.addEventListener("click", () => sidebar.classList.remove("mobile-open"))
    );
}

/* ---------------- Active nav link ---------------- */

function highlightActiveNav() {
    const links = document.querySelectorAll(".nav-item");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });
}

/* ---------------- Reveal on scroll ---------------- */

function initReveal() {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        reveals.forEach(el => el.classList.add("visible"));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    reveals.forEach(el => io.observe(el));
}

/* ---------------- Animated counters ---------------- */

function initCounters() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length || !("IntersectionObserver" in window)) {
        counters.forEach(c => c.textContent = c.getAttribute("data-target"));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
}

function animateCounter(el) {
    const target = +el.getAttribute("data-target");
    const duration = 1600;
    const start = performance.now();
    function frame(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

/* ---------------- Back to top ---------------- */

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function initTopButton() {
    const btn = document.querySelector(".top-btn");
    if (!btn) return;
    window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 300);
    }, { passive: true });
}

/* ---------------- Events (shared data) ---------------- */

function nextOccurrence(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    while (d <= now) d.setFullYear(d.getFullYear() + 1);
    return d;
}

function upcomingEvents() {
    return EVENTS
        .map(e => ({ name: e.name, description: e.description, when: nextOccurrence(e.date) }))
        .sort((a, b) => a.when - b.when);
}

function initEventList() {
    const list = document.getElementById("eventList");
    if (!list) return;
    list.innerHTML = "";
    upcomingEvents().forEach(e => {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        strong.textContent = e.name + ":";
        li.appendChild(strong);
        li.appendChild(document.createTextNode(
            " " + e.when.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) +
            " — " + e.description + "."
        ));
        list.appendChild(li);
    });
}

function initCountdown() {
    const timer = document.getElementById("countdownTimer");
    if (!timer) return;
    const label = document.getElementById("countdownLabel");
    let target = upcomingEvents()[0];

    function setText(id, val) {
        const el = document.getElementById(id);
        if (el) el.textContent = String(val).padStart(2, "0");
    }

    function tick() {
        const now = new Date();
        let diff = target.when - now;
        if (diff <= 0) {
            target = upcomingEvents()[0];
            diff = target.when - now;
        }
        setText("cdDays", Math.floor(diff / 86400000));
        setText("cdHours", Math.floor(diff / 3600000) % 24);
        setText("cdMinutes", Math.floor(diff / 60000) % 60);
        setText("cdSeconds", Math.floor(diff / 1000) % 60);
        if (label) {
            label.textContent = target.name + " — " + target.description +
                " • " + target.when.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
        }
    }

    tick();
    setInterval(tick, 1000);
}

/* ---------------- Testimonials slider ---------------- */

function initTestimonials() {
    const section = document.querySelector(".testimonials");
    if (!section) return;
    const items = Array.from(section.querySelectorAll(".testimonial"));
    const dotsWrap = document.getElementById("tDots");
    if (!items.length || !dotsWrap) return;

    let index = 0;
    let timer = null;

    items.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = "t-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
        dot.addEventListener("click", () => { show(i); restart(); });
        dotsWrap.appendChild(dot);
    });

    function show(i) {
        index = (i + items.length) % items.length;
        items.forEach((t, idx) => t.classList.toggle("active-testimonial", idx === index));
        dotsWrap.querySelectorAll(".t-dot").forEach((d, idx) => d.classList.toggle("active", idx === index));
    }

    const next = () => show(index + 1);
    const prev = () => show(index - 1);

    document.getElementById("tNext").addEventListener("click", () => { next(); restart(); });
    document.getElementById("tPrev").addEventListener("click", () => { prev(); restart(); });

    function start() { timer = setInterval(next, 6000); }
    function stop() { clearInterval(timer); }
    function restart() { stop(); start(); }

    section.addEventListener("mouseenter", stop);
    section.addEventListener("mouseleave", start);
    start();
    show(0);
}

/* ---------------- Toasts ---------------- */

function showToast(message, type, duration) {
    type = type || "info";
    duration = duration || 3200;
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.setAttribute("role", "status");
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/* ---------------- Global search ---------------- */

let searchOverlay = null;
let searchInput = null;
let searchResultsEl = null;
let searchResults = [];
let activeIndex = -1;

function initSearch() {
    searchOverlay = document.createElement("div");
    searchOverlay.id = "searchOverlay";
    searchOverlay.className = "search-overlay";
    searchOverlay.hidden = true;
    searchOverlay.innerHTML =
        '<div class="search-box" role="dialog" aria-label="Site search">' +
        '<div class="search-input-row">' +
        '<i class="fas fa-search"></i>' +
        '<input id="searchInput" type="search" placeholder="Search courses, events, news…" autocomplete="off" aria-label="Search">' +
        "<kbd>ESC</kbd>" +
        "</div>" +
        '<div class="search-results" id="searchResults"></div>' +
        '<div class="search-footer"><span>↑↓</span> navigate &nbsp;•&nbsp; <span>↵</span> open &nbsp;•&nbsp; <span>esc</span> close</div>' +
        "</div>";
    document.body.appendChild(searchOverlay);

    searchInput = searchOverlay.querySelector("#searchInput");
    searchResultsEl = searchOverlay.querySelector("#searchResults");

    const btn = document.getElementById("searchBtn");
    if (btn) btn.addEventListener("click", openSearch);

    searchOverlay.addEventListener("click", e => {
        if (e.target === searchOverlay) closeSearch();
    });

    searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));

    searchInput.addEventListener("keydown", e => {
        if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
        else if (e.key === "Enter") {
            e.preventDefault();
            if (searchResults[activeIndex]) window.location.href = searchResults[activeIndex].page;
        }
    });

    document.addEventListener("keydown", e => {
        const tag = e.target.tagName;
        const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.target.isContentEditable;
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (searchOverlay.hidden) openSearch(); else closeSearch();
        } else if (e.key === "/" && !typing && searchOverlay.hidden) {
            e.preventDefault();
            openSearch();
        } else if (e.key === "Escape" && !searchOverlay.hidden) {
            closeSearch();
        } else if (e.key === "Escape") {
            closeNewsModal();
        }
    });
}

function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    renderSearchResults(searchInput.value);
    searchInput.focus();
}

function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = true;
    document.body.style.overflow = "";
    searchInput.value = "";
    searchResultsEl.innerHTML = "";
    searchResults = [];
    activeIndex = -1;
}

function searchIndex(q) {
    const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const scored = SEARCH_INDEX.map(entry => {
        const hay = (entry.title + " " + entry.keywords).toLowerCase();
        let score = 0;
        terms.forEach(t => {
            if (entry.title.toLowerCase().indexOf(t) !== -1) score += 5;
            if (hay.indexOf(t) !== -1) score += 1;
        });
        return { entry: entry, score: score };
    }).filter(s => s.score > 0);
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8).map(s => s.entry);
}

function renderSearchResults(q) {
    const term = (q || "").trim();
    if (!term) {
        searchResults = SEARCH_INDEX.filter(e => e.featured);
        activeIndex = searchResults.length ? 0 : -1;
        searchResultsEl.innerHTML = '<p class="search-suggest">Popular searches</p>';
    } else {
        searchResults = searchIndex(term);
        activeIndex = searchResults.length ? 0 : -1;
        searchResultsEl.innerHTML = "";
    }

    if (!searchResults.length) {
        searchResultsEl.innerHTML = '<p class="search-none">No matches found — try "courses", "fees" or "events".</p>';
        return;
    }

    searchResults.forEach((entry, i) => {
        const item = document.createElement("a");
        item.href = entry.page;
        item.className = "search-result-item" + (i === activeIndex ? " active" : "");
        const cat = document.createElement("span");
        cat.className = "sri-cat";
        cat.textContent = entry.category;
        const title = document.createElement("strong");
        title.className = "sri-title";
        title.textContent = entry.title;
        const page = document.createElement("span");
        page.className = "sri-page";
        page.textContent = entry.page.replace(".html", "");
        item.appendChild(cat);
        item.appendChild(title);
        item.appendChild(page);
        item.addEventListener("mouseenter", () => setActiveSearch(i));
        item.addEventListener("click", closeSearch);
        searchResultsEl.appendChild(item);
    });
}

function setActiveSearch(i) {
    activeIndex = i;
    searchResultsEl.querySelectorAll(".search-result-item").forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
    });
}

function moveActive(dir) {
    if (!searchResults.length) return;
    setActiveSearch((activeIndex + dir + searchResults.length) % searchResults.length);
    const el = searchResultsEl.querySelectorAll(".search-result-item")[activeIndex];
    if (el) el.scrollIntoView({ block: "nearest" });
}

/* ---------------- Chat widget ---------------- */

function initChatWidget() {
    const widget = document.getElementById("chatWidget");
    const toggle = document.getElementById("chatToggle");
    const closeBtn = document.getElementById("chatClose");
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatInput");
    const body = document.getElementById("chatBody");
    if (!widget || !toggle || !form || !body) return;

    appendMessage(body, "Harbour College", "Hi there! Ask me about admissions, courses, fees, placements or events.", "bot");

    function openWidget() {
        widget.setAttribute("aria-hidden", "false");
        widget.classList.add("open");
        toggle.style.display = "none";
        input.focus();
    }

    function closeWidget() {
        widget.setAttribute("aria-hidden", "true");
        widget.classList.remove("open");
        toggle.style.display = "";
    }

    toggle.addEventListener("click", openWidget);
    if (closeBtn) closeBtn.addEventListener("click", closeWidget);

    form.addEventListener("submit", e => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        appendMessage(body, "You", text, "user");
        input.value = "";
        const typing = showTyping(body);
        const reply = findReply(text);
        setTimeout(() => {
            typing.remove();
            appendMessage(body, "Harbour College", reply, "bot");
        }, 650 + Math.random() * 550);
    });
}

function appendMessage(body, sender, text, type) {
    const el = document.createElement("div");
    el.className = "chat-msg" + (type === "user" ? " chat-user" : "");
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const senderEl = document.createElement("strong");
    senderEl.className = "chat-sender";
    senderEl.textContent = sender + ":";
    const textEl = document.createElement("span");
    textEl.className = "chat-text";
    textEl.textContent = text;
    const timeEl = document.createElement("span");
    timeEl.className = "chat-time";
    timeEl.textContent = time;
    el.appendChild(senderEl);
    el.appendChild(textEl);
    el.appendChild(timeEl);
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
}

function showTyping(body) {
    const el = document.createElement("div");
    el.className = "chat-msg typing";
    el.innerHTML = '<strong class="chat-sender">Harbour College:</strong> <span class="chat-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
    return el;
}

function findReply(text) {
    const t = text.toLowerCase();
    for (const entry of CHATBRAIN) {
        if (entry.keys.some(k => t.indexOf(k) !== -1)) return entry.reply;
    }
    return "I'm not sure about that yet, but I can help with admissions, courses, fees, placements and events — or use the Contact page for a full enquiry.";
}

/* ---------------- News page ---------------- */

function initNews() {
    const grid = document.getElementById("newsGrid");
    if (!grid) return;
    const chipsWrap = document.getElementById("newsChips");
    const newsSearch = document.getElementById("newsSearch");
    const emptyMsg = document.getElementById("newsEmpty");
    let filter = "all";
    let query = "";

    function render() {
        const items = NEWS_DATA.filter(n =>
            (filter === "all" || n.category === filter) &&
            (!query || (n.title + " " + n.summary + " " + n.body).toLowerCase().indexOf(query) !== -1)
        );
        grid.innerHTML = "";
        items.forEach(n => {
            const card = document.createElement("article");
            card.className = "news-card";
            card.setAttribute("tabindex", "0");
            const cat = document.createElement("span");
            cat.className = "news-cat news-cat-" + n.category.toLowerCase();
            cat.textContent = n.category;
            const title = document.createElement("h3");
            title.textContent = n.title;
            const time = document.createElement("time");
            time.dateTime = n.date;
            time.textContent = formatDate(n.date);
            const p = document.createElement("p");
            p.textContent = n.summary;
            const more = document.createElement("span");
            more.className = "news-more";
            more.textContent = "Read more →";
            card.appendChild(cat);
            card.appendChild(title);
            card.appendChild(time);
            card.appendChild(p);
            card.appendChild(more);
            card.addEventListener("click", () => openNewsModal(n));
            card.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openNewsModal(n); }
            });
            grid.appendChild(card);
        });
        if (emptyMsg) emptyMsg.hidden = items.length !== 0;
    }

    if (chipsWrap) {
        chipsWrap.querySelectorAll(".chip").forEach(chip => {
            chip.addEventListener("click", () => {
                chipsWrap.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                filter = chip.dataset.filter;
                render();
            });
        });
    }

    if (newsSearch) {
        newsSearch.addEventListener("input", () => {
            query = newsSearch.value.trim().toLowerCase();
            render();
        });
    }

    const closeBtn = document.getElementById("newsModalClose");
    if (closeBtn) closeBtn.addEventListener("click", closeNewsModal);
    const modal = document.getElementById("newsModal");
    if (modal) {
        modal.addEventListener("click", e => { if (e.target === modal) closeNewsModal(); });
    }

    render();
}

function initNewsEvents() {
    const grid = document.getElementById("eventsGrid");
    if (!grid) return;
    grid.innerHTML = "";
    upcomingEvents().forEach(e => {
        const card = document.createElement("div");
        card.className = "card event-card";
        const h = document.createElement("h3");
        h.textContent = e.name;
        const time = document.createElement("time");
        time.textContent = e.when.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
        const p = document.createElement("p");
        p.textContent = e.description;
        card.appendChild(h);
        card.appendChild(time);
        card.appendChild(p);
        grid.appendChild(card);
    });
}

function openNewsModal(item) {
    const modal = document.getElementById("newsModal");
    if (!modal) return;
    const cat = document.getElementById("modalCat");
    cat.textContent = item.category;
    cat.className = "news-cat news-cat-" + item.category.toLowerCase();
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalDate").textContent = formatDate(item.date);
    document.getElementById("modalBody").textContent = item.body;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeNewsModal() {
    const modal = document.getElementById("newsModal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
}

function formatDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

/* ---------------- Contact form ---------------- */

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const charCount = document.getElementById("charCount");
    const success = document.getElementById("formSuccess");

    if (message && charCount) {
        message.addEventListener("input", () => { charCount.textContent = message.value.length; });
    }

    function setError(input, errorEl, msg) {
        if (errorEl) errorEl.textContent = msg;
        if (input) input.classList.toggle("invalid", !!msg);
        return !msg;
    }

    form.addEventListener("submit", e => {
        e.preventDefault();
        let ok = true;
        ok = setError(name, nameError, name.value.trim().length < 2 ? "Please enter your name (min 2 characters)." : "") && ok;
        ok = setError(email, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "" : "Please enter a valid email address.") && ok;
        ok = setError(message, messageError, message.value.trim().length < 10 ? "Message must be at least 10 characters." : "") && ok;
        if (!ok) {
            showToast("Please fix the errors above.", "error");
            return;
        }
        form.reset();
        if (charCount) charCount.textContent = "0";
        if (success) success.hidden = false;
        showToast("Message sent! We will get back to you soon.", "success");
    });

    [name, email, message].forEach(el => {
        if (!el) return;
        el.addEventListener("input", () => {
            el.classList.remove("invalid");
            const err = document.getElementById(el.id + "Error");
            if (err) err.textContent = "";
        });
    });
}

/* ---------------- Footer year ---------------- */

function initFooterYear() {
    document.querySelectorAll("footer").forEach(f => {
        f.innerHTML = f.innerHTML.replace(/©\s*\d{4}/, "© " + new Date().getFullYear());
    });
}

/* ---------------- Boot ---------------- */

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateModeIcon();
    initSidebar();
    initMobileNav();
    highlightActiveNav();
    initReveal();
    initCounters();
    initTopButton();
    initTestimonials();
    initEventList();
    initCountdown();
    initChatWidget();
    initSearch();
    initNews();
    initNewsEvents();
    initContactForm();
    initFooterYear();
});
