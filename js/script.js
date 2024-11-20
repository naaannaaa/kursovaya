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
const titleTag = document.querySelector("head title");
const notification = document.querySelector('.notification');
const modalNotification = document.querySelector('.modal-notification');
const notificationRed = document.querySelector('.icon-red');
const exitAccount = document.querySelector('.button-exit');
const exitNo = document.querySelector('.button-form');
const materialBtn = document.querySelector('.btn-material');
const tableWare = document.querySelector('.table-ware');
const btnBox = document.querySelector('.box');
const notificationWare = document.querySelector('.notification-ware');
const modalNotificationWare = document.querySelector('.modal-notification-ware');
const notificationRedWare = document.querySelector('.icon-red-ware');

//РАБОЧИЕ АККАУНТЫ

const accounts = {
    director: [
        {
            id: 1,
            login: 'director',
            password: 'director123',
            role: 'director'
        },
    ],
    bookkeeper: [
        {
            id: 2,
            login: 'bookkeeper',
            password: 'bookkeeper123',
            role: 'bookkeeper'
        }
    ],
    meneger: [
        {
            id: 3,
            login: 'meneger',
            password: 'meneger123',
            role: 'meneger'
        }
    ],
    sklad: [
        {
            id: 4,
            login: 'sklad',
            password: 'sklad123',
            role: 'sklad'
        }
    ]
};

localStorage.setItem('accounts', JSON.stringify(accounts));

const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
console.log(storedAccounts);

//ВЫХОД ИЗ АККАУНТА

if (
    titleTag.textContent === "CRM-system" ||
    titleTag.textContent === "Страница заявок"
) {
    exitNo.addEventListener('click', function () {
        const modal = document.querySelector('.header-section__form-crm');
        if (modal) {
            modal.style.display = 'none';
            overlay.forEach(function (o) {
                o.style.display = 'none';
            });
        }
    });

    exitNo.addEventListener('click', function () {
        const modal = document.querySelector('.header-section__form-ware');
        if (modal) {
            modal.style.display = 'none';
            overlay.forEach(function (o) {
                o.style.display = 'none';
            });
        }
    });

    //ВЫХОД

    exitAccount.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'index.html';
        sessionStorage.clear()
    });
}

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
            if (modalNotification) modalNotification.style.display = 'none';

            if (errorLogin) errorLogin.textContent = '';
            if (errorPass) errorPass.textContent = '';
            if (errorLoginAu) errorLoginAu.textContent = '';
            if (errorPassAu) errorPassAu.textContent = '';

            if (inputLoginRegistration) inputLoginRegistration.value = '';
            if (inputPasswordRegistration) inputPasswordRegistration.value = '';
            if (inputLoginAuthorization) inputLoginAuthorization.value = '';
            if (inputPasswordAuthorization) inputPasswordAuthorization.value = '';
            if (modalNotificationWare) modalNotificationWare.style.display = 'none';
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
    const allContents = document.querySelectorAll('.accordion-content');
    const content = element.nextElementSibling;
    const icon = element.querySelector('.acc-app');

    allContents.forEach((c) => {
        if (c !== content && c.style.display === "block") {
            c.style.display = "none";
            c.previousElementSibling.querySelector('.acc-app').src = "icons/down.svg";
        }
    });

    if (!content || !icon) return;

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.src = "icons/down.svg";
    } else {
        content.style.display = "block";
        icon.src = "icons/app.svg";

        if (!content.querySelector('input[type="checkbox"]')) {
            const checkboxContainer = document.createElement('div');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.style.accentColor = '#65AFBC';
            checkbox.style.cursor = 'pointer';
            checkbox.style.width = '20px';
            checkbox.style.height = '20px';

            checkboxContainer.style.display = 'flex';
            checkboxContainer.style.alignItems = 'center';
            checkboxContainer.style.marginBottom = '5px';

            label.textContent = 'Количество материала восстановлено';
            label.style.marginRight = '10px';

            checkboxContainer.appendChild(label);
            checkboxContainer.appendChild(checkbox);
            content.appendChild(checkboxContainer);

            const closeButton = document.createElement("button");
            closeButton.className = "button-accordion";
            closeButton.textContent = "Закрыть заявку";
            // closeButton.style.cursor = "pointer";
            closeButton.disabled = true;

            checkbox.addEventListener('change', function () {
                closeButton.disabled = !this.checked;
            });

            content.appendChild(closeButton);
        }
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

        window.location.href = 'index.html';
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
        } else if (!password) {
            passwordErrorAu.textContent = 'Пароль не может быть пустым.';
            isValid = false;
        }

        if (!isValid) return;

        const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
        const existingAccount = Object.values(storedAccounts).flat().find(account => account.login === username && account.password === password);

        if (!existingAccount) {
            usernameErrorAu.textContent = 'Неверный логин или пароль.';
            return;
        }

        //АККАУНТЫ

        switch (existingAccount.role) {
            case 'director':
                window.location.href = 'CRM-system.html';
                sessionStorage.setItem('user', existingAccount.login);
                break;
            case 'bookkeeper':
                window.location.href = 'CRM-system.html';
                sessionStorage.setItem('user', existingAccount.login);
                break;
            case 'meneger':
                window.location.href = 'CRM-system.html';
                sessionStorage.setItem('user', existingAccount.login);
                break;
            case 'sklad':
                window.location.href = 'warehouse.html';
                sessionStorage.setItem('user', existingAccount.login);
                break;
        }
    });
}

