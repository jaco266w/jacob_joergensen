"use strict";

console.log("language.js loaded");

const texts = {
    en: {
        texts: [
            { location: "#label_language", text: "Choose a language" },
            { location: "#unicorn", html: "Digital <span>Unicorn</span>" },
            { location: "#name", text: "Jacob Jørgensen" },
            { location: "#video", text: "Crafting Connections: Jacob's Multimedia Voyage" },
            { location: "section div a", text: "Play Video"},
            { location: "#about h2", text: "Who am I?" },
            { location: "#programs h2", text: "Programs" },
            { location: ".contact-form h2", text: "Contact Me" },
            { location: ".contact-info h2", text: "Contact Information"},
            { location: ".contact-info p", text: "Phone: +45 40 43 86 95" },
            { location: "#form button[type='submit']", text: "Submit" },
            { location: ".feedback.hide:nth-child(1)", text: "Thank you for your interest." },
            { location: ".feedback.hide:nth-child(2)", text: "I will get back to you as soon as possible" },
            { location: "#about_1", text: "Welcome to my digital canvas! I'm Jacob Jørgensen, a passionate freelance photographer, videographer, and coder." },
            { location: "#about_2", text: "My lens captures moments that tell stories, and my code brings digital visions to life." },
            { location: "#about_3", text: "Here, you'll discover the fusion of art and technology in my work. Explore my portfolio, delve into my projects, and get a glimpse of my creative world." },
            { location: "#about_4", text: "Let's connect and bring your ideas to reality through the power of visuals and code." }
        ]
    },
    da: {
        texts: [
            { location: "#label_language", text: "Vælg et sprog" },
            { location: "#unicorn", html: "Digital <span>Unikum</span>" },
            { location: "#name", text: "Jacob Jørgensen" },
            { location: "#video", text: "Skab forbindelser: Jacobs multimedierejse" },
            { location: "section div a", text: "Afspil video"},
            { location: "#about h2", text: "Hvem er jeg?" },
            { location: "#programs h2", text: "Programmer" },
            { location: ".contact-form h2", text: "Kontakt mig" },
            { location: ".contact-info h2", text: "Kontakt Information"},
            { location: ".contact-info p", text: "Telefon: +45 40 43 86 95" },
            { location: "#form button[type='submit']", text: "Indsend" },
            { location: ".feedback.hide:nth-child(1)", text: "Tak for din interesse." },
            { location: ".feedback.hide:nth-child(2)", text: "Jeg vender tilbage til dig så hurtigt som muligt" },
            { location: "#about_1", text: "Velkommen til mit digitale lærred! Mit navn er Jacob Jørgensen, en passioneret freelancefotograf, videograf og programmør." },
            { location: "#about_2", text: "Mit objektiv fanger øjeblikke, der fortæller historier, og min kode bringer digitale visioner til live." },
            { location: "#about_3", text: "Her vil du opdage fusionen af kunst og teknologi i mit arbejde. Udforsk min portefølje, dyk ned i mine projekter og få et glimt af min kreative verden." },
            { location: "#about_4", text: "Lad os forbinde og omsætte dine ideer til virkelighed gennem kraften af visuelle elementer og kode." }
        ]
    }
};

const placeholders = {
    en: {
        name: "Name",
        email: "Email",
        message: "Message"
    },
    da: {
        name: "Navn",
        email: "E-mail",
        message: "Besked"
    }
};

const select = document.getElementById("language");

// Trigger initial language update based on the default language
const initialLanguage = select.value;
updateLanguage(initialLanguage);
updatePlaceholders(initialLanguage);

// Event listener to detect language change
select.addEventListener("change", function () {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
    updatePlaceholders(selectedLanguage);
});

// Function to update the text content based on the selected language
function updateLanguage(selectedLanguage) {
    const languageData = texts[selectedLanguage];
    const textElements = languageData.texts;

    textElements.forEach(({ text, html, location }) => {
        const element = document.querySelector(location);
        if (element) {
            if (html) {
                element.innerHTML = html;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Function to update the placeholders based on the selected language
function updatePlaceholders(selectedLanguage) {
    const placeholderData = placeholders[selectedLanguage];

    // Select the form fields by their IDs
    const nameInput = document.getElementById("name_input");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Update the placeholders
    if (placeholderData && nameInput && emailInput && messageInput) {
        nameInput.placeholder = placeholderData.name;
        emailInput.placeholder = placeholderData.email;
        messageInput.placeholder = placeholderData.message;
    }
}
