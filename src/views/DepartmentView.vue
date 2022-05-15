<template>
  <div class="department">
    <h1>{{ data }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import departmentData from "../models/departments";
import {
  //department_capfkid_request,
  headers,
} from "@/network/department_query";
export default {
  name: "CapfkView",
  data() {
    return {
      data: departmentData,
      capfkid: "10",
    };
  },
  mounted() {
    fetch(
      `http://localhost/api/v1/production_point?capfk_id=${this.$route.query.capfk_id}`,
      {
        headers: headers,
        method: "GET",
      }
    )
      .then((result) =>
        console.log(
          result.json().then((data) => {
            this.data = data;
          })
        )
      )
      .catch((error) => console.log(error));
  },
};
</script>
