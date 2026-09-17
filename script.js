/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}


/* LOAD SAVED THEME */

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark");

}


/* =========================
   PLAN WHATSAPP
========================= */

function planMessage(plan) {

    const phone =
        "918700973018";


    const message =
        `Hello Arun Kumar Saklani,%0A%0A` +
        `I am interested in the LIC plan:%0A` +
        `${plan}%0A%0A` +
        `Please share more information.`;


    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const mobile =
        document.getElementById("mobile").value;


    const enquiry =
        document.getElementById("enquiry").value;


    const message =
        document.getElementById("message").value;


    const phone =
        "918700973018";


    const whatsappMessage =
        `Hello Arun Kumar Saklani,%0A%0A` +
        `Name: ${name}%0A` +
        `Mobile: ${mobile}%0A` +
        `Enquiry: ${enquiry}%0A` +
        `Message: ${message}`;


    window.open(
        `https://wa.me/${phone}?text=${whatsappMessage}`,
        "_blank"
    );

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                document
                    .getElementById("navMenu")
                    .classList.remove("active");

            }
        );

    });