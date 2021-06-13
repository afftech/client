<template>
  <div>
    <Header></Header>
    <div class="container">
       <br />
      <br />
      <br />
      <br />
      <h1 class="text-center">Contacts++</h1>
      <br />
      <br />
      <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-8" v-for="contact in contacts" :key="contact.id">
          <div class="contact">
                      <img
            align="center"
            class="img-fluid"
            src="https://cdn.inflearn.com/public/files/posts/fb5e919f-9738-4001-a99c-5110a8ef7ebe/Vuejs_img4.jpg"
          />
          <figcaption><h5>Инженер Технолог</h5></figcaption>
          <div>
          <div class="col">{{ contact.surname }}</div>
          <div class="col">{{ contact.name }}</div>
          <div class="col">{{ contact.patronymic }}</div>
          <div class="col">{{ contact.phoneNumber }}</div>
          <div class="col">{{ contact.email }}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import AuthentificationService from "@/services/AuthentificationService";
export default {
  components:{'Header': Header},
  data() {
    return {
      contacts: null,
    };
  },
  async mounted() {
    this.contacts = (await AuthentificationService.get_all_contacts()).data;
    console.log("songs", this.contacts);
  },
};
</script>
<style scoped>
.contact{
    background: rgb(215, 246, 247); /* Цвет фона */
    outline: 2px solid #000; /* Чёрная рамка */
    border: 4px solid #fff; /* Белая рамка */
    border-radius: 10px; /* Радиус скругления */
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
</style>