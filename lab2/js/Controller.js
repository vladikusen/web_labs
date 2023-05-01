class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    IsAuthorized = () => {
        if (!this.model.currentUser) {
            this.view.hideNonAuthorizedItems();
            return false;
        }
        const logoutBtn = this.view.changeLoginOnLogoutLinkItem();
        logoutBtn.onclick = () => {
            this.model.logout();
            location.replace('/index.html');
        };
        this.view.loginLogoutItem.innerHTML = '';
        this.view.loginLogoutItem.appendChild(logoutBtn);
        return true;
    };

    showContacts = () => {
        const contacts = this.model.getContacts();
        if (contacts.length) {
            contacts.map((contact, id) => {
                const contactComponent = this.view.createContactComponent({ id, ...contact });
                this.view.contactsTable.append(contactComponent);
            });
        } else {
            this.view.contactsTable.append(this.view.createEmptyTableMessage());
        }
    };

    setEditAndRemoveBtnsOnClick = () => {
        const editBtns = document.querySelectorAll('.edit');
        editBtns.forEach((btn, id) => {
            btn.onclick = () => {
                const name = this.view.getEditInputValue('name', id);
                const number = this.view.getEditInputValue('phone', id);
                const cityandCountry = this.view.getEditInputValue('city_country', id);
                this.model.editContact(id, {
                    name,
                    number,
                    cityandCountry
                });
                location.reload();
            };
        });

        const removeBtns = document.querySelectorAll('.remove');
        removeBtns.forEach((btn, id) => {
            btn.onclick = () => {
                this.model.removeContact(id);
                location.reload();
            };
        });
    };

    setOnSubmitCreateContactForm = () => {
        this.view.createContactForm.addEventListener('submit', () => {
            const name = this.view.getFormInputValue('name');
            const number = this.view.getFormInputValue('phone');
            const cityandCountry = this.view.getFormInputValue('city_country');

            this.model.addContact({ name, number, cityandCountry });
        });
    };

    setOnSubmitLoginForm = () => {
        this.view.loginForm.addEventListener('submit', () => {
            const email = this.view.getFormInputValue('email');
            const password = this.view.getFormInputValue('password');
            this.model.login(email, password);
        });
    };

    setOnSubmitRegistrateForm = () => {
        this.view.registrationForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = this.view.getFormInputValue('username');
            const email = this.view.getFormInputValue('email');
            const sex = this.view.getRegistrationSexValue();
            const password = this.view.getFormInputValue('password');
            const birthday = this.view.getFormInputValue('birthday');
            console.log({ username, email, password, sex, birthday });
            this.model.registration(username, email, password, sex, birthday);
        });
    };
}

const App = new Controller();
