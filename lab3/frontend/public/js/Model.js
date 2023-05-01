// class Model {
//   constructor() {
//     this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     this.users = JSON.parse(localStorage.getItem("users"));
//   }

//   getContact(id) {
//     return this.currentUser ? this.currentUser.contacts[id] : null;
//   }

//   getContacts() {
//     return this.currentUser ? this.currentUser.contacts : null;
//   }

//   addContact(contact) {
//     this.currentUser.contacts.push(contact);
//     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//   }

//   editContact(id, editedContact) {
//     this.currentUser.contacts[id] = editedContact;
//     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//   }

//   removeContact(id) {
//     this.currentUser.contacts = this.currentUser.contacts.filter(
//       (_, idx) => idx !== id
//     );
//     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//   }

//   login(email, password) {
//     const currentUser = this.users.find(
//       (u) => email === u.email && password === u.password
//     );
//     if (currentUser) {
//       this.currentUser = currentUser;
//       localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//       return true;
//     }
//     return false;
//   }

//   registration(username, email, password, sex, birthday) {
//     const newUser = { username, email, password, sex, birthday, contacts: [] };
//     this.users.push(newUser);
//     this.currentUser = newUser;
//     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//     localStorage.setItem("users", JSON.stringify(this.users));
//   }

//   logout() {
//     this.currentUser = null;
//     localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
//   }
// }
