        const siteHeader = document.getElementById("siteHeader");
        const menuToggle = document.getElementById("menuToggle");
        const navMenu = document.getElementById("navMenu");
        const menuIcon = menuToggle.querySelector("i");
        const navLinks = navMenu.querySelectorAll("a");

        function updateHeader() {
            siteHeader.classList.toggle("scrolled", window.scrollY > 40);
        }

        function closeMenu() {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "فتح القائمة");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }

        menuToggle.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "إغلاق القائمة" : "فتح القائمة"
            );

            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-xmark", isOpen);
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", function (event) {
            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        window.addEventListener("scroll", updateHeader, { passive: true });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 991) {
                closeMenu();
            }
        });

        updateHeader();
        
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("abuContactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("abuContactName").value.trim();
        const phone = document.getElementById("abuContactPhone").value.trim();
        const service = document.getElementById("abuContactService").value;
        const location = document.getElementById("abuContactLocation").value.trim();
        const message = document.getElementById("abuContactMessage").value.trim();

        const whatsappMessage = [
            "السلام عليكم، أرغب في الاستفسار عن خدمات أبو محمد.",
            "",
            "الاسم: " + name,
            "رقم الجوال: " + phone,
            "الخدمة المطلوبة: " + service,
            "موقع المشروع: " + (location || "لم يتم تحديده"),
            "تفاصيل الطلب: " + message
        ].join("\n");

        const whatsappURL =
            "https://wa.me/966563235561?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
        const footerYear = document.getElementById("abuFooterYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
