<template>
  <div class="background">
    <Header></Header>
    <template>
      <Modal
        v-if="showModal"
        @close="showModal = falce"
        v-bind:user="id"
      ></Modal>
    </template>
    <br />
    <br />
    <div class="container">
      <b-button
        variant="outline-primary"
        id="show-modal"
        @click="showReg = true"
        >Создать нового пользователя</b-button
      >
    </div>
    <div class="container">
      <br />
      <br />
      <h1 class="text-center">Contacts++</h1>
      <br />
      <br />
     
      <div class="row">
        <div
          class="col-lg-2 col-md-6 col-sm-8"
          v-for="contact in contacts"
          v-bind:key="contact.id"
        >
          <div class="contact">
            <img align="center" class="img-fluid" :src="piblic_link+contact.avatar">
          <!-- <figcaption><h5>Ведущий Инженер</h5></figcaption>-->
            <div>
              <div class="col">{{ contact.surname }}</div>
              <div class="col">{{ contact.name }}</div>
              <div class="col">{{ contact.patronymic }}</div>
              <div class="col">{{ contact.phoneNumber }}</div>
              <div class="col">{{ contact.email }}</div>
              <b-button id="show-modal" @click="openDialog(contact.id)"
                >Редактировать</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <template>
      <register v-if="showReg" @close="showReg = falce"></register>
    </template>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal"; //Модальное окно для изменения и удаления пользователя
import AuthentificationService from "@/services/AuthentificationService"; // Api для получения списка контактов
import Register from "./Register.vue"; // форма регистрации пользователей

export default {
  components: { Header: Header, Modal: Modal, Register: Register },
  data() {
    return {
      contacts: null,
      showModal: null,
      showReg: null,
      id: null,
      dismissSecs: 5,
      dismissCountDown: 0,
      counter: 0,
      nums: [1, 2, 3, 4, 5, 6],
      piblic_link: "http://193.169.63.222:8081/"
    };
  },
  mounted() {
    // зпуск асинхронного метода получения списк контактов
    this.users_get();
  },
  watch:{//обновление списка
  showReg(){
    this.users_get() 
  },
  showModal(){
    this.users_get() 
  }
  },
  methods: {
    update_users() {
      this.users_get();
    },
    async users_get() {
      //метод получения списка контактов из API
      this.contacts = (await AuthentificationService.get_all_contacts()).data;
      console.log("contacts", this.contacts);
    },
    openDialog(id) {
      this.id = id;
      this.showModal = true; // явное управление диалогом через данные
    },

    find_max(nums) {
      //можно удалить
      let max_num = Number.NEGATIVE_INFINITY; // меньше, чем все остальные числа
      for (let num of nums) {
        if (num > max_num) {
          max_num = num;
        }
      }
      return max_num;
    },
  },
};
</script>
<style scoped>
.contact {
  background: hsl(0deg 0% 100% / 50%);

  /* background: rgb(215, 246, 247); /* Цвет фона */
  /*outline: 2px solid #000; /* Чёрная рамка */
  border: 6px solid #fff; /* Белая рамка */
  border-radius: 15px; /* Радиус скругления */
  width: 600;
  /* text-align: center;*/
}

img {
  object-fit: cover;
  height: 150px;
  width: 160px;
  border-radius: 70px;
}

/*Стили для карточек*/
.about {
  margin: 2em 0;
  padding: 3em;
  position: relative;
}
.about h1 {
  color: #f97300;
  margin: 2em;
}
.about img {
  height: 200px;
  width: 200px;
  border-radius: 10%;
}
.about span {
  display: block;
  color: #888;
  position: absolute;
  left: 115px;
}
.about .desc {
  padding: 2em;
  border-left: 4px solid #10828c;
}
.about .desc h3 {
  color: #10828c;
}
.about .desc p {
  line-height: 2;
  color: #888;
}
.background {
  background: #e9ecef;
}
</style>
