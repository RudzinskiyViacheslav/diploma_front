<template>
  <nav id="navig">
    <div class="user-card">
      <div class="user-card-name" id="log"></div>
      <div class="user-card-exit" @click="exit">Выйти</div>
    </div>
    <div class="logo-style">
      <img alt="Vue logo" src="@/assets/logo.svg" />
    </div>
    <div class="logo-text">
      АС учета технологического оборудования ЖД Агенств
    </div>
    <div class="nav-buttons">
      <router-link to="/capfk">ЦАПФК</router-link>
      <router-link to="/about">О проекте</router-link>
      <router-link to="/createuser">Регистрация</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
// import parseCookie from "@/network/cookie_parser";
export default {
  name: "AppView",
  methods: {
    exit() {
      fetch("http://localhost/api/v1/exit", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then(function(response) {
        document.location.href = "http://localhost/";
      });
      // document.cookie = 'logincookie=';
      // document.location.href = "http://localhost/";
    }
  },
  data() { 
    fetch(`http://localhost/api/v1/getcurrentuser`,{
    method: "POST",
    headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
    }).then(function(response) {
      console.log(response.json().then((result) => {
        // console.log(result);
        document.getElementById("log").innerText = result;
        if (result == "") {
          document.getElementById("navig").style.display = "none";
          // document.location.href="http:/localhost/"; 
        }
      }));
    })
  }
};

// if (parseCookie(document.cookie)) {
//   console.log("Куки есть!");
// }
</script>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
}

body {
  background: #d9cdb8;
}

.nav-buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.logo-text {
  font-size: 24px;
  text-align: left;
  padding-left: 12px;
  color: #260101;
  width: 200px;
}

nav {
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-card {
  background: #553636;
  width: 240px;
  height: 120px;
  color: white;
  backdrop-filter: blur(20px);

  border-radius: 16px;
}

.user-card-name {
  padding: 12px;
  padding-bottom: 0px;
  width: 240px;
  text-align: left;
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 10px;
  margin-left: 8px;
}

.user-card-exit {
  margin-left: 12px;
  text-align: left;
  font-size: 18px;
  margin-left: 60px;
  color: #000;
  opacity: 0.6;
}

nav a {
  width: 150px;
  height: 15px;
  padding: 15px;
  background: linear-gradient(101.05deg, #a6653f -5.36%, #400601 83.78%);
  border-radius: 16px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 12px;
}

nav a.router-link-exact-active {
  box-shadow: 4px 4px 20px 0px rgba(38, 1, 1, 1);
}

nav a:hover {
  box-shadow: 4px 4px 20px 0px rgba(38, 1, 1, 1);
  animation: Dune 0.3s ease;
}

@keyframes Dune {
  0% {
    box-shadow: 1px 1px 0px 0px rgba(38, 1, 1, 0);
  }

  100% {
    box-shadow: 4px 4px 20px 0px rgba(38, 1, 1, 1);
  }
}

.logo-style {
  margin-left: 36px;
}
</style>
