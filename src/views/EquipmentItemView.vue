<template>
  <div class="equipment_item_view">
    <!-- {{ data }} -->
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">
          Производственная карточка № {{ data[0].equipment_number }}
        </div>
        <!-- <div id="create_card_button">
          <div class="btn" @click="update_card">
            Обновить производственную карточку
          </div>
        </div> -->
      </div>
      <div class="table_header">
        <div class="row">Номер оборудования в системе</div>
        <div class="row">Серийный номер</div>
        <div class="row">Дата поставки</div>
        <div class="row">Амортизация</div>
        <div class="row">Тип оборудования</div>
        <div class="row">Стоимость</div>
      </div>
      <div v-for="(item, index) in data" :key="index" class="table_header">
        <div class="row_cell">№ 
          <input type="text" v-bind:value='item.equipment_number' id="equipment_number">
        </div>
        <div class="row_cell">№ 
          <input type="text" v-bind:value='item.factory_number' id="factory_number">></div>
        <div class="row_cell">
          <input type="text" v-bind:value='item.delivery_date' id="delivery_date"></div>
        <div class="row_cell">
          <input type="text" v-bind:value='item.depreciation_period' id="depreciation_period"> дней</div>
        <div class="row_cell">
          <input type="text" v-bind:value='item.equipment_type' id="equipment_type"></div>
        <div class="row_cell">
          <input type="text" v-bind:value='item.price' id="price"> рублей</div>
<div class="row_cell">
        <div id="create_card_button">
          <div class="btn" @click="update_card(item.equipment_id)">
            Обновить производственную карточку
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import equipmentItemData from "@/models/equipmentitem";
// import { headers } from "@/network/equipment_item_query";
export default {
  name: "EquipmentItemView",
  data() {
    return {
      data: equipmentItemData,
    };
  },
  mounted() {
    fetch(
      `http://localhost/api/v1/equipment?equipment_id=${this.$route.query.equipment_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
  methods: {
    update_card(id) {
      let a = {
        "equipment_id": id,
        "equipment_number": document.getElementById("equipment_number").value,
          "factory_number": document.getElementById("factory_number").value,
          "delivery_date": document.getElementById("delivery_date").value,
          "depreciation_period": document.getElementById("depreciation_period").value,
          "equipment_type": document.getElementById("equipment_type").value,
          "equipment_department_id": this.$route.query.equipment_department_id,
          "price": document.getElementById("price").value,
      }
      
      console.log("qwewqewqeq");
      fetch("http://localhost/api/v1/equipment/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(a)
      }).then(function(response) {
        document.location.reload(); 
      });
    },
  }
};
</script>

<style scoped>
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
