const EMAIL = "igalanhs@gmail.com";
const BACK_TO_TOP_OFFSET = 350;
const ACTIVE_SECTION_OFFSET = 0.35;
const COPY_STATUS_TIMEOUT = 2200;
const STORAGE_KEY = "preferredLanguage";

const translations = {
    en: {
        pageTitle: "Portfolio Website",
        navHome: "Home",
        navAbout: "About Me",
        navSkills: "Skills",
        navEducation: "Education",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Hey I'm <span>Ioannis</span>",
        heroTypePrefix: "I'm a",
        heroText: "Computer Science undergraduate passionate about software development, problem solving, and learning new technologies. Currently building skills in programming, web development, and computer systems through academic projects and personal learning.",
        hireMe: "Hire me",
        aboutTitle: "About Me",
        aboutTopic: "Working Towards My Goals",
        aboutText: "I am an undergraduate Software Engineering student focused on continuously improving my technical skills and expanding my knowledge in software development and technology. I enjoy learning new tools and technologies, solving problems, and working on projects that help me grow both personally and professionally. I am also a strong team player with good communication skills, and I work well with others in collaborative environments. I am motivated to gain real-world experience, contribute to meaningful projects, and continue developing as a future software engineer.",
        downloadCv: "Download CV",
        skillsTitle: "My Skills",
        skillsTopic: "Skills Built Through Practice",
        skillsText: "Skilled in Python, HTML, CSS, SQL, and Microsoft Excel, with a strong foundation in programming, database management, and web development. Comfortable working on academic and personal projects, learning new technologies, and applying problem-solving skills to technical challenges. Continuously developing both technical and collaborative skills through coursework and self-learning.",
        yearsOf: "Years Of",
        learning: "Learning",
        educationTitle: "Education",
        educationDegree: "BSc in Applied Informatics",
        educationText: "Bachelor of Science (BSc) in Applied Informatics at the University of Macedonia in Thessaloniki, Greece. Currently developing knowledge and practical skills in software engineering, programming, databases, information systems, and computer technologies through academic coursework and projects.",
        projectsTitle: "Projects",
        projectName: "Portfolio Website",
        projectText: "A personal portfolio built with HTML, CSS, and JavaScript to showcase my background, skills, education, and contact information.",
        contactTitle: "Contact Me",
        contactTopic: "Have Any Project?",
        letsChat: "Let's Chat",
        emailLabel: "Email",
        copyEmail: "Copy email",
        copiedEmail: "Copied!",
        createdBy: "Created By",
        rights: "\u00a92026 All Rights Reserved",
        backToTopLabel: "Back to top"
    },
    el: {
        pageTitle: "Portfolio Ιστοσελίδα",
        navHome: "Αρχική",
        navAbout: "Σχετικά",
        navSkills: "Δεξιότητες",
        navEducation: "Εκπαίδευση",
        navProjects: "Έργα",
        navContact: "Επικοινωνία",
        heroTitle: "Γεια, είμαι ο <span>Ioannis</span>",
        heroTypePrefix: "Είμαι",
        heroText: "Προπτυχιακός φοιτητής Πληροφορικής με ενδιαφέρον για την ανάπτυξη λογισμικού, την επίλυση προβλημάτων και την εκμάθηση νέων τεχνολογιών. Αυτή την περίοδο αναπτύσσω δεξιότητες στον προγραμματισμό, την ανάπτυξη ιστοσελίδων και τα υπολογιστικά συστήματα μέσα από ακαδημαϊκά projects και προσωπική μελέτη.",
        hireMe: "Επικοινωνία",
        aboutTitle: "Σχετικά με εμένα",
        aboutTopic: "Προχωρώντας προς τους στόχους μου",
        aboutText: "Είμαι προπτυχιακός φοιτητής Μηχανικής Λογισμικού και εστιάζω στη συνεχή βελτίωση των τεχνικών μου δεξιοτήτων και στη διεύρυνση των γνώσεών μου στην ανάπτυξη λογισμικού και την τεχνολογία. Μου αρέσει να μαθαίνω νέα εργαλεία και τεχνολογίες, να λύνω προβλήματα και να δουλεύω σε projects που με βοηθούν να εξελίσσομαι προσωπικά και επαγγελματικά. Είμαι επίσης ομαδικός, με καλές επικοινωνιακές δεξιότητες, και συνεργάζομαι αποτελεσματικά σε ομαδικά περιβάλλοντα.",
        downloadCv: "Λήψη CV",
        skillsTitle: "Οι δεξιότητές μου",
        skillsTopic: "Δεξιότητες μέσα από πρακτική",
        skillsText: "Έχω γνώσεις σε Python, HTML, CSS, SQL και Microsoft Excel, με καλή βάση στον προγραμματισμό, τη διαχείριση βάσεων δεδομένων και την ανάπτυξη ιστοσελίδων. Είμαι άνετος με ακαδημαϊκά και προσωπικά projects, μαθαίνω νέες τεχνολογίες και εφαρμόζω δεξιότητες επίλυσης προβλημάτων σε τεχνικές προκλήσεις.",
        yearsOf: "Χρόνια",
        learning: "Μάθησης",
        educationTitle: "Εκπαίδευση",
        educationDegree: "BSc στην Εφαρμοσμένη Πληροφορική",
        educationText: "Πτυχίο BSc στην Εφαρμοσμένη Πληροφορική στο Πανεπιστήμιο Μακεδονίας στη Θεσσαλονίκη. Αναπτύσσω γνώσεις και πρακτικές δεξιότητες στη μηχανική λογισμικού, τον προγραμματισμό, τις βάσεις δεδομένων, τα πληροφοριακά συστήματα και τις τεχνολογίες υπολογιστών μέσα από μαθήματα και projects.",
        projectsTitle: "Έργα",
        projectName: "Portfolio Website",
        projectText: "Προσωπικό portfolio κατασκευασμένο με HTML, CSS και JavaScript για την παρουσίαση του προφίλ, των δεξιοτήτων, της εκπαίδευσης και των στοιχείων επικοινωνίας μου.",
        contactTitle: "Επικοινωνία",
        contactTopic: "Έχεις κάποιο project;",
        letsChat: "Ας μιλήσουμε",
        emailLabel: "Email",
        copyEmail: "Αντιγραφή email",
        copiedEmail: "Αντιγράφηκε!",
        createdBy: "Δημιουργήθηκε από",
        rights: "\u00a92026 Με επιφύλαξη παντός δικαιώματος",
        backToTopLabel: "Πίσω στην κορυφή"
    }
};

