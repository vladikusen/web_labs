class View {
    constructor() {
        this.contactsTable = document.querySelector('#contacts');
        this.createContactForm = document.querySelector('#createForm');
        this.loginForm = document.querySelector('#login');
        this.registrationForm = document.querySelector('#registration');
        this.loginLogoutItem = document.querySelector('#login-page');
    }

    getEditInputValue = (inputName, id) => document.querySelector(`#${inputName}${id}`).value;

    getFormInputValue = inputName => document.querySelector(`#${inputName}`).value;

    getRegistrationSexValue = () => [...document.querySelectorAll('.sex')].find(radio => radio.checked).value;

    hideNonAuthorizedItems = () => {
        document.querySelector('#profile').style.display = 'none';
        if (document.querySelector('#add-contact')) {
            document.querySelector('#add-contact').style.display = 'none';
        }
    };

    createContactComponent = ({ id, name, number, cityandCountry }) => {
        const element = document.createElement('tr');
        element.innerHTML = `
                            <td>${name}</td>
                            <td>${number}</td>
                            <td>${cityandCountry}</td>
                            <td class="d-none d-md-block">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${id}">
                            Edit
                            </button>
                            <button class="btn btn-warning remove">Remove</button>
                            </td>


<div class="modal fade" style="background: transparent;"  id="modal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit contact</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="col-12 col-lg-6 rounded text-center fw-bold">
                    <div class="form-outline mb-4 fs-3">
                        <label class="form-label" for="name">Name </label>
                        <input required placeholder="Name" type="text" id="name${id}" class="form-control" value="${name}"/>
                    </div>
                    <div class="form-outline mb-4 fs-3">
                        <label class="form-label" for="phone">Phone number </label>
                        <input required placeholder="Phone number" type="tel" id="phone${id}" class="form-control" value="${number}"/>
                    </div>
                    <div class="form-outline mb-4 fs-3">
                        <label class="form-label" for="city_country">City, Country </label>
                        <input required placeholder="City, Country" type="text" id="city_country${id}"
                            class="form-control" value="${cityandCountry}"/>
                    </div>
                </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary edit">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;
        return element;
    };

    createEmptyTableMessage = () => {
        const message = document.createElement('p');
        message.innerHTML = 'No contacts.';
        message.classList.add('display-5', 'fw-bold', 'text-light');
        return message;
    };

    changeLoginOnLogoutLinkItem = () => {
        const elem = document.createElement('a');
        elem.classList.add('nav-link');
        elem.innerHTML = 'Logout';
        return elem;
    };
}
