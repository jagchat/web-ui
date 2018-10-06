<template>
  <div id="app">
    <h2>Enter first no: <input v-model="a" placeholder="First No."></h2>
    <span v-once>Initial first value: {{a}}</span><br>
    Your first no: {{a}}<br>
    <h2>Enter second no: <input v-model.lazy.number="b" placeholder="Second No."></h2>
    <span v-once>Initial second value: {{a}}</span><br>
    Your second no: {{b}}<br>
    <button v-on:click="onSumClick">Show Sum</button>
    <button @click="onSumClick">Show Sum</button>
    <div v-if="sum != null">Sum = {{sum}}</div>    
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      a: 0,
      b: 0,
      sum: null
    };
  },

  methods: {
    onSumClick: function(event) {
      this.sum = parseInt(this.a) + parseInt(this.b);
    }
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
