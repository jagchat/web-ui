<template>
  <div id="app">
    <h1>{{ normalMsg }}</h1>
    <h1>{{ htmlMsg }}</h1>
    <h1 v-html="htmlMsg"></h1>

    <div v-bind:id="someId">attribute binding for id</div>
    <div v-bind:id="'a' + someId">attribute binding and concatenation</div>
    <div v-bind:id="someId+1">attribute binding and js expression</div>
    <div>Interpolation and Js Expression: {{ someId + 1 }}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      normalMsg: "Normal Text (interpolation)",
      htmlMsg: "<strong>Html Text</strong>",
      someId: 1
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
