<template>
    <div>
        <h1>Header</h1>
        <button @click="navigateHome">Home Page</button>
        <button @click="navigateAbout">About Page</button>
        <hr>
    </div>
</template>
<script>
export default {
  name: "headerPart",
  data() {
    return {};
  },
  methods: {
    navigateHome() {
      this.$router.push("/");
    },
    navigateAbout() {
      this.$router.push("/About");
    }
  }
};
</script>
