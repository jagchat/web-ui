<template>
    <div>    
      <h2>Enter first no: <input v-model.lazy.number="a" placeholder="First No."></h2>
      <h2>Enter second no: <input v-model.lazy.number="b" placeholder="Second No."></h2>
      <router-link tag="button" :to="{name: 'ResultPart', params: {a,b}}">Show Result</router-link>
      or
      <button @click="showResult">Show Result</button>
    </div>
</template>
<script>
export default {
  name: "dataEntry",
  data() {
    return {
      a: 0,
      b: 0
    };
  },
  methods: {
    showResult() {
      this.$router.push({
        name: "ResultPart",
        params: {
          a: this.a,
          b: this.b
        }
      });
    }
  }
};
</script>