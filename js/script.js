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
const filterCrm = document.querySelector('.header-section__filter');
const btnFilter = document.querySelector('.filter');
const customizationCrm = document.querySelector('.header-section__customization')
const btnCustomization = document.querySelector('.customization');

if (profile.length) {
    profile.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.forEach(function (o) {
                o.style.display = 'flex';
            });
            if (modalRegistration) {
                modalRegistration.style.display = 'flex';
            }
        });
    });
}

if (profileCrm.length) {
    profileCrm.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.forEach(function (o) {
                o.style.display = 'flex';
            });
            if (modalCrm) {
                modalCrm.style.display = 'flex';
            }
        });
    });
}

if (profileWare.length) {
    profileWare.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.forEach(function (o) {
                o.style.display = 'flex';
            });
            if (modalWare) {
                modalWare.style.display = 'flex';
            }
        });
    });
}

const errorLogin = document.getElementById('usernameError');
const errorPass = document.getElementById('passwordError');
const errorLoginAu = document.getElementById('usernameErrorAu');
const errorPassAu = document.getElementById('passwordErrorAu');

if (closeBtn.length) {
    closeBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            overlay.forEach(function (o) {
                o.style.display = 'none';
            });
            if (modalRegistration) modalRegistration.style.display = 'none';
            if (modalAuthorizationForm) modalAuthorizationForm.style.display = 'none';
            if (filterCrm) filterCrm.style.display = 'none';
            if (customizationCrm) customizationCrm.style.display = 'none';

            if (errorLogin) errorLogin.textContent = '';
            if (errorPass) errorPass.textContent = '';
            if (errorLoginAu) errorLoginAu.textContent = '';
            if (errorPassAu) errorPassAu.textContent = '';

            if (inputLoginRegistration) inputLoginRegistration.value = '';
            if (inputPasswordRegistration) inputPasswordRegistration.value = '';
            if (inputLoginAuthorization) inputLoginAuthorization.value = '';
            if (inputPasswordAuthorization) inputPasswordAuthorization.value = '';
        });
    });
}

if (accBtn) {
    accBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (modalRegistration) modalRegistration.style.display = 'none';
        overlay.forEach(function (o) {
            o.style.display = 'flex';
        });
        if (modalAuthorizationForm) modalAuthorizationForm.style.display = 'flex';
    });
}

// АККОРДЕОН
window.toggleAccordion = function (element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.acc-app');

    if (!content || !icon) return;

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

        if (!isValid) return;

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
        } else if (password.length < 6
        ) {
            passwordErrorAu.textContent = 'Пароль должен содержать не менее 6 символов.';
            isValid = false;
        } else if (!/[0-9]/.test(password)) {
            passwordErrorAu.textContent = 'Пароль должен содержать хотя бы одну цифру.';
            isValid = false;
        }

        if (!isValid) return;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.username === username && user.password === password);

        if (!existingUser) {
            usernameErrorAu.textContent = 'Неверный логин или пароль.';
            return;
        }

        window.location.href = 'CRM-system.html';
    });
}

