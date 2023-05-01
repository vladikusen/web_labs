<template>
  <tr>
    <td>{{ contact.name }}</td>
    <td>{{ contact.tel }}</td>
    <td>{{ contact.place }}</td>
    <td class="d-none d-md-block">
      <button @click="toEdit()" type="button" class="btn btn-primary">
        Edit
      </button>
      <button @click="remove()" class="btn btn-warning remove">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    contact: { type: Object },
    id: { type: Number },
  },
  methods: {
    remove() {
      console.log(this.id);
      this.$store.dispatch("REMOVE_CONTACT", this.id);
    },
    toEdit() {
      //console.log(this.contact);
      this.$router.push({ name: "edit", params: { id: this.id } });
    },
  },
};
</script>
