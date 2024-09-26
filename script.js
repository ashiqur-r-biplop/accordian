const accordionHeaders = document.querySelectorAll('.accordion-title ');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle active state for the header
        header.classList.toggle('active');

        // Toggle the current section smoothly
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 15px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "15px 15px";
        }

        // Close other sections
        accordionHeaders.forEach(otherHeader => {
            const otherContent = otherHeader.nextElementSibling;
            if (otherHeader !== header && otherContent.style.maxHeight) {
                otherHeader.classList.remove('active');
                otherContent.style.maxHeight = null;
                otherContent.style.padding = "0 15px";
            }
        });
    });
});