// CRM-СИСТЕМA
if (!localStorage.getItem('tableData')) {
    const sampleData = {
        row1: {
            id: 123,
            date: '01.02.24',
            term: '03.03.24',
            counterparty: 'BMW',
            order: 'Пластиковые контейнеры, 10',
            material: 'Дерево',
            quantity: 50,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row2: {
            id: 124,
            date: '02.02.24',
            term: '03.03.24',
            counterparty: 'Audi',
            order: 'Пластиковые контейнеры, 10',
            material: 'Картон',
            quantity: 15,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row3: {
            id: 125,
            date: '03.02.24',
            term: '03.03.24',
            counterparty: 'Mercedes',
            order: 'Пластиковые контейнеры, 10',
            material: 'Пластик',
            quantity: 25,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        }, row4: {
            id: 126,
            date: '04.02.24',
            term: '03.03.24',
            counterparty: 'Volkswagen',
            order: 'Пластиковые контейнеры, 10',
            material: 'Металл',
            quantity: 10,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        }, row5: {
            id: 127,
            date: '05.02.24',
            term: '03.03.24',
            counterparty: 'Toyota',
            order: 'Пластиковые контейнеры, 10',
            material: 'Картон',
            quantity: 20,
            size: '20x20',
            paid: '50.000',
            score: '100.000'
        }, row6: {
            id: 123,
            date: '01.02.24',
            term: '03.03.24',
            counterparty: 'BMW',
            order: 'Пластиковые контейнеры, 10',
            material: 'Дерево',
            quantity: 50, size: '20x20',
            paid: '60.000',
            score: '100.000'
        },
        row7: {
            id: 124,
            date: '02.02.24',
            term: '03.03.24',
            counterparty: 'Audi',
            order: 'Пластиковые контейнеры, 10',
            material: 'Картон',
            quantity: 15,
            size: '20x20',
            paid: '10.000',
            score: '100.000'
        },
        row8: {
            id: 125,
            date: '03.02.24',
            term: '03.03.24',
            counterparty: 'Mercedes',
            order: 'Пластиковые контейнеры, 10',
            material: 'Пластик',
            quantity: 25,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row9: {
            id: 125,
            date: '03.02.24',
            term: '03.03.24',
            counterparty: 'Mercedes',
            order: 'Пластиковые контейнеры, 10',
            material: 'Пластик',
            quantity: 25,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        },
        row10: {
            id: 125,
            date: '03.02.24',
            term: '03.03.24',
            counterparty: 'Mercedes',
            order: 'Пластиковые контейнеры, 10',
            material: 'Пластик',
            quantity: 25,
            size: '20x20',
            paid: '100.000',
            score: '100.000'
        }
    }; localStorage.setItem('tableData', JSON.stringify(sampleData));
}

// function loadTableData() {
//     const tbodyContent = document.getElementById('tbodyContent');
//     const data = JSON.parse(localStorage.getItem('tableData'));

//     if (!tbodyContent || !data) return;

//     tbodyContent.innerHTML = '';

//     for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//             const row = data[key];
//             const tr = document.createElement('tr');

//             for (const property in row) {
//                 if (row.hasOwnProperty(property)) {
//                     const td = document.createElement('td');
//                     td.textContent = row[property];

//                     // Логика для окрашивания ячеек "paid" и "score"
//                     if (property === "paid" || property === "score") {
//                         const paidValue = parseFloat(row.paid);
//                         const scoreValue = parseFloat(row.score);

//                         if (paidValue < scoreValue) {
//                             td.style.color = '#C24343';
//                         } else if (paidValue === scoreValue) {
//                             td.style.color = '#53964A';
//                         }
//                     }

//                     // Обработка клика по материалу
//                     if (property === "material") {
//                         td.style.cursor = "pointer";

//                         const material = row[property];

//                         // Используем addEventListener вместо onclick
//                         td.addEventListener('click', function () {
//                             if (row.quantity <= 20) {
//                                 openModal(`${material}<br>Осталось шт. на складе: ${row.quantity}`);
//                             }
//                         });

//                         // Изменяем цвет ячейки, если количество <= 20
//                         const quantity = row.quantity;
//                         if (quantity <= 20) {
//                             td.style.color = '#C24343';
//                         }
//                     }

//                     tr.appendChild(td);
//                 }
//             }

//             tbodyContent.appendChild(tr);
//         }
//     }
// }

// function openModal(content) {
//     const modalContent = document.getElementById("modalContent");
//     if (!modalContent) return;

//     modalContent.innerHTML = content;
//     const modalMaterial = document.getElementById("modalMaterial");
//     if (modalMaterial) modalMaterial.style.display = "block";

//     closeBtn.forEach(function (button) {
//         button.addEventListener('click', function () {
//             modalMaterial.style.display = "none";
//         });
//     });
// }

function renderTable(data) {
    const tbodyContent = document.getElementById('tbodyContent');
    tbodyContent.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        for (const property in row) {
            if (row.hasOwnProperty(property)) {
                if (property === "quantity") continue;

                const td = document.createElement('td');
                td.textContent = row[property];

                if (property === "paid" || property === "score") {
                    const paidValue = parseFloat(row.paid);
                    const scoreValue = parseFloat(row.score);
                    if (paidValue < scoreValue) {
                        td.style.color = '#C24343';
                    } else if (paidValue === scoreValue) {
                        td.style.color = '#53964A';
                    }
                }

                if (property === "material") {
                    const quantity = row.quantity;
                    if (quantity < 20) {
                        td.style.color = '#C24343';
                    }

                    td.style.cursor = "pointer";
                    td.addEventListener('click', function () {
                        openModal(`${row.material}<br>Осталось шт. на складе: ${row.quantity}`);
                    });
                }

                tr.appendChild(td);
            }
        }
        tbodyContent.appendChild(tr);
    });
}

function openModal(content) {
    const modalContent = document.getElementById("modalContent");
    if (!modalContent) return;

    modalContent.innerHTML = content;
    const modalMaterial = document.getElementById("modalMaterial");
    if (modalMaterial) modalMaterial.style.display = "block";

    closeBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            modalMaterial.style.display = "none";
        });
    });
}

