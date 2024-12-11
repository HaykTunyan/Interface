import Vue from 'vue'

Vue.mixin({
  methods: {
    $getText(textObj) {
      return (
        textObj?.translations?.find(
          (trans) => trans.language.prefix === this.$i18n.locale
        )?.translation ||
        textObj?.content ||
        ''
      )
    },
  },
})
