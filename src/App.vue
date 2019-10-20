<template>
  <v-app id="app">
    <router-view />
    <admin />
    <snack />
  </v-app>
</template>

<script>
import Admin from "./components/Admin";
import Snack from "./components/Snack";

export default {
  name: "app",
  components: {
    Admin,
    Snack
  },
  mounted() {
    const model = localStorage.getItem("admin");
    if (model == "d378703c8438512ae09385b5e97efc3a")
      this.$store.commit("administrate", true);
    this.$store.dispatch("data");
  }
};
</script>

<style>
.width {
  margin: 0 10px;
}
.decoration {
  text-decoration: none;
}
</style>