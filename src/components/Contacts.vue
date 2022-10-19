<template>
  <div class="background">
    <Header></Header>
    {{ this.find_max(nums) }}
    <template>
      <Modal
        v-if="showModal"
        @close="showModal = falce"
        v-bind:user="id"
        @some-event="show()"
      ></Modal>
    </template>
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
            <img align="center" class="img-fluid" src="@/assets/user.jpg" />
            <figcaption><h5>Ведущий Инженер</h5></figcaption>
            <div>
              <div class="col">{{ contact.surname }}</div>
              <div class="col">{{ contact.name }}</div>
              <div class="col">{{ contact.patronymic }}</div>
              <div class="col">{{ contact.phoneNumber }}</div>
              <div class="col">{{ contact.email }}</div>
              <div class="col">{{ contact.id }}</div>
              <b-button id="show-modal" @click="openDialog(contact.id)"
                >Редактировать</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ counter }}<br />

    <button v-on:click="incrementCounter">Increment Counter</button>
    <my-component v-on:increment-me="incrementCounter"></my-component>
    <my-alert ref="childComponent" v-bind:AlertUserDelete="id"></my-alert>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import AuthentificationService from "@/services/AuthentificationService";

export default {
  components: { Header: Header, Modal: Modal },
  data() {
    return {
      contacts: null,
      showModal: null,
      id: null,
      dismissSecs: 5,
      dismissCountDown: 0,
      counter: 0,
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
  async mounted() {
    this.users_get();
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    async users_get() {
      this.contacts = (await AuthentificationService.get_all_contacts()).data;
      console.log("contacts", this.contacts);
    },
    openDialog(id) {
      this.id = id;
      this.showModal = true; // явное управление диалогом через данные
    },
    show() {
      console.log("Ф-ия вызвана")
      //this.$refs.childComponent.showAlert()
    },


    find_max(nums) {
      let max_num = Number.NEGATIVE_INFINITY; // меньше, чем все остальные числа
      for (let num of nums) {
        if (num > max_num) {
          max_num = num;
        }
      }
      return max_num;
    },

    /*Load_cont() {
      //для загрузки актуального списка контактов
    },*/
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
