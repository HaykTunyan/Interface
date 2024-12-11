<template>
  <div class="app-modal" :class="{ 'app-modal--active': value }">
    <button class="app-modal__btn" @click="$emit('input', false)">
      <img src="~/assets/images/icons/close.svg" alt="X" />
    </button>
    <div ref="modal-inner" class="app-modal__wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (process.client)
          if (val) {
            document.body.classList.add('no-scroll')
          } else {
            document.body.classList.remove('no-scroll')
            if (this.$refs['modal-inner'])
              this.$refs['modal-inner'].scrollTop = 0
          }
      },
    },
  },
  beforeDestroy() {
    document.body.classList.remove('no-scroll')
  },
}
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 999;
  transition: transform 0.4s;
  transform: translateY(100%);

  &--active {
    transform: translateY(0);
  }

  &__wrapper {
    background: $primary-beige;
    width: 100%;
    overflow: auto;
    font-size: 40rem;
    position: relative;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 70rem;
    height: 70rem;
    margin-bottom: 16rem;
    box-shadow: 0 0 0 0 #fff;
    transition: 0.2s all;
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 25rem;
    top: 25rem;
    opacity: 0.5;
    z-index: 2;

    img {
      width: calc(100% + 2rem);
      height: calc(100% + 2rem);
    }

    &:hover,
    &:focus {
      opacity: 0.8;
      outline: none;
      box-shadow: 0 0 0 5rem #fff;
    }
  }
}
</style>
