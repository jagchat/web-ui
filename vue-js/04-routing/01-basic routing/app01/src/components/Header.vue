<template>
    <div>
        <h1>Header</h1>
        <div><router-link to="/Home">Home Page</router-link></div>
        <div><router-link to="/About">About Page</router-link></div>
        <hr>
    </div>
</template>
<script>
export default {
  name: "headerPart",
  data() {
    return {};
  }
};
</script>