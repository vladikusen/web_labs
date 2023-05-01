<template>
  <div class="container">
    <div class="rounded text-dark justify-content-center">
      <div
        class="rounded border border border-info bg-light border-3 text-center fw-bold"
        id="createForm"
      >
        <h2 class="display-4 fw-bold">Change contact</h2>
        <div class="form-outline mb-4 fs-3">
          <label class="form-label" for="name">Name </label>
          <input
            v-model="name"
            required
            placeholder="Name"
            type="text"
            id="name"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-4 fs-3">
          <label class="form-label" for="phone">Phone number </label>
          <input
            v-model="tel"
            required
            placeholder="Phone number"
            type="tel"
            id="phone"
            class="form-control"
          />
        </div>
        <div class="form-outline mb-4 fs-3">
          <label class="form-label" for="city_country">City, Country </label>
          <input
            v-model="place"
            required
            placeholder="City, Country"
            type="text"
            id="city_country"
            class="form-control"
          />
        </div>
        <button
          @click="editContact(name, tel, place)"
          type="submit"
          class="btn btn-primary btn-block mb-4"
        >
          Change contact
        </button>
      </div>
    </div>
    <router-link to="/" class="fs-5 text-light mb-3"
      >Back to contacts</router-link
    >
  </div>
</template>
<script>
export default {
  name: "edit",
  props: ["id"],
  data() {
    return {
      name: "",
      tel: "",
      place: "",
    };
  },
  methods: {
    editContact(name, tel, place) {
      const edit = { id: this.id, edited: { name, tel, place } };
      this.$store.commit("EDIT_CONTACT", edit);
    },
  },
};
</script>