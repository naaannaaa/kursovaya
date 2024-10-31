const profile = document.querySelectorAll('.button-profile');
const profileCrm = document.querySelectorAll('.button-profile-crm');
const profileWare = document.querySelectorAll('.button-profile-ware');
const overlay = document.querySelectorAll('.overlay');
const modalRegistration = document.querySelector('.header-section__form');
const closeBtn = document.querySelectorAll('.form-close');
const modalAuthorizationForm = document.querySelector('.header-section__form-login');
const accBtn = document.querySelector('.button-acc');
const modalCrm = document.querySelector('.header-section__form-crm');
const modalWare = document.querySelector('.header-section__form-ware');
const inputLoginRegistration = document.querySelector('.login');
const inputLoginAuthorization = document.querySelector('.login-au');
const inputPasswordRegistration = document.querySelector('.password');
const inputPasswordAuthorization = document.querySelector('.password-au');

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
const errorLoginAu = document.getElementById('usernameErrorAu')
const errorPassAu = document.getElementById('passwordErrorAu')

closeBtn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        overlay.forEach(function (o) {
            o.style.display = 'none';
        });
        modalRegistration.style.display = 'none';
        modalAuthorizationForm.style.display = 'none';
        errorLogin.textContent = '';
        errorPass.textContent = '';
        errorLoginAu.textContent = '';
        errorPassAu.textContent = '';

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
        modalAuthorizationForm.style.display = 'flex';
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
    const usernameInput = authorizationForm.username;
    const passwordInput = authorizationForm.password;

    usernameInput.addEventListener('input', function () {
        this.value = this.value.replace(/\s/g, '');
    });

    passwordInput.addEventListener('input', function () {
        this.value = this.value.replace(/\s/g, '');
    });

    authorizationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = this.username.value.trim();
        const password = this.password.value.trim();
        const usernameErrorAu = document.getElementById('usernameErrorAu');
        const passwordErrorAu = document.getElementById('passwordErrorAu');

        usernameErrorAu.textContent = '';
        passwordErrorAu.textContent = '';

        let isValid = true;

        if (!username) {
            usernameErrorAu.textContent = 'Логин не может быть пустым.';
            isValid = false;
        } else if (username.length < 5) {
            usernameErrorAu.textContent = 'Логин должен содержать не менее 5 символов.';
            isValid = false;
        } else if (!password) {
            passwordErrorAu.textContent = 'Пароль не может быть пустым.';
            isValid = false;
        } else if (password.length < 6) {
            passwordErrorAu.textContent = 'Пароль должен содержать не менее 6 символов.';
            isValid = false;
        } else if (!/[0-9]/.test(password)) {
            passwordErrorAu.textContent = 'Пароль должен содержать хотя бы одну цифру.';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username && user.password === password);

        if (!existingUser) {
            usernameErrorAu.textContent = 'Неверный логин или пароль.';
            return;
        }

        window.location.href = 'CRM-system.html';
    });
}

//СОЗДАНИЕ CRM-СИСТЕМЫ

// const tbodyContent = document.getElementById('tbodyContent');
// const contentCRM = {
//     id: 123,
//     date: '01.02.24',
//     timing: '01.02.24',
//     counterparty: 'BMW',
//     order: 'Кашированные коробки, 10',
//     material: 'Дерево',
//     size: '20х20',
//     paid: 100.000,
//     score: 100.000
// };

// tbodyContent.innerHTML = `
//     <tr class="table-first">
//         <td>123</td>
//         <td>01.02.24</td>
//         <td>01.03.24</td>
//         <td>BMW</td>
//         <td>Кашированные коробки, 10 </td>
//         <td>Дерево</td>
//         <td>20х20</td>
//         <td>100.000</td>
//         <td>100.000</td>
//     </tr>
// `

if (!localStorage.getItem('tableData')) {
    const sampleData = {
        row1: {
            id: 123,
            date: '01.02.24',
            counterparty: 'BMW',
            order: 'Кашированные коробки',
            material: 'Дерево',
            quantity: 50,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row2: {
            id: 124,
            date: '02.02.24',
            counterparty: 'Audi',
            order: 'Картонные коробки',
            material: 'Картон',
            quantity: 15,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row3: {
            id: 125,
            date: '03.02.24',
            counterparty: 'Mercedes',
            order: 'Пластиковые контейнеры',
            material: 'Пластик',
            quantity: 25,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row4: {
            id: 126,
            date: '04.02.24',
            counterparty: 'Volkswagen',
            order: 'Металлические ящики',
            material: 'Металл',
            quantity: 10,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row5: {
            id: 127,
            date: '05.02.24',
            counterparty: 'Toyota',
            order: 'Картонные коробки',
            material: 'Картон',
            quantity: 20,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        }
    };
    localStorage.setItem('tableData', JSON.stringify(sampleData));
}

function loadTableData() {
    const tbodyContent = document.getElementById('tbodyContent');
    const data = JSON.parse(localStorage.getItem('tableData'));

    tbodyContent.innerHTML = '';

    if (data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const row = data[key];
                const tr = document.createElement('tr');

                for (const property in row) {
                    if (row.hasOwnProperty(property)) {
                        const td = document.createElement('td');
                        td.textContent = row[property];

                        if (property === "material") {
                            td.style.cursor = 'pointer';

                            const material = row[property];

                            td.onclick = function () {
                                if (row.quantity <= 20) {
                                    openModal(`${material}:<br>Осталось шт. на складе: ${row.quantity}`);
                                }
                            };

                            const quantity = row.quantity;
                            if (quantity <= 20) {
                                td.style.color = '#C24343';
                            }
                        }

                        tr.appendChild(td);
                    }
                }

                tbodyContent.appendChild(tr);
            }
        }
    }
}

function openModal(content) {
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('modalMaterial').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalMaterial').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadTableData);