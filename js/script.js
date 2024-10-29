document.addEventListener('DOMContentLoaded', function () {
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
    const inputLoginRegistration = document.querySelector('.login');
    const inputLoginAuthorization = document.querySelector('.loginAu');
    const inputPasswordRegistration = document.querySelector('.password');
    const inputPasswordAuthorization = document.querySelector('.passwordAu');


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

    const errorLogin = document.getElementById('usernameError')
    const errorPass = document.getElementById('passwordError')

    closeBtn.forEach(function (button) {
        button.addEventListener('click', function (event) {
            overlay.forEach(function (o) {
                o.style.display = 'none';
            });
            modalRegistration.style.display = 'none';
            modalLogin.style.display = 'none';
            errorLogin.textContent = '';
            errorPass.textContent = '';
            inputLoginRegistration.value = '';
            inputPasswordRegistration.value = '';
            inputLoginAuthorization.value = '';
            inputPasswordAuthorization.value = '';
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

    // АККОРДЕОН
    window.toggleAccordion = function (element) {
        const content = element.nextElementSibling;
        const icon = element.querySelector('.acc-app');

        if (content.style.display === "block") {
            content.style.display = "none";
            icon.src = "icons/down.svg";
        } else {
            content.style.display = "block";
            icon.src = "icons/app.svg";
        }
    };

    // ВАЛИДАЦИЯ РЕГИСТРАЦИИ
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        const usernameInput = registrationForm.username;
        const passwordInput = registrationForm.password;

        usernameInput.addEventListener('input', function () {
            this.value = this.value.replace(/\s/g, '');
        });

        passwordInput.addEventListener('input', function () {
            this.value = this.value.replace(/\s/g, '');
        });

        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = this.username.value.trim();
            const password = this.password.value.trim();
            const usernameError = document.getElementById('usernameError');
            const passwordError = document.getElementById('passwordError');

            usernameError.textContent = '';
            passwordError.textContent = '';

            let isValid = true;

            if (!username) {
                usernameError.textContent = 'Логин не может быть пустым.';
                isValid = false;
            } else if (username.length < 5) {
                usernameError.textContent = 'Логин должен содержать не менее 5 символов.';
                isValid = false;
            } else if (!password) {
                passwordError.textContent = 'Пароль не может быть пустым.';
                isValid = false;
            } else if (password.length < 6) {
                passwordError.textContent = 'Пароль должен содержать не менее 6 символов.';
                isValid = false;
            } else if (!/[0-9]/.test(password)) {
                passwordError.textContent = 'Пароль должен содержать хотя бы одну цифру.';
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(user => user.username === username);

            if (existingUser) {
                usernameError.textContent = 'Пользователь с таким логином уже существует.';
                return;
            }

            const userId = Date.now();

            const newUser = {
                id: userId,
                username: username,
                password: password,
                role: 'user'
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            window.location.href = 'CRM-system.html';
        });
    }

    // ВАЛИДАЦИЯ ВХОДА
    const authorizationForm = document.getElementById('authorizationForm');
    if (authorizationForm) {
        const usernameInputAu = authorizationForm.username;
        const passwordInputAu = authorizationForm.password;

        usernameInputAu.addEventListener('input', function () {
            this.value = this.value.replace(/\s/g, '');
        });

        passwordInputAu.addEventListener('input', function () {
            this.value = this.value.replace(/\s/g, '');
        });

        authorizationForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameAu = this.username.value.trim();
            const passwordAu = this.password.value.trim();
            const usernameErrorAu = document.getElementById('usernameErrorAu');
            const passwordErrorAu = document.getElementById('passwordErrorAu');

            usernameErrorAu.textContent = '';
            passwordErrorAu.textContent = '';

            if (!usernameAu) {
                usernameErrorAu.textContent = 'Логин не может быть пустым.';
                isValid = false;
            } else if (usernameAu.length < 5) {
                usernameErrorAu.textContent = 'Логин должен содержать не менее 5 символов.';
                isValid = false;
            } else if (!passwordAu) {
                passwordErrorAu.textContent = 'Пароль не может быть пустым.';
                isValid = false;
            } else if (passwordAu.length < 6) {
                passwordErrorAu.textContent = 'Пароль должен содержать не менее 6 символов.';
                isValid = false;
            } else if (!/[0-9]/.test(passwordAu)) {
                passwordErrorAu.textContent = 'Пароль должен содержать хотя бы одну цифру.';
                isValid = false;
            }
        })

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.usernameAu === usernameAu);

        if (existingUser) {
            usernameError.textContent = 'С возвращением, ${username}!';
            return;
        }
        window.location.href = 'CRM-system.html';
    }
});