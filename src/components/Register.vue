<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <p name="header">Введите данные нового пользователя</p>
            <b-button
              variant="outline-primary"
              class="modal-default-button"
              @click="$emit('close')"
              >закрыть</b-button
            >
          </div>

          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.surname"
              placeholder="фамилия"
              name="surname"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.name"
              placeholder="имя"
              name="name"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.patronymic"
              placeholder="отчество"
              name="patronymic"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.phoneNumber"
              placeholder="номер тел."
              name="phoneNumber"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.email"
              placeholder="почта"
              name="mail"
            >
            </b-form-input>
          </div>
          <div class="modal-body">
            <b-form-input
              size="sm"
              v-model="contact.password"
              placeholder="пароль"
              name="password"
            >
            </b-form-input>
          </div>
          <input
            type="file"
            id="file"
            ref="file"
            accept="image/*"
            v-on:change="handleFileUpload()"
          />

          <img
            class="img-send"
            v-bind:src="imagePreview"
            v-show="showPreview"
          />
          <div class="modal-footer">
            <div class="error" v-html="error" />
            <slot name="footer">
              <b-button
                size="sm"
                variant="danger"
                class="modal-default-button"
                @click="register()"
                >Создать пользователя</b-button
              >
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
  data() {
    return {
      contact: {
        email: null,
        id: null,
        name: null,
        password: null,
        patronymic: null,
        phoneNumber: null,
        surname: null,
        avatar: null,
      },

      error: null,
      //Работа с  изображением
      file: "",
      showPreview: false,
      imagePreview: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );
      this.avatar = this.file.name;
      if (this.file) {
        if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
          reader.readAsDataURL(this.file);
        }
      }
    },
    async register() {
      try {
        this.file = this.$refs.file.files[0];
        const response = await AuthentificationService.register({
          name: this.contact.name,
          surname: this.contact.surname,
          patronymic: this.contact.patronymic,
          phoneNumber: this.contact.phoneNumber,
          email: this.contact.email,
          avatar: this.avatar,
          password: this.contact.password,
        }).then(() => {
          this.$Alert.info({
            content:
              "Пользователь " +
              this.contact.surname +
              " " +
              this.contact.name +
              " создан",
          });
          this.$emit("close");
          this.send_img();
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    send_img() {
      try {
        let formData = new FormData();
        formData.append("image", this.file);

        console.log(formData.get(`image`));
        this.axios
          .post("http://193.169.63.222:8081/avatar", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            this.$emit("close");
          });
      } catch (error) {
        this.$Alert.info({
          content: "Проблема с загрузкой фото",
        });
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style scoped>
.img-send {
  max-height: 100px;
  max-width: 100px;
}
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