const footer = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", () => {
    displayFooter();
});

function displayFooter() {
    createFooter();
};

export function createFooter() {
    footer.classList.add("bg-charcoal");

    footer.innerHTML = footer.innerHTML = `
        <div class="footer-content">
            <p><a href="blog.html" class="fs-body-small fw-medium text-ecru">Blog</a></p>
            <p><a href="contact.html" class="fs-body-small fw-medium text-ecru">Contact</a></p>
            <p><a href="about.html" class="fs-body-small fw-medium text-ecru">About</a></p>
            <p class="fs-body-small fw-medium text-ecru">#ohsheet</p>
            <div class="socials">
                <img src="resources/icons/instagram.svg" aria-label="instagram logo" class="instagram">
                <img src="resources/icons/facebook.svg" aria-label="facebook logo" class="facebook">
            </div>
        </div>`;
};