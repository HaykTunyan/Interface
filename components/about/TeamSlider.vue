<template>
  <div class="team-slider">
    <div ref="team-wrapper" class="team-wrapper">
      <div class="swiper-wrapper">
        <div v-for="item in team" :key="item.id" class="team-block swiper-slide">
          <div class="team-block__img">
            <img
              v-if="item.file && item.file.location"
              :src="item.file.location"
              :alt="item.file.location"
            >
          </div>
          <div class="team-block__content">
            <div v-if="item.nameTranslation" class="team-block__name">{{ $getText(item.nameTranslation) }}</div>
            <div v-if="item.positionTranslation" class="team-block__position">{{ $getText(item.positionTranslation) }}</div>
          </div>
        </div>
      </div>
    </div>

    <button ref="team-prev" class="slider-btn prev">
      <img src="~/assets/images/icons/arrow-left.svg" alt="Arrow-Left" />
    </button>
    <button ref="team-next" class="slider-btn next">
      <img src="~/assets/images/icons/arrow-right.svg" alt="Arrow-Next" />
    </button>
  </div>
</template>

<script>
import { Swiper, Mousewheel, Navigation } from 'swiper'

Swiper.use([Mousewheel, Navigation])

export default {
  props: {
    team: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs['team-wrapper'], {
      slidesPerView: 1,
      freeMode: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        prevEl: this.$refs['team-prev'],
        nextEl: this.$refs['team-next'],
      },
      breakpoints: {
        521: {
          slidesPerView: 2.7,
        },
      },
    })
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
    }
  },
}
</script>

<style lang="scss" scoped>
.team-slider {
  background: $dark-bg;
  color: #fff;
  min-height: calc(95vh - 20px);
  overflow: hidden;
  position: relative;

  .slider-btn {
    position: absolute;
    bottom: 200rem;
    background: rgba(#fff, 0.14);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    transition: .2s background;
    z-index: 2;

    &.next {
      right: 34rem;
    }

    &.prev {
      left: 34rem;
    }

    &:hover {
      background: rgba(#fff, 0.3);
    }

    &.swiper-button-disabled {
      display: none;
    }
  }
}

.team-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

.team-block {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #fff;
  height: calc(95vh - 20px);

  &__content {
    padding: 42rem 40rem;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  &__name {
    font-size: 50rem;
    margin-bottom: 10rem;
    font-weight: 500;
    white-space: nowrap;
  }

  &__position {
    font-size: 30rem;
  }

  &__img {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-color: $dark-bg;

    img {
      width: 100%;
      height: auto;
      // object-fit: cover;
    }
  }
}

@include mobile {
  .team-slider {
    .slider-btn {
      width: 62px;
      height: 62px;
      bottom: 230rem;
    }
  }

  .team-block {
    border-right: none;
    &__img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__name {
      font-size: 30px;
      line-height: 30px;
    }

    &__position {
      font-size: 24px;
      line-height: 24px;
    }
  }
}
</style>
