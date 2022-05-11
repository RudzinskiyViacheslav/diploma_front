<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">Точки</div>
        <div class="table-header__search">
          <input type="text" />
        </div>
      </div>
      <div class="table_header">
        <div class="row">Название</div>
        <div class="row">Производственные участки</div>
        <div class="row">Адрес</div>
        <div class="row">Индекс</div>
        <div class="row">Начальник</div>
      </div>
      <div v-for="(item, index) in data" :key="index" class="table_header">
        <router-link to="/department">
          <div class="row_cell">{{ item.name }}</div>
        </router-link>
        <div class="row_cell">{{ item.departments_quantity }} участков</div>
        <div class="row_cell">{{ item.adress }}</div>
        <div class="row_cell">{{ item.index }}</div>
        <div class="row_cell">{{ item.master }}</div>
      </div>
    </div>
    <!-- <ui-table :data="data" :thead="thead" :tbody="tbody">
      <template #name="{ data }">
        <div class="name">{{ data.name }}</div>
      </template>
    </ui-table> -->
  </div>
</template>

<script>
// @ is an alias to /src
import capfkData from "../models/capfk";
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
};
</script>

<style scoped>
.table {
  background: #594036;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px 54px;
}
.table-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
}
.table-header__name {
  color: white;
}
.table_header {
  display: flex;

  justify-content: space-between;
}
.table_header:not(:last-child) {
  margin-bottom: 21px;
}
.name {
  background: red;
}
.table_header .row_cell {
  /* width: 300px;
  display: flex;
  justify-content: flex-start; */
}
</style>
