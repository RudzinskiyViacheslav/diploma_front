<template>
  <div class="equipment_item_view">
    {{ data }}
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">
          Производственная карточка № {{ data[0].equipment_number }}
        </div>
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
        <div class="row_cell">№ {{ item.equipment_number }}</div>
        <div class="row_cell">№ {{ item.factory_number }}</div>
        <div class="row_cell">{{ item.delivery_date }}</div>
        <div class="row_cell">{{ item.depreciation_period }} дней</div>
        <div class="row_cell">{{ item.equipment_type }}</div>
        <div class="row_cell">{{ item.price }} рублей</div>
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
    fetch(`http://localhost/api/v1/equipment?equipment_id=${1}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
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
