const profile = document.querySelectorAll('.button-profile');
const profileCrm = document.querySelectorAll('.button-profile-crm');
const profileWare = document.querySelectorAll('.button-profile-ware');
const overlay = document.querySelectorAll('.overlay');
const modalRegistration = document.querySelector('.header-section__form');
const closeBtn = document.querySelectorAll('.form-close');
const modalLogin = document.querySelector('.header-section__form-login');
const accBtn = document.querySelector('.button-acc');
const modalCrm = document.querySelector('.header-section__form-crm');
const modalWare = document.querySelector('.header-section__form-ware');

profile.forEach(function (button) {
    button.addEventListener('click', function (event) {
        overlay.forEach(function (o) {
            o.style.display = 'flex';
        });
        modalRegistration.style.display = 'flex';
    });
});

profileCrm.forEach(function (button) {
    button.addEventListener('click', function (event) {
        overlay.forEach(function (o) {
            o.style.display = 'flex';
        });
        modalCrm.style.display = 'flex';
    });
});

profileWare.forEach(function (button) {
    button.addEventListener('click', function (event) {
        overlay.forEach(function (o) {
            o.style.display = 'flex';
        });
        modalWare.style.display = 'flex';
    });
});

closeBtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        overlay.forEach(function (o) {
            o.style.display = 'none';
        });
        modalRegistration.style.display = 'none';
        modalLogin.style.display = 'none';
    });
});

if (accBtn) {
    accBtn.addEventListener('click', function (event) {
        event.preventDefault();
        modalRegistration.style.display = 'none';
        overlay.forEach(function (o) {
            o.style.display = 'flex';
        });
        modalLogin.style.display = 'flex';
    });
}

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.acc-app');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.src = "icons/down.svg";
    } else {
        content.style.display = "block";
        icon.src = "icons/app.svg";
    }
}