//ФИЛЬТРАЦИЯ

if (btnFilter) {
    btnFilter.addEventListener('click', function () {
        filterCrm.style.display = 'block';
    });
}

const filterDateButton = document.querySelector('.filter-date-button');
const filterAlphabetButton = document.querySelector('.filter-alphabet-button');
const filterUnpaidButton = document.querySelector('.filter-unpaid-button');

let originalData = [];

function loadTableData() {
    const tbodyContent = document.getElementById('tbodyContent');
    const data = JSON.parse(localStorage.getItem('tableData'));

    if (!tbodyContent || !data) return;

    originalData = Object.values(data);
    renderTable(originalData);
}

function renderTable(data) {
    const tbodyContent = document.getElementById('tbodyContent');
    tbodyContent.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');
        for (const property in row) {
            if (row.hasOwnProperty(property)) {
                if (property === "quantity") continue;

                const td = document.createElement('td');
                td.textContent = row[property];

                if (property === "paid" || property === "score") {
                    const paidValue = parseFloat(row.paid);
                    const scoreValue = parseFloat(row.score);
                    if (paidValue < scoreValue) {
                        td.style.color = '#C24343';
                    } else if (paidValue === scoreValue) {
                        td.style.color = '#53964A';
                    }
                }

                if (property === "material") {
                    const quantity = row.quantity;
                    if (quantity <= 20) {
                        td.style.color = '#C24343';
                    }

                    td.style.cursor = "pointer";
                    td.addEventListener('click', function () {
                        openModal(`${row.material}<br>Осталось шт. на складе: ${quantity}`);
                        const modalMaterial = document.getElementById("modalMaterial");
                        if (modalMaterial) modalMaterial.style.display = "block";
                    });
                }

                tr.appendChild(td);
            }
        }
        tbodyContent.appendChild(tr);
    });
}

filterDateButton.addEventListener('click', function () {
    const sortedData = [...originalData].sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
    renderTable(sortedData);
});

filterAlphabetButton.addEventListener('click', function () {
    const sortedData = [...originalData].sort((a, b) => a.counterparty.localeCompare(b.counterparty, ['ru', 'en'], { sensitivity: 'base' }));
    renderTable(sortedData);
});

filterUnpaidButton.addEventListener('click', function () {
    renderTable(originalData);

    const rows = document.querySelectorAll('#tbodyContent tr');

    rows.forEach(row => {
        const paidValue = parseFloat(row.cells[7].textContent);
        const scoreValue = parseFloat(row.cells[8].textContent);

        if (paidValue < scoreValue) {
            row.style.backgroundColor = '#FFCCCB';
        } else {
            row.style.backgroundColor = '';
        }
    });
});

//НАСТРОЙКА ТАБЛИЦЫ

if (btnCustomization) {
    btnCustomization.addEventListener('click', function () {
        customizationCrm.style.display = 'block';
    });
}

document.addEventListener("DOMContentLoaded", loadTableData);