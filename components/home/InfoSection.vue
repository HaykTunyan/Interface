<template>
  <div class="info-section">
    <div ref="info-slider" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <info-block
            :title="title"
            :text-color="textColor"
            :background="background"
            no-btn
          />
        </div>
        <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
          <info-block
            :text-color="slide.color"
            :background="slide.background"
            :title="slide.title"
            :arrow="arrow"
            :no-btn="!arrow"
            :img="slide.image"
            @view="$emit('view', slide.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Mousewheel } from 'swiper'
import InfoBlock from '~/components/home/InfoBlock.vue'

Swiper.use([Mousewheel])

export default {
  components: { InfoBlock },
  props: {
    arrow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    slides: {
      type: Array,
      default() {
        return []
      },
    },
    background: {
      type: String,
      default: '#F5F5F5',
    },
    textColor: {
      type: String,
      default: '#000000',
    },
  },
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    this.checkSider()
    window.addEventListener('resize', this.checkSider)
  },
  beforeDestroy() {
    this.destroySlider()
    window.removeEventListener('resize', this.checkSider)
  },
  methods: {
    initSlider() {
      if (!this.slider) {
        this.slider = new Swiper(this.$refs['info-slider'], {
          slidesPerView: 1.5,
          freeMode: true,
          mousewheel: {
            forceToAxis: true,
          },
        })
      }
    },
    destroySlider() {
      if (this.slider) {
        this.slider.destroy()
        this.slider = null
      }
    },
    checkSider() {
      if (window.innerWidth > 520) {
        this.initSlider()
      } else {
        this.destroySlider()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.info-section {
  min-height: 95vh;
  background-color: $dark-bg;
  color: #FFFFFF;
  display: flex;

  .swiper-container {
    width: 100%;
  }
}

@include mobile {
  .info-section {
    .swiper-wrapper {
      overflow: auto;

      .swiper-slide {
        width: 95%;
      }
    }
  }
}
</style>
