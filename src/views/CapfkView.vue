<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.svg" /> -->
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">Точки</div>
        <div class="table-header__search">
          <input type="text" />
        </div>
      </div>
      <div class="table_header">
        <div class="row">Название</div>
        <div class="row">Адрес</div>
        <div class="row">Название вокзала</div>
        <div class="row">Индекс</div>
        <div class="row">Количество ПУ</div>
        <div class="row">Начальник участка</div>
      </div>
      <div v-for="(item, index) in data" :key="index" class="table_header">
        <router-link :to="`/department?capfk_id=${item.capfk_id}`">
          <div class="row_cell">{{ item.capfk_name }}</div>
        </router-link>
        <div class="row_cell">{{ item.adress }}</div>
        <div class="row_cell">{{ item.station_name }}</div>
        <div class="row_cell">{{ item.index_capfk }}</div>
        <div class="row_cell">{{ item.departments_quantity }} участков</div>
        <div class="row_cell">{{ item.capfk_master }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import capfkData from "../models/capfk";
import {
  //department_capfkid_request,
  headers,
} from "@/network/department_query";
export default {
  name: "CapfkView",
  data() {
    return {
      data: capfkData,
      thead: [
        "Название",
        "Производственные участки",
        "Адрес",
        "Индекс",
        "Начальник",
      ],
      tbody: [
        "name",
        "adress",
        "station_name",
        "index",
        "departments_quantity",
        "master",
      ],
    };
  },
  mounted() {
    fetch(`http://localhost/api/v1/capfk`, {
      headers: headers,
      method: "GET",
    })
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

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
.table {
  background: #594036;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px 54px;
  font-family: Inter;
  margin-right: 12px;
  margin-left: 12px;
}
.table-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
}
.table-header__name {
  color: white;
  font-weight: semi-bold;
  font-size: 20px;
}
.table_header {
  display: flex;

  justify-content: space-between;
}
.table_header:not(:last-child) {
  margin-bottom: 21px;
}
.row_cell {
  width: 250px;
  text-align: start;
  color: white;
  font-weight: semi-bold;
}
.row {
  font-size: 24px;
  font-weight: bold;
  width: 250px;
  text-align: start;
}
</style>
