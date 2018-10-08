<template>
  <div id="app">
    <header-part></header-part>
    <emp-list-part></emp-list-part>
  </div>
</template>

<script>
import headerPart from "./components/Header";
import empListPart from "./components/EmployeeList";

export default {
  name: "app",
  components: {
    headerPart,
    empListPart
  },
  data() {
    return {};
  }
};
</script>

