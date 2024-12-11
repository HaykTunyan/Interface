<template>
  <div class="default-layout" :class="layoutClass">
    <app-header class="default-layout__header" :not-white="notWhite" />
    <nuxt />
    <app-footer v-if="!noFooter" />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  name: 'Default',
  components: { AppHeader, AppFooter },
  computed: {
    layoutClass() {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.layoutClass
          : r.components.default.layoutClass
      })[0]
    },
    noFooter() {
      return (
        this.$route.matched.map((r) => {
          return r.components.default.options
            ? r.components.default.options.noFooter
            : r.components.default.noFooter
        })[0] || false
      )
    },
    notWhite() {
      return (
        this.$route.matched.map((r) => {
          return r.components.default.options
            ? r.components.default.options.notWhite
            : r.components.default.notWhite
        })[0] || false
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  $self: &;
  &__header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  &.mob-no-logo {
    #{$self}__header {
      @include mobile {
        &::v-deep .logo {
          display: none;
        }
      }
    }
  }

  &.mob-nav-black {
    #{$self}__header {
      @include mobile {
        &::v-deep ul {
          background: $dark-bg;
        }
      }
    }
  }
}
</style>
