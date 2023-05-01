export default class Model {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  getContact(id) {
    return this.currentUser ? this.currentUser.contacts[id] : null;
  }

  getContacts() {
    return this.currentUser ? this.currentUser.contacts : null;
  }
  async loadUser() {
    //this.curentUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log(this.curentUser);
    await this.getContactsFromServer();
  }
  async addContact(contact) {
    this.currentUser.contacts.push(contact);
    // localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    await this.sendContactsOnServer();
    await this.getContactsFromServer();
  }

  async editContact(edit) {
    this.currentUser.contacts[edit.id] = edit.edited;
    //localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    await this.sendContactsOnServer();
    await this.getContactsFromServer();
  }

  async removeContact(id) {
    console.log(id);
    this.currentUser.contacts = this.currentUser.contacts.filter(
      (_, idx) => idx !== id
    );
    //localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    await this.sendContactsOnServer();
    await this.getContactsFromServer();
  }
  async getContactsFromServer() {
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        this.currentUser.contacts = res.items;
      });
  }
  async sendContactsOnServer() {
    fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ curentUser: this.currentUser }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
