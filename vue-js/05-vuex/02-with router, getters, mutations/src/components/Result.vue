<template>
    <div>
        <h2>Result Page</h2>
        <div>
          Value received for a: {{a}}<br>
          Value received for b: {{b}}<br>
          Sum = {{ sum }}<br>
          Difference = {{ difference }}<br>
        </div>
        <router-link tag="button" :to="{name: 'DataPart'}">Enter Data Again</router-link>
        or
        <button @click="goBack">Back</button>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "about",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["a", "b", "sum"]), //using store/getters for data (no value changes/mutations needed here)
    difference() {
      //can still have local computed
      return parseInt(this.a) - parseInt(this.b);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>