<template>
    <div>
        <h2>Result Page</h2>
        <div>
          Value received for a: {{a}}<br>
          Value received for b: {{b}}<br>
          Sum = {{ sum }}
        </div>
        <router-link tag="button" :to="{name: 'DataPart'}">Enter Data Again</router-link>
        or
        <button @click="goBack">Back</button>
    </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      a: this.$route.params.a,
      b: this.$route.params.b
    };
  },
  computed: {
    sum() {
      return parseInt(this.a) + parseInt(this.b);
    }
  },
  watch: {
    //this is necessary as the component catches the intial values and
    //does not reflect changes (say modifying url values)
    $route(to, from) {
      (this.a = to.params.a), (this.b = to.params.b);
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>