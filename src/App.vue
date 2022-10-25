<template>
  <div id="app">
    <transition v-if="!$store.state.isUserLoggedIn" name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <p name="header">Авторизуйтесь:</p>
            </div>
            <div class="modal-body">
              <b-form-input
                size="sm"
                v-model="email"
                placeholder="почта"
                name="mail"
              >
              </b-form-input>
            </div>
            <div class="modal-body">
              <b-form-input
                size="sm"
                v-model="password"
                placeholder="пароль"
                name="password"
              >
              </b-form-input>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <b-button class="modal-default-button" @click="login">
                  Вход
                </b-button>
              </slot>
            </div>
            <div class="error" v-html="error" />
          </div>
        </div>
      </div>
    </transition>

    <router-view v-if="$store.state.isUserLoggedIn" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script>
import AuthentificationService from "@/services/AuthentificationService";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    ...mapActions(["setToken", "setEmail"]),
    async login() {
      try {
        const response = await AuthentificationService.login({
          email: this.email,
          password: this.password,
        });
        this.setToken(response.data.token);
        this.setEmail(response.data.email);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    mounted() {},
  },
  showModal() {
    this.$refs["my-modal"].show();
  },
  hideModal() {
    this.$refs["my-modal"].hide();
  },
  toggleModal() {
    // We pass the ID of the button that we want to return focus to
    // when the modal has hidden
    this.$refs["my-modal"].toggle("#toggle-btn");
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 800;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>