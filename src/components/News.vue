<template>
  <div>
    <Header></Header>
    <div class="container">
      <h1 class="text-center">Новостная лента</h1>
      <div class="row">

      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

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