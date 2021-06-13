<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item @click="navigateTo({name:'News'})" href="#">Новости</b-nav-item>
        <b-nav-item @click="navigateTo({name:'contacts'})" href="#">Контакты</b-nav-item>
        <b-nav-item v-if="$store.state.isUserLoggedIn" flat dark @click="logout()" href="#">Выход</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>

export default {
  
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    },
  },
  setup() {},
};
</script>
<style>

</style>