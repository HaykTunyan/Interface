<template>
  <div class="address-section">
    <div class="address-section__text">
      <div class="address-section__title">
        Wa are based
      </div>
      <div style="margin-top: 32px;"></div>
      <div class="address-section__subtitle">
        2/9, Voskerichner Street,  <br /> Yerevan, Armenia, 0015
      </div>
    </div>
    <div class="address-section__map">
      <app-map :coords="{ lat: 40.173714, lng: 44.499943 }" />
    </div>
  </div>
</template>

<script>
import AppMap from '~/components/AppMap.vue'

export default {
  components: { AppMap },
}
</script>

<style lang="scss" scoped>
.address-section {
  display: flex;
  align-items: stretch;
  height: 95vh;
  background: $dark-bg;
  color: #fff;
  font-weight: 400;

  &__text {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 56rem 25rem;
  }

  &__title {
    font-size: 52rem;
    line-height: 52rem;
  }

  &__subtitle {
    font-size: 42rem;
    line-height: 42rem;
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
    flex-direction: column;
    height: auto;

    &__text {
      width: 100%;
      height: 90vh;
    }

    &__map {
      width: 100%;
      height: 90vh;
    }
  }
}
</style>
