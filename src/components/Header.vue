<template>
  <div>
    <div>
      <b-navbar toggleable="lg"  type="dark" variant="dark">
        <b-navbar-brand href="#">Contacts++</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{GET_EMAIL}}</em>
              </template>
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
import {mapActions,mapGetters} from "vuex";
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
    },

  },
  computed:{//вычисляемое свойство для  получения данных из VUEX
    ...mapGetters([
      'GET_EMAIL'
    ])
  }

};
</script>
<style>
</style>