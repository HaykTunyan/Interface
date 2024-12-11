<template>
  <div class="address-section">
    <div class="address-section__text">
      <div class="address-section__title">
        {{ $getText(project.addressTranslation) }}
      </div>
    </div>
    <div class="address-section__map">
      <app-map :coords="{ lat: project.latitude, lng: project.longitude }" />
    </div>
  </div>
</template>

<script>
import AppMap from '~/components/AppMap.vue'

export default {
  components: { AppMap },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.address-section {
  font-weight: 500;
  display: flex;
  align-items: stretch;
  height: 734rem;
  background: $dark-bg;
  color: #fff;

  &__text {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding: 56rem 25rem;
    font-size: 60rem;
  }

  &__map {
    width: 50%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

@include mobile {
  .address-section {
    overflow-x: auto;
    overflow-y: hidden;

    &__text {
      min-width: 95%;
    }

    &__map {
      min-width: 95%;
    }
  }
}
</style>
