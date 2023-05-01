<template>
  <div>
    <table
      class="table-bordered rounded table table-light"
      v-if="$store.state.model.currentUser.contacts != null"
    >
      <thead>
        <tr>
          <th scope="col">Name</th>

          <th scope="col">Phone</th>
          <th scope="col">City, Country</th>
          <th class="d-none d-md-block" scope="col">Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        <contact
          v-for="(contact, id) in $store.state.model.currentUser.contacts"
          v-bind:key="contact"
          v-bind:contact="contact"
          v-bind:id="id"
        />
      </tbody>
    </table>
    <div v-else>Any contacts</div>
    <router-link to="/addContact" class="fs-5 text-light mb-3"
      >Didn't find user? Add him!</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import contact from "../components/contact.vue";

export default {
  components: {
    contact,
  },
  created() {
    this.$store.dispatch("LOAD_USER");
  },
};
</script>
