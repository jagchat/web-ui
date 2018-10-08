<template>
  <div id="app">
    <header-part></header-part>
    <router-view></router-view>
  </div>
</template>

<script>
import headerPart from "./components/Header";

export default {
  name: "app",
  components: {
    headerPart
  },
  data() {
    return {};
  }
};
</script>

