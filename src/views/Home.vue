<template>
  <section>
    <navbar />
    <v-text-field
      class="width"
      v-model="$store.state.search"
      clearable
      prepend-icon="mdi-table-search"
    ></v-text-field>
    <tabs />
    <v-btn @click="$router.push('/borrow')" color="primary" dark fixed bottom right fab>借用</v-btn>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default {
  name: "Home",
  components: {
    Navbar,
    Tabs
  },
};
</script>


