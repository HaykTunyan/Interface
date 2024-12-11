<template>
  <div ref="blog-slider" class="swiper-container blog-slider">
    <div class="swiper-wrapper">
      <div v-for="slide in pictures" :key="slide.id" class="swiper-slide">
        <img
          v-if="onlyImages"
          :src="slide.src"
          :alt="slide.title"
          class="blog-slide"
        />
        <app-media v-else :media="slide" class="blog-slide" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Mousewheel } from 'swiper'

import AppMedia from '~/components/AppMedia.vue'

Swiper.use([Mousewheel])

export default {
  components: {
    AppMedia,
  },
  props: {
    pictures: {
      type: Array,
      default() {
        return []
      },
    },
    onlyImages: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.slider = new Swiper(this.$refs['blog-slider'], {
      slidesPerView: this.pictures.length <= 1 ? 1 : 1.05,
      freeMode: true,
      mousewheel: {
        forceToAxis: true,
      },
      breakpoints: {
        521: {
          slidesPerView: this.pictures.length <= 1 ? 1 : 1.15,
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
.blog-slider {
  .swiper-slide {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95vh;

    .blog-slide {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  :hover {
   filter: none !important;
  }
}
</style>
