<template>
  <input
    ref="field"
    type="email"
    required
    placeholder="Enter your email"
    @input="changeFontSize"
  />
</template>

<script>
export default {
  methods: {
    changeFontSize() {
      const myInput = this.$refs.field
      if (this.isOverflown(myInput)) {
        let currentFontSize = 80
        while (this.isOverflown(myInput)) {
          currentFontSize--
          myInput.style.fontSize = currentFontSize + 'rem'
        }
      } else {
        let currentFontSize = 80
        myInput.style.fontSize = currentFontSize + 'rem'
        while (this.isOverflown(myInput)) {
          currentFontSize--
          myInput.style.fontSize = currentFontSize + 'rem'
        }
      }
      // console.log(myInput.value)
      this.$emit('change', myInput.value)
    },

    isOverflown(element) {
      return element.scrollWidth > element.clientWidth
    },
  },
}
</script>

<style lang="scss" scoped>
input {
  background: transparent;
  border: none;
  font-size: 80rem;
  font-weight: normal;
  font-family: $default-font;
  color: $primary-beige;
  line-height: 1;
  height: 96rem;

  &::placeholder {
    // color: rgba($primary-beige, 0.4);
    color: rgba($secondary-gray, 0.4);

    transition: 0.2s color;
  }

  &:hover,
  &:focus {
    outline: none;
    &::placeholder {
      color: rgba($primary-beige, 0.6);
    }
  }
}
</style>
