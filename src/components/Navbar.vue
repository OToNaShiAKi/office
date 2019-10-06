<template>
  <v-toolbar shrink-on-scroll prominent color="primary" dark flat>
    <v-toolbar-title>公房借用</v-toolbar-title>
    <v-spacer />
    <v-btn v-if="administrate" icon @click="out">
      <v-icon>mdi-account-check</v-icon>
    </v-btn>
    <v-btn v-else icon @click="admin">
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs
        v-model="$store.state.active"
        centered
        slider-color="white"
        background-color="transparent"
      >
        <v-tab v-for="v in houses" :key="v.value" :href="`#${v.value}`">{{ v.text }}</v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["houses", "administrate"])
  },
  methods: {
    admin() {
      this.$store.commit("dialog", true);
    },
    out() {
      let bool = confirm("确认登出管理员状态？");
      if (bool) {
        this.$store.commit("administrate", false);
        localStorage.removeItem("admin");
      }
    }
  }
};
</script>