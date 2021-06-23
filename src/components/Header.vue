<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Contacts++</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Пользователь</em>
              </template>
              <b-dropdown-item
                @click="navigateTo({ name: 'register' })"
                href="#"
                >Создать контакт</b-dropdown-item
              >
              <b-dropdown-item
                v-if="$store.state.isUserLoggedIn"
                flat
                dark
                @click="logout()"
                href="#"
                >Выход</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item @click="navigateTo({ name: 'News' })" href="#"
              >Новости</b-nav-item
            >
            <b-nav-item @click="navigateTo({ name: 'contacts' })" href="#"
              >Список контактов</b-nav-item
            >
            <b-nav-item href="#" disabled>Карта производства</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!---
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item @click="navigateTo({name:'News'})" href="#">Новости</b-nav-item>
        <b-nav-item @click="navigateTo({name:'contacts'})" href="#">Контакты</b-nav-item>
        <b-nav-item v-if="$store.state.isUserLoggedIn" flat dark @click="logout()" href="#">Выход</b-nav-item>
      </b-navbar-nav>
    </b-navbar>---->
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