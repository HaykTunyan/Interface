<template>
  <div class="project-slider">
    <div ref="project-slider" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="slide in projects" :key="slide.id" class="swiper-slide">
          {{ $getText(slide.titleTranslation) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'swiper'

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs['project-slider'], {
      slidesPerView: 'auto',
      centeredSlides: true,
      slideToClickedSlide: true,
    })

    this.slider.on('slideChange', (swiper) => {
      this.$emit('slide-change', swiper.activeIndex)
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
.project-slider {
  padding: 35rem 25rem;
  font-size: 40rem;
  color: $secondary-gray;
  overflow: hidden;

  .swiper-slide {
    transition: 0.2s all;
    padding: 0 28rem;
    cursor: pointer;
  }

  .swiper-wrapper {
    display: flex;
    align-items: flex-end;

    .swiper-slide {
      width: auto;

      &-active {
        font-size: $heading-font-size;
        color: $primary-beige;
      }
    }
  }
}

@include mobile {
  .project-slider {
    padding: 70rem 50rem;
  }
}
</style>
