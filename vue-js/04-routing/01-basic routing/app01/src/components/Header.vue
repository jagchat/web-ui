<template>
    <div>
        <h1>Header</h1>
        <div><router-link to="/Home">Home Page</router-link></div>
        <div><router-link to="/About">About Page</router-link></div>
        or
        <router-link to="/Home" tag="div" active-class="active-part">Home Page</router-link>
        <router-link to="/About" tag="div" active-class="active-part">About Page</router-link>
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
<style>
.router-link-active,
.active-part {
  background-color: cyan;
}
</style>