<template>
  <v-snackbar v-model="snack.show" :timeout="1500" :color="snack.color">{{snack.text}}</v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Snack",
  computed: {
    ...mapState(["snack"])
  }
};
</script>
