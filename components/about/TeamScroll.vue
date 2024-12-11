<template>
  <div class="team-slider">
    <div ref="team-wrapper" class="team-wrapper">
      <div v-for="item in imageList" :key="item.id" class="team-block">
        <div class="team-block__img">
          <img v-if="item.img" :src="item.img" :alt="item.alt">
        </div>
        <div class="team-block__content">
          <div class="team-block__name">{{ item.title }}</div>
          <div class="team-block__position">{{ item.position }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
if (process.client) {
  const gsap = require('gsap');
  window.gsap = gsap.gsap;
  const ScrollTrigger = require('gsap/ScrollTrigger');
  window.ScrollTrigger = ScrollTrigger.ScrollTrigger;
  window.gsap.registerPlugin(window.ScrollTrigger);
}

export default {
  data() {
    return {
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
      sliderTrigger: null,
    }
  },
  mounted() {
    const teamWrapper = this.$refs['team-wrapper'];

    this.sliderTrigger = window.ScrollTrigger.create({
      trigger: teamWrapper,
      animation: window.gsap.fromTo(teamWrapper, {x: 0 }, {x: -(600 * this.imageList.length) + teamWrapper.offsetWidth}),
      pin: true,
      start: 'center center',
      end: '+=5000 bottom',
      scrub: 0.5,
    })
  },
  beforeDestroy() {
    if (this.sliderTrigger) {
      this.sliderTrigger.kill()
    }
  }
}
</script>

<style lang="scss" scoped>
.team-slider {
  background: $dark-bg;
  color: #fff;
  min-height: 95vh;
  overflow: hidden;
}

.team-wrapper {
  display: flex;
  flex-wrap: nowrap;
}

.team-block {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #fff;
  height: 95vh;

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
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-color: $dark-bg;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) &__img {
    background-color: $light-bg;
  }
}
</style>
