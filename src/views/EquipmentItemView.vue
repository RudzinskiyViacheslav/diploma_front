<template>
  <div class="equipment_item_view">
    <h1>LPLPPLLP</h1>
    <!-- <div class="table">
      <div class="table-header">
        <div class="table-header__name">
          Производственная карточка (оборудование)
        </div>
        <div class="table-header__search">
          <input type="text" />
        </div>
      </div>
      <div class="table_header">
        <div class="row">Адрес участкаwqerewqr</div>
        <div class="row">Номер участкаwqerewqr</div>
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
    </div> -->
  </div>
</template>

<script>
import equipmentItemData from "@/models/equipmentitem";
import { headers } from "@/network/equipment_item_query";
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
