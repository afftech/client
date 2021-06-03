<template>
    <div>
    <div v-for="contact in contacts" :key="contact.id">
        {{contact.id}}
        {{contact.surname}}
        {{contact.name}}
        {{contact.patronymic}}
        {{contact.phoneNumber}}
        {{contact.email}}
    </div>
    </div>

</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      contacts: null,
    };
  },
  async mounted(){
      this.contacts = (await AuthentificationService.get_all_contacts()).data
      console.log('songs',this.contacts)
  }
};
</script>