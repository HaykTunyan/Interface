<template>
  <div class="address-section">
    <div class="address-section__text">
      <div class="address-section__title">
        <div class="address-title">
          Wa are based
        </div>
        <p class="addres-subtitle">
          2/9, Voskerichner Street,  <br /> Yerevan, Armenia, 0015
        </p>
        <!-- We are based in the heart of the historic Yerevan, 8 Nalbdanyan street, 0010, Armenia -->
        <img src="~/assets/images/icons/arrow.svg" alt="->" class="arrow-icon" />
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
.mb {
  display: none;
}

.address-section {
  display: flex;
  align-items: stretch;
  height: calc(95vh - 100px);
  background: $light-bg;
  color: #000;
  font-weight: 500;

  .arrow-icon {
    display: none;
  }

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

.address-title {
  color: #1A1A1A;
  font-size: 52rem;
  line-height: 52rem;
  font-weight: 400;
  margin-bottom: 32px;
}

.addres-subtitle {
  color: #1A1A1A;
  font-size: 42rem;
  line-height: 42rem;
  font-weight: 400;
}

@include mobile {
  .mb {
    display: inline;
  }
  .address-section {
    overflow-x: auto;
    overflow-y: hidden;

    .arrow-icon {
      display: inline-block;
      margin-left: auto;
      margin-top: 10rem;
      margin-bottom: 10rem;
    }

    &__text {
      min-width: 95%;
    }

    &__map {
      min-width: 95%;
    }

    &__title {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .address-title {
    font-size: 34px;
    margin-bottom: 12px;
  }

  .addres-subtitle {
    font-size: 24px;
  }
}
</style>
