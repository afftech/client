<template>
  <v-layout column>
    <div class="white elevation-2">
      <h1>Register</h1>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form autocomplete="off">
          <input
            type="surname"
            name="surname"
            v-model="surname"
            placeholder="surname"
            autocomplete="surname"
          />
          <br />
          <input
            type="name"
            name="name"
            v-model="name"
            placeholder="name"
            autocomplete="name"
          />
          <br />
          <input
            type="patronymic"
            name="patronymic"
            v-model="patronymic"
            placeholder="patronymic"
            autocomplete="patronymic"
          />
          <br />
          <input
            type="phoneNumber"
            name="phoneNumber"
            v-model="phoneNumber"
            placeholder="phoneNumber"
            autocomplete="phoneNumber"
          />
          <br />
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
            autocomplete="new-password"
          />
        </form>
        <div class="error" v-html="error" />
        <button @click="register">Register</button>
      </div>
    </div>
  </v-layout>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      name: "",
      surname: "",
      patronymic: "",
      phoneNumber: "",
      email: "",
      password: "",
      error: "null",
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthentificationService.register({
          name: this.name,
          surname: this.surname,
          patronymic: this.patronymic,
          phoneNumber: this.phoneNumber,
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

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
.error {
color: red;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
--->