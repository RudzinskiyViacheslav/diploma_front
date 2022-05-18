<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.svg" /> -->
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">Точки ЦАПФК</div>
        <div class="table-header search-form">
          
          <div class="add-form-card">
          <input type="text" placeholder="Поиск" id="search" />
          </div>

          <div id="search_button">
          <div class="btn" @click="search_capfk">
            Найти
          </div>
          </div>

          <div id="usual_button">
          <div class="btn" @click="usual_capfk">
            Обычный вид ЦАПФК
          </div>
          </div>
          
          <div id="sort_button">
          <div class="btn" @click="sort_by_quantity">
            Отсортировать ЦАПФК по количеству ПУ
          </div>
          </div>
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
// alert(document.cookie.logincookie);
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
  methods: {
    sort_by_quantity(){
      fetch(`http://localhost/api/v1/capfk_sort`, {
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
    usual_capfk(){
      fetch(`http://localhost/api/v1/capfk `, {
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
    search_capfk() {
      let a = {
        name: document.getElementById("search").value,
      };

      if (a.name !== ""){
        console.log(a.name);
        fetch("http://localhost/api/v1/capfk_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(a),
      }).then((result) =>
        console.log(
          result.json().then((data) => {
            if (result.status == 404){
              alert(data);
            }
            else{
            this.data = data;}
          })
        )
      )
      
      
      
      };
    document.getElementById("search").value = "";
  },
},
}
</script>

<style scoped>
.search_form {
  margin-right: 30px;
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
.search-form input {
  margin-right: 5px;
  width: 300px;
  background-color: #260101;
  color: #fff;
  font-size: 14px;
  height: 46px;
  border: 0px solid #000;
  border-radius: 50px;
  text-align: center;
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
  margin-right: 12px;
  margin-left: 12px;
}
.table-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.table-header__name {
  color: white;
  font-weight: semi-bold;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
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
