<template>
  <v-container>
    <v-text-field v-model="depart" required label="部门" />
    <v-text-field v-model="person" required label="借用人" />
    <v-text-field v-model="qq" required label="QQ" type="tel" max-length="10" />
    <v-select v-model="house" :items="houses" label="选择公房" />
    <v-menu max-width="100%" transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-text-field v-model="date" type="date" label="选择日期" readonly v-on="on" />
      </template>
      <v-date-picker
        :allowed-dates="allowedDate"
        color="primary"
        v-model="date"
        no-title
        scrollable
      />
    </v-menu>
    <v-row>
      <v-col cols="6">
        <v-menu transition="scale-transition" max-width="100%">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="start" label="选择时间" type="time" readonly v-on="on"></v-text-field>
          </template>
          <v-time-picker :allowed-hours="allowedStart" v-model="start"></v-time-picker>
        </v-menu>
      </v-col>
      <v-col cols="6">
        <v-menu transition="scale-transition" max-width="100%">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="end" type="time" readonly v-on="on"></v-text-field>
          </template>
          <v-time-picker :allowed-hours="allowedEnd" v-model="end"></v-time-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-btn @click="sub" :disabled="disabled" color="primary" rounded block outlined>提交</v-btn>
    <v-btn text @click="$router.go(-1)">返回</v-btn>
    <v-btn text @click="$router.push('/list')" class="float-right">借用规则</v-btn>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Borrow",
  computed: {
    ...mapState(["houses"]),
    disabled() {
      let { house, group, person, qq, date, start, end } = this;
      return house && group && person && qq >= 5 && date && start && end;
    }
  },
  data: () => ({
    depart: "",
    person: "",
    qq: "",
    house: "",
    date: new Date().toISOString().substr(0, 10),
    start: "19:00",
    end: "21:00"
  }),
  methods: {
    allowedDate: val => {
      let start = new Date();
      let end = new Date();
      end.setMonth(start.getMonth() + 2);
      start = start.toISOString().substr(0, 10);
      end = end.toISOString().substr(0, 10);
      return val > start && val <= end;
    },
    allowedStart(h) {
      return h >= 7 && h <= 23 && h < parseInt(this.end);
    },
    allowedEnd(h) {
      return h >= 7 && h <= 23 && h > parseInt(this.start);
    },
    sub() {
      let { house, depart, person, qq, date, start, end } = this;
      this.$store.dispatch("sub", {
        house,
        depart,
        person,
        qq,
        date,
        start,
        end
      });
    }
  },
  mounted() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    this.date = date.toISOString().substr(0, 10);
  }
};
</script>