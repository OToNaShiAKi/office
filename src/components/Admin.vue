<template>
  <v-dialog v-model="$store.state.dialog">
    <v-card>
      <v-subheader>管理员认证</v-subheader>
      <v-card-text>
        <v-text-field type="password" v-model="model" label="认证码" :error="error"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="hide">取消</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="authen">认证</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import md5 from "crypto-js/md5";

export default {
  name: "administration",
  data: () => ({
    error: false,
    model: ""
  }),
  methods: {
    authen() {
      const model = md5(this.model);
      if (model == "d378703c8438512ae09385b5e97efc3a") {
        this.error = false;
        this.$store.commit("dialog", false);
        this.$store.commit("administrate", true);
        localStorage.setItem("admin", model);
      } else this.error = true;
    },
    hide() {
      this.$store.commit("dialog", false);
    }
  }
};
</script>