const select = (selector, parent = document) => parent.querySelector(selector);
const selectAll = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const elements = {
    dropdown: select(".dropdown"),
    openMenuButton: select(".hamburg"),
    closeMenuButton: select(".cancel"),
    languageButtons: selectAll(".language-button"),
    backToTopButton: select(".back-to-top"),
    navLinks: selectAll(".nav-container .links a, .dropdown .links > a"),
    sections: selectAll("section[id]"),
    copyEmailButton: select(".copy-email-button"),
    copyStatus: select(".copy-status"),
    textNodes: selectAll("[data-i18n]"),
    htmlNodes: selectAll("[data-i18n-html]"),
    attrNodes: selectAll("[data-i18n-attr]"),
    placeholderLinks: selectAll(".placeholder-link"),
    dropdownLinks: selectAll(".dropdown a")
};

const state = {
    currentLanguage: "en",
    activeSectionId: "",
    copyStatusTimer: null,
    scrollFrame: null
};

function storageGet(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (error) {
        return fallback;
    }
}

function storageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        // The site still works if private browsing blocks localStorage.
    }
}

function getDictionary(language) {
    return translations[language] || translations.en;
}

function applyTextTranslations(dictionary) {
    elements.textNodes.forEach((element) => {
        const translation = dictionary[element.dataset.i18n];
        if (translation) element.textContent = translation;
    });

    elements.htmlNodes.forEach((element) => {
        const translation = dictionary[element.dataset.i18nHtml];
        if (translation) element.innerHTML = translation;
    });

    elements.attrNodes.forEach((element) => {
        const translation = dictionary[element.dataset.i18nAttr];
        if (!translation) return;

        element.setAttribute("aria-label", translation);
        element.setAttribute("title", translation);
    });
}

function updateLanguageButtons(language) {
    elements.languageButtons.forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = getDictionary(selectedLanguage);

    state.currentLanguage = selectedLanguage;
    document.documentElement.lang = selectedLanguage;
    document.title = dictionary.pageTitle;
    document.body.classList.toggle("lang-el", selectedLanguage === "el");

    applyTextTranslations(dictionary);
    updateLanguageButtons(selectedLanguage);
    storageSet(STORAGE_KEY, selectedLanguage);
}

function openMenu() {
    if (!elements.dropdown || !elements.openMenuButton) return;

    elements.dropdown.classList.add("active");
    elements.openMenuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    if (!elements.dropdown || !elements.openMenuButton) return;

    elements.dropdown.classList.remove("active");
    elements.openMenuButton.setAttribute("aria-expanded", "false");
}

function setActiveNavLink(sectionId) {
    if (state.activeSectionId === sectionId) return;

    state.activeSectionId = sectionId;

    elements.navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${sectionId}`;
        link.classList.toggle("active-link", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function getCurrentSectionId() {
    const scrollPosition = window.scrollY + window.innerHeight * ACTIVE_SECTION_OFFSET;

    return elements.sections.reduce((currentSectionId, section) => {
        return scrollPosition >= section.offsetTop ? section.id : currentSectionId;
    }, "home");
}

function updateBackToTopButton() {
    if (!elements.backToTopButton) return;

    elements.backToTopButton.classList.toggle("show", window.scrollY > BACK_TO_TOP_OFFSET);
}

function updateScrollState() {
    state.scrollFrame = null;
    updateBackToTopButton();
    setActiveNavLink(getCurrentSectionId());
}

function requestScrollUpdate() {
    if (state.scrollFrame) return;

    state.scrollFrame = window.requestAnimationFrame(updateScrollState);
}

async function writeClipboardText(text) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch (error) {
            // Fall back for browsers that expose Clipboard API but block it on local files.
        }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
}

async function copyEmailToClipboard() {
    if (!elements.copyEmailButton || !elements.copyStatus) return;

    await writeClipboardText(elements.copyEmailButton.dataset.email || EMAIL);

    window.clearTimeout(state.copyStatusTimer);
    elements.copyStatus.textContent = getDictionary(state.currentLanguage).copiedEmail;

    state.copyStatusTimer = window.setTimeout(() => {
        elements.copyStatus.textContent = "";
    }, COPY_STATUS_TIMEOUT);
}

function bindEvents() {
    elements.openMenuButton?.addEventListener("click", openMenu);
    elements.closeMenuButton?.addEventListener("click", closeMenu);
    elements.copyEmailButton?.addEventListener("click", copyEmailToClipboard);

    elements.dropdownLinks.forEach((link) => link.addEventListener("click", closeMenu));

    elements.placeholderLinks.forEach((link) => {
        link.addEventListener("click", (event) => event.preventDefault());
    });

    elements.languageButtons.forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    elements.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setActiveNavLink(link.getAttribute("href").replace("#", ""));
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
}

function init() {
    bindEvents();
    setLanguage(storageGet(STORAGE_KEY, "en"));
    updateBackToTopButton();
    setActiveNavLink(getCurrentSectionId());
}

init();
