const profile = document.querySelector('.button-profile')
const overlay = document.querySelector('.overlay')
const form = document.querySelector('.header-section__form')

profile.addEventListener('click', function (event) {
    overlay.style.display = 'flex'
    form.style.display = 'flex'
});

const closeBtn = document.querySelector('.form-close')

closeBtn.addEventListener('click', function (event) {
    overlay.style.display = 'none'
    form.style.display = 'none'
});

const formBtn = document.querySelector('.button-form')
const inputStyle = document.querySelector('.input-style')

// ::-webkit-input-placeholder
// color: #ab3d3d