<template>
  <v-container class="px-6">
    <v-subheader class="mx-n4">
      <h4>公房借用须知：</h4>
      <v-spacer></v-spacer>
      <v-icon color="error">mdi-alert</v-icon>
    </v-subheader>
    <section>
      <p class="body-2" v-for="(v, i) in know" :key="i">{{v}}</p>
    </section>
    <v-btn @click="$router.go(-1)" color="primary" outlined block rounded>已阅</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    know: [
      "公房借用仅可申请两个月以内的使用权。",
      "请大家至少提前一天预约公房，如借用情况紧急，请私戳公房管理人。",
      "公房管理人员固定于12:30-14:00、21:00-23:00，统一进行公房借用审核工作，其余时间段可能审核工作会延迟进行。",
      "如需借用公房自习，需直接私戳公房管理人员。",
      "拿到公房钥匙即为公房负责人，要对此段时间公房发生的所有事情负责。",
      "使用公房时要保证公房卫生，当天需十一点十分之前归还所借用公房钥匙，离开公房时需关灯锁门。"
    ]
  })
};
</script>