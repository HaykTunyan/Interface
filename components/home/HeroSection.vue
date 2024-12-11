<template>
  <section class="hero-section">
    <div ref="hero-slider" class="hero-section__slider swiper">
       <div class="swiper-wrapper">
        <!--  -->
        <div class="swiper-slide">
          <p v-if="isActive" :class="['hero-title']">
            <span>Creating better outcomes</span><br>
            <span class="second">for the investors</span><br>
            <span class="third">and developing your business</span>
          </p>
          <!-- <p :class="['hero-title']">
            for the investors
          </p>
          <p :class="['hero-title']">
            and developing your business
          </p> -->
        </div>
        <!-- <div class="swiper-slide">
          <div class="container">
            <div class="swiper-wrapper">
              <p class="hero-title animation-one">Creating better outcomes</p>
              <p class="hero-title animation-two">for the investors</p>
              <p class="hero-title animation-three">
                and developing your business
              </p>
            </div>
          </div>
          <div class="container" id="white">
            <div class="swiper-wrapper">
              <p class="hero-title animation-one">Creating better outcomes</p>
              <p class="hero-title animation-two">for the investors</p>
              <p class="hero-title animation-three">
                and developing your business
              </p>
            </div>
          </div>
        </div> -->



        <!-- <div class="swiper-slide" id="slider-two">

          <h1 :class="['hero-section__heading title-stroke', { 'animation-1': activeSlide === 1 }]">
            Honouring the past to shape a better future
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">
          <h1 :class="['hero-section__heading title-stroke', { 'animation-2': activeSlide === 2 }]">
            Building a brighter tomorrow
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">

          <h1 :class="['hero-section__heading title-stroke', { 'animation-3': activeSlide === 3 }]">
            Empowering Armenian entrepreneurship
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">
          <h1 :class="['hero-section__heading title-stroke', { 'animation-4': activeSlide === 4 }]">
            Evolving traditions for modern times
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">
          <h1 :class="['hero-section__heading title-stroke', { 'animation-5': activeSlide === 5 }]">
            Investing in Armenia's growth
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">
          <h1 :class="['hero-section__heading title-stroke', { 'animation-6': activeSlide === 6 }]">
            Remembering the past, shaping the future
          </h1>
        </div> -->
        <!-- <div class="swiper-slide">
          <h1 :class="['hero-section__heading title-stroke', { 'animation-7': activeSlide === 7 }]">
            Investing in Armenia of today and tomorrow
          </h1>
        </div> -->
      </div>
    </div>

    <!-- <div class="hero-section__heading">
      <p class="hero-title">Creating better outcomes</p>
      <p class="hero-title">for the investors</p>
      <p class="hero-title">and developing your business</p>
    </div> -->
  </section>
</template>

<script>
// import { Swiper, EffectFade, Autoplay } from 'swiper'

// Swiper.use([EffectFade, Autoplay])

