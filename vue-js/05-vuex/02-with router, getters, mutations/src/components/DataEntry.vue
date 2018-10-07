<template>
    <div>    
      <h2>Enter first no: <input v-model.lazy.number="a" placeholder="First No."></h2>
      <h2>Enter second no: <input v-model.lazy.number="b" placeholder="Second No."></h2>
      <hr>
      <button @click="incValues">Increment above values</button>
      <hr>
      <router-link tag="button" :to="{name: 'ResultPart'}">Show Result</router-link>
      or
      <button @click="showResult">Show Result</button>
    </div>
</template>
<script>
import inc from "./../helpers/IncrementValues"; //modifying store in a non-component module

export default {
  name: "dataEntry",
  data() {
    return {};
  },
  computed: {
    //v-model together with store, would work with the following wrappers around store/state properties
    //based on https://vuex.vuejs.org/guide/forms.html
    a: {
      get() {
        return this.$store.state.a;
      },
      set(value) {
        this.$store.commit("updateA", value);
      }
    },
    b: {
      get() {
        return this.$store.state.b;
      },
      set(value) {
        this.$store.commit("updateB", value);
      }
    }
  },
  methods: {
    incValues() {
      inc.process(); //change values in store through non-component module
    },
    showResult() {
      this.$router.push({
        name: "ResultPart"
      });
    }
  }
};
</script>