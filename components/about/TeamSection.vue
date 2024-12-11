<template>
  <div ref="teamSection" class="team-section"
    @mouseenter="enableScroll"
    @mouseleave="disableScroll"
  >
    <div ref="teamSlider" class="swiper-container"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @mousemove="handleMouseMove"
    >
      <div class="swiper-wrapper">
        <div v-for="member in imageList" :key="member.id" class="swiper-slide">
          <TeamBlock
            class="team-section__team-block"
            :member="member"
            :image-list="imageList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Mousewheel } from 'swiper'
import TeamBlock from '~/components/about/TeamBlock.vue'

Swiper.use([Mousewheel])

export default {
  components: { TeamBlock },
  props: {
    team: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      slider: null,
      lastScrollTop: 0,
      scrollTimeout: null,
      isScrollEnabled: false,
      isMouseInsideContainer: false,
      imageList: [
        {
          id: 0,
          img: require('~/assets/images/about/persion-one.png'),
          alt: 'Persion-One',
          title: 'Hayk Kazaryan',
          position: 'Partner',
        },
        {
          id: 1,
          img: require('~/assets/images/about/persion-two.png'),
          alt: 'Persion-Two',
          title: 'Boris Avetisov',
          position: 'Partner',
        },
        {
          id: 2,
          title: 'Konstantin Tsoy',
          position: 'Financial Director',
        },
        {
          id: 3,
          title: 'Mikayel Sargsyan',
          position: 'Financial Controller',
        },
        {
          id: 4,
          title: 'Levon Kharatyan',
          position: 'Investment Manager',
        },
        {
          id: 5,
          title: 'Lilit Sargsyan',
          position: 'Head of Legal',
        },
        {
          id: 6,
          title: 'Ekaterina Rytikova',
          position: 'Head of Marketing',
        },
        {
          id: 7,
          title: 'Ani Dilakyan',
          position: 'Project Manager',
        },
        {
          id: 8,
          title: 'Vladimir Khojabekyan',
          position: 'Project Manager',
        },
      ],
    }
  },
  mounted() {
    this.initSlider()
    window.addEventListener('resize', this.checkSider)
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.destroySlider()
    window.removeEventListener('resize', this.checkSider)
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    initSlider() {
      if (this.imageList && this.imageList.length > 0) {
        if (!this.slider) {
          this.slider = new Swiper(this.$refs.teamSlider, {
            slidesPerView: window.innerWidth > 1000 ? 2 : 1,
            freeMode: true,
            mousewheel: {
              forceToAxis: false,
              sensitivity: 0.3,
              releaseOnEdges: false,
            },
            speed: 5000,
            loop: false,
            loopFillGroupWithBlank: true,
          })
        }
      }
    },

    destroySlider() {
      if (this.slider) {
        this.slider.destroy()
        this.slider = null
      }
    },

    checkSlider() {
      if (window.innerWidth > 600) {
        this.initSlider()
      } else {
        this.destroySlider()
      }
    },

    enableScroll() {
      this.isScrollEnabled = true 
    },
    disableScroll() {
      this.isScrollEnabled = false
    },

    handleMouseEnter() {
      this.isMouseInsideContainer = true;
    },

    handleMouseLeave() {
      this.isMouseInsideContainer = false;
    },

    handleScroll() {

      if (!this.isMouseInsideContainer) return;

      const st = window.pageYOffset || document.documentElement.scrollTop

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout)
      }

      if (st > this.lastScrollTop) {
        this.slider.slideNext()
      } else {
        this.slider.slidePrev()
      }

      this.scrollTimeout = setTimeout(() => {
        this.slider.autoplay.stop()
      }, 10)

      this.lastScrollTop = st <= 0 ? 0 : st
    },

    handleMouseMove() {
      if (this.mouseMoveTimeout) {
        clearTimeout(this.mouseMoveTimeout)
      }

      if (this.slider && this.slider.autoplay) {
        this.slider.autoplay.start()
      }

      this.mouseMoveTimeout = setTimeout(() => {
        if (this.slider && this.slider.autoplay) {
          this.slider.autoplay.stop()
        }
      }, 10)
    },

    // handleMouseLeave() {
    //   this.slider.autoplay.stop()
    // }
  },
}
</script>

<style lang="scss" scoped>
.team-section {
  min-height: 865px;
  height: 100%;
  background-color: $dark-bg;
  color: #fff;
  display: flex;

  .swiper-container {
    width: 100%;
    will-change: transform;
    transition: transform 0.3s ease;
  }

  .swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;
  }
}

@include mobile {
  .team-section {
    .swiper-wrapper {
      overflow: auto;

      .swiper-slide {
        width: 95%;
      }
    }
  }
}
</style>