export default {
  data() {
    return {
      // slider: null,
      // activeSlide: 0,
      isActive: true,
    }
  },
  mounted() {
    // this.slider = new Swiper(this.$refs['hero-slider'], {
    //   effect: 'fade',
    //   fadeEffect: {
    //     crossFade: true,
    //   },
    //   autoHeight: true,
    //   loop: true,
    //   speed: 500,
    //   disableOnInteraction: false,
    //   simulateTouch: false,
    //   autoplay: {
    //     delay: 3000,
    //   },
    //   on: {
    //     slideChange: this.handleSlideChange,
    //   },
    // })

    setInterval(() => {
      this.isActive = false;
      this.$nextTick(() => {
        this.isActive = true;
      })
    }, 7000)
  },
  // beforeDestroy() {
  //   if (this.slider) {
  //     this.slider.destroy()
  //   }
  // },
  // methods: {
  //   handleSlideChange() {
  //     this.activeSlide = this.slider?.realIndex
  //     console.log('Active Slide:', this.activeSlide)
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.hero-section {
  background-image: url('~/assets/images/home/hero.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 95vh;
  padding: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;

  // position: relative;
  &__heading {
    font-weight: 500;
    font-size: $heading-font-size;
    color: #ffffff;
    padding-bottom: 31rem;
  }

  .swiper-wrapper {
    align-items: flex-end;
  }

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 51.45%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
}

.hero-title {
  font-size: 80rem;
  font-weight: 400;
  margin-bottom: 56px;

  span {
    color: #b2b1af;
    background: linear-gradient(to right , #F8F8F8, #F8F8F8 50%, #909090 50% );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    // transition: background-position 3s ease;
    white-space: nowrap;
    overflow: hidden;
    animation: heroAnimation 2s linear forwards;

    &.second {
      animation-delay: 2s;
    }

    &.third {
      animation-delay: 4s;
    }
  }
}

@keyframes heroAnimation {
  from {
    background-position: 100%;
  }
  to {
    background-position: 0 100%;
  }
}

.title-stroke {
  -webkit-text-stroke: 1px #000000;

  // animation: animated-text 4s linear 1s 1 normal both,
  //          animated-cursor 600ms linear infinite;
}

.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(225deg, #231557 0%, #fff800 100%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: #fff;

  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

.animation-one:after {
  content: '';
  animation: animationOne 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-two:after {
  content: '';
  animation: animationTwo 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-three:after {
  content: '';
  animation: animationThree 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-0:after {
  content: '';
  animation: animation0 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-1:after {
  content: '';
  animation: animation1 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-2:after {
  content: '';
  animation: animation2 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-3:after {
  content: '';
  animation: animation3 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-4:after {
  content: '';
  animation: animation4 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-5:after {
  content: '';
  animation: animation5 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-6:after {
  content: '';
  animation: animation6 1.5s linear 1;
  animation-fill-mode: forwards;
}

.animation-7:after {
  content: '';
  animation: animation7 1.5s linear 1;
  animation-fill-mode: forwards;
}

@keyframes animationOne {
  0% {
    content: 'C';
  }

  5% {
    content: 'Cr';
  }

  10% {
    content: 'Cre';
  }

  15% {
    content: 'Cre';
  }

  20% {
    content: 'Crea';
  }

  25% {
    content: 'Creat';
  }

  30% {
    content: 'Creatin';
  }

  35% {
    content: 'Creating ';
  }

  40% {
    content: 'Creating b';
  }

  45% {
    content: 'Creating be';
  }

  50% {
    content: 'Creating bet';
  }

  55% {
    content: 'Creating bett';
  }

  60% {
    content: 'Creating bette';
  }

  65% {
    content: 'Creating better';
  }

  70% {
    content: 'Creating better ';
  }

  75% {
    content: 'Creating better o';
  }

  80% {
    content: 'Creating better ou';
  }

  85% {
    content: 'Creating better out';
  }

  90% {
    content: 'Creating better outc';
  }

  95% {
    content: 'Creating better outcom';
  }

  100% {
    content: 'Creating better outcomes';
  }
}

@keyframes animationTwo {
  0% {
    content: '';
  }

  10% {
    content: 'f';
  }

  15% {
    content: 'fo';
  }

  20% {
    content: 'for';
  }

  25% {
    content: 'for ';
  }

  30% {
    content: 'for t';
  }

  35% {
    content: 'for the';
  }

  40% {
    content: 'for the ';
  }

  50% {
    content: 'for the in';
  }

  60% {
    content: 'for the inv';
  }

  70% {
    content: 'for the inves';
  }

  80% {
    content: 'for the invest';
  }

  90% {
    content: 'for the investor';
  }

  100% {
    content: 'for the investors';
  }
}

@keyframes animationThree {
  0% {
    content: '';
  }

  10% {
    content: 'and';
  }

  20% {
    content: 'and de';
  }

  30% {
    content: 'and devel';
  }

  40% {
    content: 'and developi';
  }

  50% {
    content: 'and developing ';
  }

  60% {
    content: 'and developing yo';
  }

  70% {
    content: 'and developing your ';
  }

  80% {
    content: 'and developing your b';
  }

  90% {
    content: 'and developing your busin';
  }

  100% {
    content: 'and developing your business';
  }
}

@keyframes animation0 {
  0% {
    content: '';
  }

  10% {
    content: 'Creating';
  }

  20% {
    content: 'Creating bette';
  }

  30% {
    content: 'Creating better outcomes';
  }

  40% {
    content: 'Creating better outcomes for ';
  }

  50% {
    content: 'Creating better outcomes for the ';
  }

  60% {
    content: 'Creating better outcomes for the investors';
  }

  70% {
    content: 'Creating better outcomes for the investors and';
  }

  80% {
    content: 'Creating better outcomes for the investors and developing';
  }

  90% {
    content: 'Creating better outcomes for the investors and developing your ';
  }

  100% {
    content: 'Creating better outcomes for the investors and developing your business';
  }
}

@keyframes animation1 {
  0% {
    content: '';
  }

  10% {
    content: 'Hono';
  }

  20% {
    content: 'Honouring th';
  }

  30% {
    content: 'Honouring the past';
  }

  40% {
    content: 'Honouring the past to ';
  }

  50% {
    content: 'Honouring the past to sh';
  }

  60% {
    content: 'Honouring the past to shape';
  }

  70% {
    content: 'Honouring the past to shape a ';
  }

  80% {
    content: 'Honouring the past to shape a bett';
  }

  90% {
    content: 'Honouring the past to shape a better ';
  }

  100% {
    content: 'Honouring the past to shape a better future';
  }
}

@keyframes animation2 {
  0% {
    content: '';
  }

  10% {
    content: 'Bu';
  }

  20% {
    content: 'Build';
  }

  30% {
    content: 'Buildin';
  }

  40% {
    content: 'Building ';
  }

  50% {
    content: 'Building a ';
  }

  60% {
    content: 'Building a bri';
  }

  70% {
    content: 'Building a bright';
  }

  80% {
    content: 'Building a brighter ';
  }

  90% {
    content: 'Building a brighter tomor';
  }

  100% {
    content: 'Building a brighter tomorrow';
  }
}

@keyframes animation3 {
  0% {
    content: '';
  }

  10% {
    content: 'Empo';
  }

  20% {
    content: 'Empower';
  }

  30% {
    content: 'Empowering';
  }

  40% {
    content: 'Empowering Arme';
  }

  50% {
    content: 'Empowering Armenian';
  }

  60% {
    content: 'Empowering Armenian en';
  }

  70% {
    content: 'Empowering Armenian entr';
  }

  80% {
    content: 'Empowering Armenian entrepren';
  }

  90% {
    content: 'Empowering Armenian entrepreneurs';
  }

  100% {
    content: 'Empowering Armenian entrepreneurship';
  }
}

@keyframes animation4 {
  0% {
    content: '';
  }

  10% {
    content: 'Evol';
  }

  20% {
    content: 'Evolvin';
  }

  30% {
    content: 'Evolving tra';
  }

  40% {
    content: 'Evolving tradi';
  }

  50% {
    content: 'Evolving traditio';
  }

  60% {
    content: 'Evolving traditions ';
  }

  70% {
    content: 'Evolving traditions for ';
  }

  80% {
    content: 'Evolving traditions for mod';
  }

  90% {
    content: 'Evolving traditions for modern ';
  }

  100% {
    content: 'Evolving traditions for modern times';
  }
}

@keyframes animation5 {
  0% {
    content: '';
  }

  10% {
    content: 'Inv';
  }

  20% {
    content: 'Invest';
  }

  30% {
    content: 'Investing';
  }

  40% {
    content: 'Investing in';
  }

  50% {
    content: 'Investing in Ar';
  }

  60% {
    content: 'Investing in Armen';
  }

  70% {
    content: "Investing in Armenia'";
  }

  80% {
    content: "Investing in Armenia's ";
  }

  90% {
    content: "Investing in Armenia's gro";
  }

  100% {
    content: "Investing in Armenia's growth";
  }
}

@keyframes animation6 {
  0% {
    content: '';
  }

  10% {
    content: 'Remembe';
  }

  20% {
    content: 'Remembering';
  }

  30% {
    content: 'Remembering the';
  }

  40% {
    content: 'Remembering the pas';
  }

  50% {
    content: 'Remembering the past, ';
  }

  60% {
    content: 'Remembering the past, shap';
  }

  70% {
    content: 'Remembering the past, shaping ';
  }

  80% {
    content: 'Remembering the past, shaping the';
  }

  90% {
    content: 'Remembering the past, shaping the fu';
  }

  100% {
    content: 'Remembering the past, shaping the future';
  }
}

@keyframes animation7 {
  0% {
    content: '';
  }

  10% {
    content: 'Inv';
  }

  20% {
    content: 'Invest';
  }

  30% {
    content: 'Investing in ';
  }

  40% {
    content: 'Investing in Armenia';
  }

  50% {
    content: 'Investing in Armenia of ';
  }

  60% {
    content: 'Investing in Armenia of today ';
  }

  70% {
    content: 'Investing in Armenia of today and';
  }

  80% {
    content: 'Investing in Armenia of today and ';
  }

  90% {
    content: 'Investing in Armenia of today and tom';
  }

  100% {
    content: 'Investing in Armenia of today and tomorrow';
  }
}

// Honouring the past to shape a better future

// @keyframes animationOne {
//   0% {
//     content: "C";
//   }
//   /* Remaining steps for the animation */
//   100% {
//     content: "Creating better outcomes";
//   }
// }

// @keyframes animationTwo {
//   0% {
//     content: "";
//   }
//   /* Remaining steps for the animation */
//   100% {
//     content: "for the investors";
//   }
// }

// @keyframes animationThree {
//   0% {
//     content: "";
//   }
//   /* Remaining steps for the animation */
//   100% {
//     content: "and developing your business";
//   }
// }

// @keyframes animationFour {
//   0% {
//     content: "";
//   }
//   /* Remaining steps for the animation */
//   100% {
//     content: "Honouring the past to shape a better future";
//   }
// }

// @keyframes animationFive {
//   0% {
//     content: "";
//   }
//   /* Remaining steps for the animation */
//   100% {
//     content: "Building a brighter tomorrow";
//   }
// }

// .animation-one {
//   animation: animationOne 1.5s linear forwards;
// }

// .animation-two {
//   animation: animationTwo 1.5s linear forwards;
// }

// .animation-three {
//   animation: animationThree 1.5s linear forwards;
// }

// .animation-four {
//   animation: animationFour 1.5s linear forwards;
// }

// .animation-1 {
//   animation: animationFive 1.5s linear forwards;
// }

//


@include mobile {
  .hero-section {
    background-size: auto 100%;
    background-position: 25% 0;
    min-height: 90vh;
    padding: 40px 17px;

    &__heading {
      font-size: 100rem;
    }

    .hero-title {
      margin-bottom: 0;
      font-size: 40px;

      span {
        white-space: normal;
      }
    }
  }
}
</style>
