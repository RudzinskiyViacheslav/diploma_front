/* eslint-disable */
<template>
  <div class="department">
    <!-- <h1>{{ data }}</h1> -->
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">
          Производственные участки ЦАПФК "{{ this.$route.query.capfk_id }}"
        </div>
        <!-- <div id="create_card_button">
          <div class="btn" @click="create_card">
            Создать производственную карточку
          </div>
        </div> -->
      </div>
      <div class="table_header">
        <div class="row">Адрес участка</div>
        <div class="row">Номер участка</div>
        <div class="row">Начальник участка</div>
        <div class="row">Рабочий телефон</div>
        <div class="row">Количество оборудования</div>
      </div>
      <div v-for="(item, index) in data" :key="index" class="table_header">
        <router-link
          :to="`/equipment?equipment_department_id=${item.department_id}`"
        >
          <div class="row_cell">{{ item.department_adress }}</div>
        </router-link>
        <div class="row_cell">{{ item.department_number }}</div>
        <div class="row_cell">{{ item.department_master }}</div>
        <div class="row_cell">{{ item.work_phone }}</div>
        <div class="row_cell">{{ item.equipment_quantity }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";

// @ is an alias to /src
import departmentData from "../models/departments";
import {
  //department_capfkid_request,
  headers,
} from "@/network/department_query";
export default {
  name: "DepartmentView",
  data() {
    return {
      data: departmentData,
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
  // methods: {
  //   create_card() {
  //     let a = {
  //       "equipment_number": "spir123",
  //         "factory_number": "21321312",
  //         "delivery_date": "20.01.2021",
  //         "depreciation_period": "160",
  //         "equipment_type": "Терминал",
  //         "equipment_department_id": 1,
  //         "price": "1000",
  //     }
      
  //     console.log("qwewqewqeq");
  //     fetch("http://localhost/api/v1/equipment/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(a)
  //     });
  //   },
  //   apply() {
  //     console.log(1);
  //   },
  // },
};
</script>

<style scoped>
.test {
  width: 200px;
  height: 200px;
  background-color: red;
}
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 0px solid #000;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background-color: #260101;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;
}
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
  padding-top: 10px;
}
.table_header {
  display: flex;

  justify-content: space-between;
}
.table_header:not(:last-child) {
  margin-bottom: 21px;
}
.row_cell {
  width: 300px;
  text-align: start;
  color: white;
  font-weight: semi-bold;
}
.row {
  font-size: 24px;
  font-weight: bold;
  width: 300px;
  text-align: start;
}
</style>