// CRM-СИСТЕМA

if (!localStorage.getItem('tableData')) {
    const sampleData = {
        row1: {
            id: 100,
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
            id: 101,
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
            id: 102,
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
            id: 103,
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
            id: 104,
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
            id: 103,
            date: '01.02.24',
            term: '03.03.24',
            counterparty: 'BMW',
            order: 'Пластиковые контейнеры, 10',
            material: 'Дерево',
            quantity: 50,
            size: '20x20',
            paid: '60.000',
            score: '100.000'
        },
        row7: {
            id: 104,
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
            id: 105,
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
            id: 106,
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
            id: 107,
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

//модальное окно материала
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

//проверка на title

if (titleTag.textContent === "CRM-system") {
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

                    if (property == 'id') {
                        td.classList.add('id');
                    }

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
                        if (sessionStorage.getItem('user') == 'sklad') {
                            td.addEventListener('click', openModalForSklad)
                        } else {
                            td.addEventListener('click', function () {
                                openModal(`${row.material}: ${quantity} шт.`);
                                const modalMaterial = document.getElementById("modalMaterial");
                                if (modalMaterial) modalMaterial.style.display = "block";
                            });
                        }

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

    const table = document.querySelector('.table-crm');
    const buttons = {
        id: document.querySelector('.customization-id-button'),
        date: document.querySelector('.customization-date-button'),
        term: document.querySelector('.customization-term-button'),
        counterparty: document.querySelector('.customization-counterparty-button'),
        order: document.querySelector('.customization-order-button'),
        material: document.querySelector('.customization-material-button'),
        size: document.querySelector('.customization-size-button'),
        paid: document.querySelector('.customization-paid-button'),
        score: document.querySelector('.customization-score-button'),
        all: document.querySelector('.customization-all-button')
    };

    const columnVisibility = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true
    };

    function hideAllBut(columnIndex) {
        Array.from(table.rows).forEach(row => {
            Array.from(row.cells).forEach((cell, index) => {
                cell.style.display = index === columnIndex ? '' : 'none';
            });
        });
    }

    Object.keys(buttons).forEach(key => {
        buttons[key].addEventListener('click', () => {
            if (key === 'all') {
                Array.from(table.rows).forEach(row => {
                    Array.from(row.cells).forEach(cell => {
                        cell.style.display = '';
                    });
                });
            } else {
                const columnIndex = Object.keys(buttons).indexOf(key);
                hideAllBut(columnIndex);
            }
        });
    });

    //УВЕДОМЛЕНИЯ
    notification.addEventListener('click', function () {
        if (modalNotification) {
            modalNotification.style.display = 'flex';
        }
    });

    if (sessionStorage.getItem('user') == 'meneger', 'director', 'bookkeeper') {
        btnBox.style.display = 'none';
    }
}

//СТРАНИЦА ЗАЯВОК

if (sessionStorage.getItem('user') == 'sklad') {
    if (titleTag.textContent === "Страница заявок") {
        tableWare.addEventListener('click', function () {
            window.location.href = 'CRM-system.html';
        });

        // Уведомления
        notificationWare.addEventListener('click', function () {
            if (modalNotificationWare) {
                modalNotificationWare.style.display = 'flex';
            }
        });
    }

    if (titleTag.textContent === "CRM-system") {
        btnBox.style.display = 'flex';
        btnBox.addEventListener('click', function () {
            window.location.href = 'warehouse.html';
        });

        function openModalForSklad() {
            let el = this;
            console.log(el);
            let nameMaterial = this.textContent;
            console.log(nameMaterial);
            let idTd = el.closest('tr').querySelector('.id').textContent;
            console.log('ID -', idTd);

            const modal = document.getElementById('modalMaterialForSklad');
            const modalContent = document.getElementById('modalContentForSklad');
            console.log(modalContent);

            const label = document.createElement('span');
            label.textContent = el.textContent;

            const newInput = document.createElement('input');
            newInput.classList.add('materialInput');
            newInput.type = 'text';
            newInput.id = 'cardboardInput';

            const unit = document.createElement('span');
            unit.textContent = ' шт.';

            const btn = document.createElement('button');
            btn.textContent = 'Сохранить';
            btn.classList.add('saveBtn');
            btn.disabled = true;

            newInput.addEventListener('input', function () {
                btn.disabled = this.value.trim() === '';
            });

            btn.addEventListener('click', function () {
                const newQuantity = parseInt(newInput.value, 10);
                if (!isNaN(newQuantity)) {
                    updateQuantityInTable(idTd, newQuantity);
                    modal.style.display = 'none';
                } else {
                    alert('Введите корректное количество');
                }
            });

            modalContent.innerHTML = '';
            modalContent.appendChild(label);
            modalContent.appendChild(newInput);
            modalContent.appendChild(unit);
            modalContent.appendChild(btn);

            modal.querySelector('.closeBtn').addEventListener('click', function () {
                modal.style.display = 'none';
            });

            modal.style.display = 'block';
            console.log(modal);
        }

        function updateQuantityInTable(id, newQuantity) {
            const data = JSON.parse(localStorage.getItem('tableData'));
            if (!data) return;

            const foundRow = Object.values(data).find(row => row.id == id);
            if (foundRow) {
                foundRow.quantity = newQuantity;
                localStorage.setItem('tableData', JSON.stringify(data));
                loadTableData();
            } else {
                console.log('Не найдено заявка с ID' + id);
            }
        }
    }
}

// Example usage: search for ID 125
// findOrderById(125);

//АККОРДЕОН

if (materialBtn) {
    materialBtn.addEventListener('click', function () {
        let existingData = JSON.parse(localStorage.getItem("accordionData")) || [];
        const modalContent = document.getElementById("modalContent");
        const modalNotification = document.querySelector(".modal-notification");
        let newOrderText = document.createElement('div');
        const materials = [];

        if (modalContent) {
            const materialInfo = modalContent.innerHTML.split(', ');
            materialInfo.forEach(info => {
                const [material, quantity] = info.split(': ');
                const quantityValue = parseInt(quantity.trim());
                materials.push({ id: existingData.length + 1, material: material.trim(), quantity: quantityValue });
            });
        }

        newOrderText.innerHTML = `
        <div class='notification'>
                <img src="icons/red.svg" alt="красное уведомление">
                Поступила новая заявка с материалами: ${materials[0].material}, ${materials[0].quantity} шт.
        </div>
        `;

        modalNotification.append(newOrderText);

        existingData.push(...materials);

        localStorage.setItem("accordionData", JSON.stringify(existingData));

        modalMaterial.style.display = "none";
    });
}

window.onload = function () {
    const accordionData = JSON.parse(localStorage.getItem("accordionData"));
    const container = document.getElementById("accordionContainer");

    if (accordionData && container) {
        accordionData.forEach(item => {
            const shadowDiv = document.createElement("div");
            shadowDiv.className = "shadow";

            const accordionBar = document.createElement("div");
            accordionBar.className = "accordion-bar";
            accordionBar.onclick = function () { toggleAccordion(this); };

            const titleParagraph = document.createElement("p");
            titleParagraph.textContent = item.material;

            const arrowIcon = document.createElement("img");
            arrowIcon.src = "icons/down.svg";
            arrowIcon.alt = "иконка стрелки вниз";
            arrowIcon.className = "acc-app";

            accordionBar.appendChild(titleParagraph);
            accordionBar.appendChild(arrowIcon);

            const accordionContent = document.createElement("div");
            accordionContent.className = "accordion-content";

            const contentParagraph = document.createElement("p");
            contentParagraph.textContent = `Осталось на складе: ${item.quantity} шт.`;

            accordionContent.appendChild(contentParagraph);

            const checkboxContainer = document.createElement('div');
            const labelCheckbox = document.createElement('label');
            const checkboxCheckbox = document.createElement('input');

            checkboxCheckbox.type = 'checkbox';
            checkboxCheckbox.style.accentColor = '#65AFBC';
            checkboxCheckbox.style.cursor = 'pointer';

            checkboxCheckbox.style.width = '20px';
            checkboxCheckbox.style.height = '20px';
            checkboxCheckbox.style.borderWidth = '0';
            checkboxCheckbox.style.outlineWidth = '0';

            checkboxContainer.style.display = 'flex';
            checkboxContainer.style.alignItems = 'center';

            labelCheckbox.textContent = 'Количество материала восстановлено'
            labelCheckbox.style.margin = '15px 10px 10px 0';

            checkboxContainer.appendChild(labelCheckbox);
            checkboxContainer.appendChild(checkboxCheckbox);
            accordionContent.appendChild(checkboxContainer);

            const closeButton = document.createElement("button")
            closeButton.className = "button-accordion"
            closeButton.textContent = "Закрыть заявку"
            // closeButton.style.cursor = "pointer"
            closeButton.disabled = true;

            checkboxCheckbox.addEventListener('change', function () {
                closeButton.disabled = !this.checked;
            });

            accordionContent.appendChild(closeButton)

            closeButton.addEventListener('click', function () {
                const index = accordionData.findIndex(item => item.id == parseInt(accordionBar.id))
                accordionData.splice(index, 1)
                localStorage.setItem("accordionData", JSON.stringify(accordionData))
                shadowDiv.remove()
            })

            shadowDiv.appendChild(accordionBar)
            shadowDiv.appendChild(accordionContent)

            container.appendChild(shadowDiv)
        })
    }
};

document.addEventListener("DOMContentLoaded", loadTableData);