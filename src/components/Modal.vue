<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <p name="header">
              {{ user }}
            </p>
            <b-button
              variant="outline-primary"
              class="modal-default-button"
              @click="$emit('close')"
            >закрыть</b-button>
          </div>
          <div class="modal-body">
            <b-form-input v-model="contact.name" placeholder="имя" name="name">
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              v-model="contact.surname"
              placeholder="фамилия"
              name="surname"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              v-model="contact.patronymic"
              placeholder="отчество"
              name="patronymic"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              v-model="contact.phoneNumber"
              placeholder="номер тел."
              name="phoneNumber"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              v-model="contact.email"
              placeholder="почта"
              name="mail"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              v-model="contact.password"
              placeholder="пароль"
              name="password"
            >
            </b-form-input>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <b-button
                
                class="modal-default-button"
                @click="this.get_user"
              >
                Обновить
              </b-button>
              <!--@click="$emit('close')"-->
              <b-button
                variant="danger"
                class="modal-default-button"
                @click="del_user"
              >
                Удалить пользователя
              </b-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";

export default {
  name: "Modal",
  props: {
    user: {
      type: Number,
    },
  },
  data() {
    return {
      contact: null,
      result_user: null,
      error: null,
    };
  },
  methods: {
    async get_user() {
      try {
        this.contact = (
          await AuthentificationService.user_get({ id: this.user })
        ).data;
      } catch (error) {
        console.log("Не получилось загрузить данные пользователя c сервера");
        this.error = error.response.data.error;
      }
    },
    async del_user() {
      try {
        var state = this.pressed("Вы действительно хотите удалить?");
        if (state) {
          this.$emit("close");
          this.$emit('some-event')
          //await AuthentificationService.user_delete({ id: this.user });
        }
      } catch (error) {
        console.log("При удалении пользователя произошла  ошибка");
      }
    },
  },
  async mounted() {
    this.get_user();
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
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
  width: 500px;
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