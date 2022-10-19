<template>
  <div>
    <b-button id="show-modal" @click="showModal = true">Show Modal</b-button>
      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <b-form-input slot="header">custom header</b-form-input>
      </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: { Modal: Modal },
  data() {
    return {
      showModal: false
    };
  },
};
</script>