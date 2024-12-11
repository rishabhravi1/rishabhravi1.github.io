document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    fetch("scripts/header.json")
        .then((response) => response.json())
        .then((headerData) => {
            const headerContainer = document.querySelector("header");

            // Add Title
            const h1 = document.createElement("h1");
            h1.textContent = headerData.title;
            headerContainer.appendChild(h1);

            // Add Subtitle
            const subtitle = document.createElement("p");
            subtitle.textContent = headerData.subtitle;
            headerContainer.appendChild(subtitle);

            // Add Strong Quote
            const strongQuote = document.createElement("p");
            const strongText = document.createElement("strong");
            strongText.textContent = headerData.quote;
            strongQuote.appendChild(strongText);
            headerContainer.appendChild(strongQuote);

            // Add Navigation
            const mainNav = document.createElement("nav");
            headerData.mainNav.forEach((link, index) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.name;

                mainNav.appendChild(a);
                if (index < headerData.mainNav.length - 1) {
                    mainNav.appendChild(document.createTextNode(" | "));
                }
            });
            headerContainer.appendChild(mainNav);
        })
        .catch((error) => console.error("Error loading header:", error));

    // Load Footer
    fetch("scripts/footer.json")
        .then((response) => response.json())
        .then((footerData) => {
            const footerContainer = document.querySelector("footer");

            // Add Contact Navigation
            const contactNav = document.createElement("nav");
            footerData.contactLinks.forEach((link, index) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.target = "_blank";
                a.textContent = link.name;

                contactNav.appendChild(a);
                if (index < footerData.contactLinks.length - 1) {
                    contactNav.appendChild(document.createTextNode(" | "));
                }
            });
            footerContainer.appendChild(contactNav);

            // Add Certifications
            const certifications = document.createElement("p");
            certifications.innerHTML = `
                Designed by ${footerData.designer}, Certified in 
                <a href="${footerData.certifications.js}" target="_blank">JS</a> and 
                <a href="${footerData.certifications.responsive}" target="_blank">Responsive Web Design</a>.
            `;
            footerContainer.appendChild(certifications);

            // Add Copyright
            const copyright = document.createElement("p");
            copyright.innerHTML = `
                <a href="${footerData.copyright.url}">&copy; ${footerData.copyright.year} ${footerData.copyright.name}</a>
            `;
            footerContainer.appendChild(copyright);

            // Add Validation Links
            const validationContainer = document.createElement("div");

            const htmlValidator = document.createElement("a");
            htmlValidator.href = footerData.validation.html;
            htmlValidator.innerHTML = `<img src="${footerData.validation.htmlImg}" alt="Valid HTML!" id="html-validator">`;
            validationContainer.appendChild(htmlValidator);

            const cssValidator = document.createElement("a");
            cssValidator.href = footerData.validation.css;
            cssValidator.innerHTML = `<img src="${footerData.validation.cssImg}" alt="Valid CSS!" id="css-validator">`;
            validationContainer.appendChild(cssValidator);

            footerContainer.appendChild(validationContainer);
        })
        .catch((error) => console.error("Error loading footer:", error));
});
