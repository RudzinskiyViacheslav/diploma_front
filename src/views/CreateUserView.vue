<template>
  <div class="create_user">
    <div class="table">
      <div class="table-header">
      <div class="table-header__name">
        Для регистрации пользователя заполните поля ниже и нажмите 
        кнопку "Зарегистрировать"  
      </div>
      </div>

      <div class="table-header">
      <div class="table-header add-form-card">
        <input type="text" placeholder="Имя" id="first_name" />
        <input type="text" placeholder="Фамилия" id="last_name" />
        <input type="text" placeholder="Отчество" id="middle_name" />
        <input type="date" placeholder="Дата рождения" id="birth_date" />
      </div>
      </div>
        <div class="table-header">
        <div class="table-header add-form-card">
          <input type="text" placeholder="Адрес" id="adress" />
          <input type="text" placeholder="Мобильный иелефон" id="mobile_phone" />
          <input
            type="number"
            placeholder="Номер пропуска работника"
            min="0"
            id="employee_id"
          />
          <input type="text" placeholder="Паспорт" id="passport" />
        </div>
        </div>
        <div class="table-header">
        <div class="table-header add-form-card">
        <input type="text" placeholder="email" min="0" id="email" />
        <input type="text" placeholder="Пароль" min="0" id="password" />
        <input type="text" placeholder="Позиция" min="0" max="2" id="position" />
        <div id="create_card_button">
          <div class="btn" @click="create_card">
            Зарегистрировать
          </div>
        </div>
      </div>
      </div>

    
    
    </div>
    </div>
</template>

<script>
export default {
name: "CreateUser",
data(){
  return{};
},
methods: {
  create_card() {
    let a ={
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      middle_name: document.getElementById("middle_name").value,
      birth_date: document.getElementById("birth_date").value,
      adress: document.getElementById("adress").value,
      mobile_phone: document.getElementById("mobile_phone").value,
      employee_id: document.getElementById("employee_id").value,
      passport: document.getElementById("passport").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      position: document.getElementById("position").value,
    };
    if (
      a.first_name == "" ||
      a.last_name == "" ||
      a.middle_name == "" ||
      a.birth_date == "" ||
      a.adress == "" ||
      a.mobile_phone == "" ||
      a.employee_id == "" ||
      a.passport == "" ||
      a.email == "" ||
      a.password == "" ||
      a.position == "")
      {alert('Для регистрации юзера все поля должны быть заполнены');
      } else {
        fetch("http://localhost/api/v1/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(a),
      })
      .then(function (response) {
        alert("Пользователь "+a.first_name+" "+ a.last_name+" успешно зарегистрирован")
        document.location.reload();
      })
      }
  },
}
}
</script>

<style scoped>
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  /* margin: 0 15px 15px 0; */
  margin-right: 7px;
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
  width: 300px;
  font-weight: bold;
  font-size: 18px;
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
.table-header__name {
  color: white;
  font-weight: semi-bold;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.add-form-card {
  display: flex;
  width: 100%;
}

.add-form-card input {
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
.table-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
