<template>
    <div class="container">
      <div class="row">
        <div class="col-auto mr-auto">
          <h3>List of Employees</h3>
        </div>
        <div class="col-auto">
          <button @click="refresh" class="btn btn-primary">Refresh</button>
        </div>
      </div>
      <div v-if="PENDING" class="alert alert-info" role="alert">Loading..</div>
      <div v-if="!PENDING && !FAILURE">
        <table class="table">
          <thead >
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
          </thead>
          <tbody>
            <tr v-for="(item) in DATA" :key="item.Empno">
              <th scope="row">
                {{item.Empno}}
              </th>
              <td>{{item.Ename}}</td>
              <td>{{item.Sal}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "EmployeeList",
  data() {
    return {};
  },
  created() {
    this.refresh();
  },
  computed: {
    ...mapGetters(["PENDING", "FAILURE", "DATA_ERROR", "DATA"])
  },
  methods: {
    refresh() {
      this.$store.dispatch("getEmployeesAsync");
    }
  }
};
</script>