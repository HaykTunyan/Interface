<template>
  <div class="hotel-slider">
    <div ref="hotel-slider" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="item in projects"
          :key="item.id"
          class="swiper-slide"
          :style="`--bg-image: url(${item.pictures && item.pictures[0] && item.pictures[0].src || ''})`"
        >
          <a
            :href="localePath(`/projects/${item.url || item.id}`)"
            class="hotel-card"
            @click.prevent="routerPush(localePath(`/projects/${item.url || item.id}`), item.id)"
            @mouseenter="hoveredSlide = item.id"
          >
            <div class="hotel-card__top">
              <div class="hotel-card__desc">{{ $getText(item.subTitleTranslation) }}</div>
              <div class="hotel-card__name">{{ $getText(item.titleTranslation) }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="hotel-slider__imgs">
      <div class="hotel-slider__imgs-wrapper">
        <div v-for="item in projects" :key="item.id" class="hotel-slider__img" :class="{active: hoveredSlide === item.id}">
          <img v-if="item.pictures && item.pictures.length" :src="item.pictures[0].src" :alt="item.pictures[0].title">
        </div>
      </div>
    </div>

    <button ref="hotel-prev" class="slider-btn prev">
      <img src="~/assets/images/icons/arrow-left.svg" alt="Arrow-Left" />
    </button>
    <button ref="hotel-next" class="slider-btn next">
      <img src="~/assets/images/icons/arrow-right.svg" alt="Arrow-Next" />
    </button>
  </div>
</template>

<script>
import { Swiper, Navigation } from 'swiper'

Swiper.use([Navigation])

export default {
  props: {
    projects: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      slider: null,
      hoveredSlide: 0,
      clickedSlide: null,
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs['hotel-slider'], {
      slidesPerView: 1,
      navigation: {
        prevEl: this.$refs['hotel-prev'],
        nextEl: this.$refs['hotel-next'],
      },
      breakpoints: {
        521: {
          slidesPerView: 4,
        },
      },
    })
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
    }
  },
  methods: {
    routerPush(url, id) {
      if (window.innerWidth <= 520) {
        if (this.clickedSlide === id) {
          this.$router.push(url)
        } else {
          this.clickedSlide = id
        }
      } else {
        this.$router.push(url)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.hotel-slider {
  background-color: $dark-bg;
  color: #fff;
  min-height: calc(95vh - 100px);
  overflow: hidden;
  position: relative;

  &__imgs {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    overflow: hidden;

    &-wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(#000, .4);
      }
    }
  }

  .swiper:hover + .hotel-slider__imgs {
    .hotel-slider__img img {
      filter: grayscale(0);
    }
  }

  .swiper:hover .hotel-card {
    &:before {
      opacity: 0;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: .8s all;

    &.active {
      opacity: 1;
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
      transition: 0.5s filter;
    }
  }
}

.slider-btn {
  position: absolute;
  bottom: 34rem;
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

.hotel-card {
  box-shadow: 0.5px 0 #fff;
  padding: 43rem 0;
  min-height: calc(95vh - 100px);
  display: block;
  color: #fff;
  text-decoration: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--bg-image);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: .8s all;
    filter: grayscale(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(#000, .4);
  }

  &__top {
    padding: 23rem 25rem;
    transition: .2s all;
    position: relative;
    z-index: 1;
  }

  &__desc {
    font-size: 16rem;
    margin-bottom: 10rem;
  }

  &__name {
    font-size: 45rem;
    font-weight: 500;
  }

  &:hover &__top {
    background-color: $dark-bg;
  }
}

.swiper-slide:last-child .hotel-card {
  box-shadow: none;
}

@include mobile {
  .hotel-card {
    position: relative;
    &__desc {
      font-size: 12px;
      margin-bottom: 10px;
    }

    &__name {
      font-size: 36px;
    }

    &__top {
      z-index: 2;
      position: relative;
    }

    background-image: var(--bg-image);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(1);
    transition: .2s filter;

    &:hover {
      filter: grayscale(0);
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(#000, .4);
    }

    &:before {
      display: none;
    }
  }

  .slider-btn {
    width: 62px;
    height: 62px;
  }
}
</style>
