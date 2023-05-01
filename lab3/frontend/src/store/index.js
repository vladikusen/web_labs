import { createStore } from "vuex";
import model from "@/model/model.js";
export default createStore({
  state: {
    model: new model(),
  },
  mutations: {
    ADD_CONTACT(state, contact) {
      state.model.addContact(contact);
    },
    EDIT_CONTACT(state, edit) {
      state.model.editContact(edit);
    },
    REMOVE_CONTACT(state, id) {
      state.model.removeContact(id);
    },
    LOAD_USER(state) {
      state.model.loadUser();
    },
  },
  actions: {
    ADD_CONTACT({ commit }, contact) {
      commit("ADD_CONTACT", contact);
    },
    EDIT_CONTACT({ commit }, edit) {
      commit("EDIT_CONTACT", edit);
    },
    REMOVE_CONTACT({ commit }, id) {
      commit("REMOVE_CONTACT", id);
    },
    LOAD_USER({ commit }) {
      commit("LOAD_USER");
    },
  },
  modules: {},
});
