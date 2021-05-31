/* eslint-disable */
<template>
<v-layout column>
    <div v-if="$store.state.isUserLoggedIn">
    <h4>Добро пожаловать мой друг в список контактов! </h4>
    </div>
    <div v-if="!$store.state.isUserLoggedIn"
    flat
    dark
    class="white elevation-2">
        <h1>Log in</h1>
      <div class="pl-4 pr-4 pt-2 pb-2">
       <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
      />
      <br/>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
      />
  <div class="error" v-html="error"/>

  <!--v-if для выполнения действия восле входа -->
  <button
   @click="login">Log in</button>
    </div>
</div>
</v-layout>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {

  data () {
    return {
      email: '',
      password: '',
      error: 'null'
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
