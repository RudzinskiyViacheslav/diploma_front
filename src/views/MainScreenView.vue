<template>
    <div class="mainscreen">
        <div class="logo-style">
        <img alt="Vue logo" src="@/assets/logo.svg" />
        </div>
        <div class="table">
            <div class="table_header">
            Добро пожаловать в АС учета технологического оборудования ЖД агентств
            </div>
            <div class="table_header name">
            Чтобы продолжить работу, пожалуйста, авторизуйтесь
            </div>
            <div class="table_header login">
                Введите логин (почту)
            </div>
            <div class="table_header form-to-login">
            <input type="text" placeholder="Login" id="login_input" />
            </div>
            <div class="table_header password">
            Введите пароль
            </div>
            <div class="table_header form-to-login">
            <input type="text" placeholder="Password" id="password_input" />
            </div>
            <div class="btn" @click="login">
                Войти
            </div>
            <div class="table_header help">
            При возникновении проблем пишите по адресу <br><br>
            <i>monarch.help@rzd.ru</i>
            </div>

            
    
        </div>    
    </div>
</template>

<script>

export default {
    name: "MainScreenView",
    methods: {
        login() {
            let log = document.getElementById("login_input").value;
            let pass = document.getElementById("password_input").value;

            let login = {
                email: log,
                password: pass,
            };
            console.log(login)

            fetch("http://localhost/api/v1/login", {
                method: "POST",
                headers: {
                   "Content-Type": "application/json;charset=utf-8", 
                },
                body: JSON.stringify(login),
            }).then((result) => {
                console.log(result);
                if (result.status == 200) {
                    document.location.href = "http://localhost/capfk";
                } 
                else{
                    console.log(12312);
                    alert('Вы ввели неверный логин и/или пароль')};
        });
            console.log(112);
    },
},
};
// alert(document.cookie.logincookie);
</script>

<style scoped>
.help {
    font-size: 20px;
}
.table {
  background: #594036;
  opacity: 0.6;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 16px 54px;
  font-family: Inter;
  font-size: 30px;
  color: white;
  width: 500px;
  height: 720px;
  margin: auto;
  font-weight: semi-bold;
  font-family: Inter;
}
.table_header {
    margin-bottom: 50px;
}
.name {
    font-size: 20px;
    margin-bottom: 100px;
}
.login {
    opacity: 0.6;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
}
.password {
    opacity: 0.6;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
}
.form-to-login input {
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
.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0px;
  outline: none;
  border: 0px solid #000;
  border-radius: 50px;
  width: 350px;
  height: 46px;
  line-height: 46px;
  font-size: 20px;
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
  margin-bottom: 40px;
}
</style>
