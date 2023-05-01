<template>
  <div class="container">
    <div class="rounded text-dark justify-content-center">
      <div
        class="rounded border border border-info bg-light border-3 text-center fw-bold"
        action="../index.html"
        id="createForm"
      >
        <h2 class="display-4 fw-bold">Create contact</h2>
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
          @click="addContact(name, tel, place)"
          type="submit"
          class="btn btn-primary btn-block mb-4"
        >
          Create contact
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
  name: "addContact",
  data() {
    return {
      name: "",
      tel: "",
      place: "",
    };
  },
  mounted() {
    this.$store.dispatch("LOAD_USER");
  },
  methods: {
    addContact(name, tel, place) {
      console.log(name, tel, place);
      if (name.length && tel.length && place.length) {
        this.$store.dispatch("ADD_CONTACT", { name, tel, place });
        this.name = "";
        this.tel = "";
        this.place = "";
      } else {
        alert("Fill all inputs!");
      }
    },
  },
};
</script>
