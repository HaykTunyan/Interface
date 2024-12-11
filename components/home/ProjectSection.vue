<template>
  <div class="project-section">
    <div class="project-section__imgs">
      <div ref="project-slider" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="slide in projects" :key="slide.id" class="swiper-slide">
            <img
              v-lazy-load
              :data-src="
                (slide.pictures &&
                  slide.pictures[0] &&
                  slide.pictures[0].src) ||
                ''
              "
              :alt="
                (slide.pictures &&
                  slide.pictures[0] &&
                  slide.pictures[0].title) ||
                ''
              "
            />
          </div>
        </div>
      </div>
    </div>
    <nuxt-link
      v-if="projects[activeSlideIndex]"
      :to="
        localePath(
          `/projects/${
            projects[activeSlideIndex].url || projects[activeSlideIndex].id
          }`
        )
      "
      class="project-section__view"
    >
      <div class="view-icon">
        <img src="~/assets/images/icons/view.svg" alt="View" />
      </div>
      <span>View project</span>
    </nuxt-link>
    <div class="project-slider project-section__slider">
      <div ref="project-mini-slider" class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, idx) in projects"
            :key="slide.id"
            class="swiper-slide"
          >
            <component
              :is="idx === activeSlideIndex ? 'nuxt-link' : 'span'"
              :to="
                localePath(`/projects/${projects[idx].url || projects[idx].id}`)
              "
            >
              {{ $getText(slide.titleTranslation) }}
            </component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Thumbs, Mousewheel } from 'swiper'

Swiper.use([Thumbs, Mousewheel])

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeSlideIndex: 0,
      slider: null,
      miniSlider: null,
    }
  },
  mounted() {
    this.miniSlider = new Swiper(this.$refs['project-mini-slider'], {
      slidesPerView: 'auto',
      centeredSlides: true,
      slideToClickedSlide: true,
    })

    this.slider = new Swiper(this.$refs['project-slider'])

    this.slider.on('slideChange', (swiper) => {
      this.miniSlider.slideTo(swiper.activeIndex)
      this.activeSlideIndex = swiper.activeIndex
    })

    this.miniSlider.on('slideChange', (swiper) => {
      this.slider.slideTo(swiper.activeIndex)
    })

    this.miniSlider.on('slideChangeTransitionEnd', () => {
      this.miniSlider.updateSlidesClasses()
    })
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
      this.miniSlider.destroy()
    }
  },
}
</script>

<style lang="scss" scoped>
.project-section {
  min-height: 95vh;
  position: relative;
  display: flex;
  background: $dark-bg;

  &__imgs {
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: #000;
      opacity: 0.4;
      z-index: 1;
      pointer-events: none;
    }

    .swiper {
      height: 95vh;
      width: 100%;
    }

    img {
      object-fit: cover;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: 0.3s opacity;
    }
  }

  &__view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
    color: #fff;
    font-size: 30rem;
    z-index: 1;

    .view-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 70rem;
      height: 70rem;
      margin-bottom: 16rem;
      box-shadow: 0 0 0 0 #fff;
      transition: 0.2s box-shadow;

      img {
        width: calc(100% + 2rem);
        height: calc(100% + 2rem);
      }
    }

    &:hover,
    &:focus {
      outline: none;

      .view-icon {
        box-shadow: 0 0 0 5rem #fff;
      }
    }
  }

  &__slider {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.brd {
  border: 1px solid red;
}

.project-slider {
  padding: 0 25rem;
  font-size: 40rem;
  color: $secondary-gray;
  overflow: hidden;

  .swiper-slide {
    transition: 0.2s all;
    padding: 35rem 28rem;
    cursor: pointer;
  }

  .swiper-wrapper {
    display: flex;
    align-items: flex-end;

    .swiper-slide {
      width: auto;
      a {
        text-decoration: none;
        color: $secondary-gray;
      }

      &-active {
        font-size: $heading-font-size;
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
}

@include mobile {
  .project-section {
    &__view {
      font-size: 40rem;
    }
  }

  .project-slider {
    padding: 0 50rem;

    .swiper-slide {
      padding: 70rem 28rem;
    }
  }
}
</style>
