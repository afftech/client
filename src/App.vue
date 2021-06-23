<template>
  <div id="app">
    <div class="container" v-if="!$store.state.isUserLoggedIn">
      <div class="login">
        <h3 class="panel-title">Log in</h3>
        <v-layout flat dark class="white elevation-2" column>
          <div>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <b-form-input
                type="email"
                name="email"
                v-model="email"
                placeholder="email"
              />
              <br />
              <b-form-input
                type="password"
                name="password"
                v-model="password"
                placeholder="password"
              />
              <br />
              <div class="error" v-html="error" />
              <br />
              <!--v-if для выполнения действия восле входа -->
              <b-button @click="login" variant="primary">Log in</b-button>
            </div>
          </div>
        </v-layout>
      </div>
    </div>
    <router-view v-if="$store.state.isUserLoggedIn" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<!--<style>
Для всех вложенных страниц
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "null",
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style scoped>
.login{
        position:absolute;
        top:50%;
        left:50%;
  width: 600px;
      background: rgb(215, 246, 247); /* Цвет фона */
    outline: 2px solid #000; /* Чёрная рамка */
    border: 4px solid #fff; /* Белая рамка */
    border-radius: 10px; /* Радиус скругления */
margin:-200px 0 0 -150px;
 /* text-align: center;*/
}
/*header style*/


</style>
<style>
html{
  background: rgb(52, 57, 63); /* Цвет фона */
}
</style>