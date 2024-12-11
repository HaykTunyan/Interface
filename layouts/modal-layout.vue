<template>
  <div class="modal-layout">
    <modal-header class="modal-layout__header" />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import ModalHeader from '~/components/ModalHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  name: 'ModalLayout',
  components: { ModalHeader, AppFooter },
}
</script>

<style lang="scss" scoped>
.modal-layout {
  &__header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
}
</style>
