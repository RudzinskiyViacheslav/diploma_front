<template>
  <div class="equipment">
    <!-- <h1>{{ data }}</h1> -->
    <div class="table">
      <div class="table-header">
        <div class="table-header__name">
          Оборудование производственного участка №
          {{ this.$route.query.equipment_department_id }}
        </div>

        <div id="create_card_button">

          <!-- <div class="btn">
            <router-link :to="`/department?capfk_id=${data[0].capfk_id}`">
        Назад
        </router-link>
          </div> -->

          <div class="btn" @click="report">
            Выгрузить отчет
          </div>

          <div class="btn" @click="usual_equip">
            Обычный вид оборудования
          </div>

          <div class="btn" @click="sort_by_amort">
            Отсортировать по окончанию амортизации
          </div>

          <!-- <div class="btn" @click="sort_by_price">
            Отсортировать по стоимости
          </div> -->
        </div>

      </div>
      <div class="table-hedaer table-header_info">
        *Чтобы добавить новую производственную карточку для данного
        производственного участка, заполните формы и нажмите кнопку "Создать
        производственную карточку"
      </div>
      <div class="table-header add-form-card">
        <input type="text" placeholder="Номер карточки" id="equipment_number" />
        <input type="text" placeholder="Серийный номер" id="factory_number" />
        <input type="date" placeholder="Дата поставки" id="delivery_date" />
        <input
          type="number"
          placeholder="Амортизация"
          min="0"
          id="depreciation_period"
        />
        <input type="text" placeholder="Тип оборудования" id="equipment_type" />
        <input type="number" placeholder="Цена" min="0" id="price" />
        <div id="create_card_button">
          <div class="btn" @click="create_card">
            Создать производственную карточку
          </div>
        </div>
      </div>
      <div class="table_header">
        <div class="row">Номер оборудования в системе</div>
        <div class="row">Серийный номер</div>
        <div class="row">Дата поставки</div>
        <div class="row">Амортизация</div>
        <div class="row">Крайняя дата конца амортизации</div>
        <div class="row">До конца амортизации осталось</div>
        <div class="row">Тип оборудования</div>
        <div class="row">Стоимость</div>
        <div class="date">Текущая дата: {{ new Date().toLocaleDateString() }}</div>
      </div>
      <div v-for="(item, index) in data" :key="index" class="table_header">
        <router-link :to="`/equipmentitem?equipment_id=${item.equipment_id}`">
          <div class="row_cell">№ {{ item.equipment_number }}</div>
        </router-link>
        <div class="row_cell">№ {{ item.factory_number }}</div>
        <div class="row_cell">{{ item.delivery_date }}</div>
        <div class="row_cell">{{ item.depreciation_period }} дней</div>
        <div class="row_cell">{{ item.depreciation_end }}</div>

        <div class="row_cell" style="color: #8B0000; font-weight: bold"
          v-if="(Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24)) <= 0">
          {{ Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24) }} дней *Срочная замена</div>
          
        <div class="row_cell" style="color: #FF8C00; font-weight: bold"
          v-else-if="(Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24)) <= 30">
          {{ Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24) }} дней *Стоит заменить</div>

          <div class="row_cell" style="color: #00FF7F; font-weight: bold"
          v-else-if="(Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24)) <= 120">
          {{ Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24) }} дней *Замена еще не скоро</div>

          <div class="row_cell" style="color: #00008B; font-weight: bold"
          v-else-if="(Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24)) > 120">
          {{ Math.trunc((new Date(item.depreciation_end) - nowDate)/1000/60/60/24) }} дней *Полностью в норме</div>
        
        
        <div class="row_cell">{{ item.equipment_type }}</div>
        <div class="row_cell">{{ item.price }} рублей</div>
        <div class="row_cell">
          <div
            id-card="{{ item.equipment_id }}"
            class="btn"
            @click="delete_card(item.equipment_id)"
          >
            Удалить карточку
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import equipmentData from "@/models/equipment";
// import { headers } from "@/network/equipment_item_query";
export default {
  name: "EquipmentView",
  data() {
    return {
      data: equipmentData,
      nowDate: new Date(),
    };
  },
  mounted() {
    fetch(
      `http://localhost/api/v1/equipment?equipment_department_id=${this.$route.query.equipment_department_id}`,
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
    sort_by_price(){

    },
    sort_by_amort() {
      fetch(
      `http://localhost/api/v1/equipment_sort_amort?equipment_department_id=${this.$route.query.equipment_department_id}`,
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
            // let a = document.createElement("a");
            // let file = new Blob([JSON.stringify(data)], {type: 'application/json'});
            // a.href = URL.createObjectURL(file);
            // a.download = "example.txt";
            // a.click();
          })
        )
      )
      .catch((error) => console.log(error));
    },
    report() {
      let a = document.createElement("a");
      let otchet = "";
      let file = new Blob([JSON.stringify(this.data)], {type: 'application/json'});
      a.href = URL.createObjectURL(file);
      a.download = "report.json";
      a.click();
    },
    usual_equip() {
      fetch(
      `http://localhost/api/v1/equipment?equipment_department_id=${this.$route.query.equipment_department_id}`,
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
    create_card() {
      let a = {
        equipment_number: document.getElementById("equipment_number").value,
        factory_number: document.getElementById("factory_number").value,
        delivery_date: document.getElementById("delivery_date").value,
        depreciation_period: document.getElementById("depreciation_period")
          .value,
        equipment_type: document.getElementById("equipment_type").value,
        equipment_department_id: this.$route.query.equipment_department_id,
        price: document.getElementById("price").value,
      };
      if (a.equipment_number == "" ||
          a.factory_number == "" ||
          a.delivery_date == "" ||
          a.depreciation_period == "" ||
          a.equipment_type == "" ||
          a.price == "")
          {alert('Для создания производственной карточки все поля должны быть заполнены');
          } else {

      fetch("http://localhost/api/v1/equipment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(a),
      })
      .then(function (response) {
        document.location.reload();
      })};
    },
    delete_card(id) {
      let a = {
        equipment_id: id,
      };

      fetch("http://localhost/api/v1/equipment/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(a),
      })
      .then(function (response) {
        document.location.reload();
      });
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 20px;
  font-weight: bold;
  width: 250px;
  text-align: start;
}
#delete_id_card {
  display: none;
}
.add-form-card {
  display: flex;
  width: 100%;
}

.add-form-card input {
  margin-right: 5px;
  width: 200px;
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
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 0px 0px 0;
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
.table {
  background: #594036;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px 20px;
  font-family: Inter;
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
}
.table-header_info {
  color: #fff;
  font-weight: semi-bold;
  font-size: 20px;
  text-align: left;
  margin-bottom: 40px;
}
.table_header {
  display: flex;
  justify-content: space-between;
}
.table_header:not(:last-child) {
  margin-bottom: 21px;
}
.row_cell {
  width:200px;
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
