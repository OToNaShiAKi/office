<template>
  <v-tabs-items v-model="$store.state.active">
    <v-tab-item v-for="v in houses" :key="v.value" :value="v.value">
      <v-data-table
        hide-default-header
        hide-default-footer
        sort-desc
        :items-per-page="-1"
        :search="search"
        :headers="administrate ? adminHeaders :headers "
        :items="informations[v.value]"
        sort-by="time"
      >
        <template v-slot:item.action="{ item }">
          <v-icon small @click="status(item.id, true)" class="mr-3">mdi-check-circle-outline</v-icon>
          <v-icon small @click="status(item.id, false)" class="mr-3">mdi-cancel</v-icon>
          <v-icon small @click="del(item.id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-tab-item>
  </v-tabs-items>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tabs",
  data: () => ({
    headers: [
      { text: "组织", value: "depart" },
      { text: "借用时间", value: "time" },
      { text: "状态", value: "status" }
    ],
    adminHeaders: [
      { text: "管理", value: "action" },
      { text: "组织", value: "depart" },
      { text: "借用时间", value: "time" },
      { text: "借用人", value: "person" },
      { text: "QQ", value: "qq" },
      { text: "状态", value: "status" }
    ]
  }),
  computed: {
    ...mapState(["houses", "informations", "search", "administrate"])
  },
  methods: {
    status(id, status) {
      let bool = confirm(`确认修改此条记录状态为${status ? "批准" : "驳回"}？`);
      if (bool) this.$store.dispatch("status", { status, id });
    },
    del(id) {
      let bool = confirm("确认删除此条记录？");
      if (bool) this.$store.dispatch("delete", id);
    }
  }
};
</script>