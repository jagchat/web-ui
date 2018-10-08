<template>
    <div class="container">
      <div class="row">
        <h2>Details of Employee: {{empno}}</h2>
      </div>        
      <div v-if="PENDING" class="alert alert-info" role="alert">Loading..</div>
      <div v-if="!PENDING && !FAILURE && data != null ">
        <hr>
        <div class="form-group row">
          <label for="ename" class="col-sm-2 col-form-label caption">Name:</label>
          <div class="col-sm-10">
            <label class="form-control-plaintext" id="ename">{{ data.Ename }}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="sal" class="col-sm-2 col-form-label caption">Salary:</label>
          <div class="col-sm-10">
            <label class="form-control-plaintext" id="sal">{{data.Sal}}</label>
          </div>
        </div>
      </div>
      <div class="row">
        <button @click="goBack">Back</button>
      </div>        
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import api from "./../store/api";

export default {
  name: "about",
  data() {
    return {
      empno: this.$route.params.empno,
      data: null
    };
  },
  created() {
    this.refresh();
  },
  computed: {
    ...mapGetters(["PENDING", "FAILURE", "DATA_ERROR"])
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    refresh() {
      api.getEmployeeAsync(this.empno).then(data => {
        this.data = data[0];
      });
    }
  }
};
</script>
<style>
.caption {
  font-weight: bold;
}
</style>