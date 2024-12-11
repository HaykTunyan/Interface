<template>
  <div class="home-page">
    <hero-section />
    <today-section />
    <we-offer />
    <!-- <info-section
      title="We follow institutional practices in our investment preparation process and closely monitor project implementation for successful outcomes."
      :slides="slides"
    /> -->
    <hotel-slider v-if="projectsList.length" :projects="projectsList" />
    <!-- <hotel-section /> -->
    <!-- <project-section v-if="projectsList.length" :projects="projectsList" /> -->
    <footer-section />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeroSection from '~/components/home/HeroSection.vue'
import TodaySection from '~/components/home/TodaySection.vue'
import WeOffer from  '~/components/home/WeOfferSection.vue'
// import InfoSection from '~/components/home/InfoSection.vue'
// import HotelSection from '~/components/home/HotelSection.vue'
import HotelSlider from '~/components/home/HotelSlider.vue'
// import ProjectSection from '~/components/home/ProjectSection.vue'
import FooterSection from '~/components/home/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    TodaySection,
    WeOffer,
    HotelSlider,
    // HotelSection,
    // InfoSection,
    // ProjectSection,
    FooterSection,
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('projects/fetchProjectsList')
    } catch (e) {
      return { error: e }
    }
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          color: '#FFFFFF',
          background: '#1A1A1A',
          title:
            "Our purpose is to establish a remarkable ecosystem with inventive and sustainable solutions for local and global markets, enhancing people's quality of life and working environment.",
        },
        {
          id: 2,
          color: '#000000',
          background: '#FFFFFF',
          image: require('~/assets/images/slide-bg.jpg'),
          title:
            'We prioritise meticulousness and attention to detail in our projects, emphasising design, style, and simplicity to create a fresh and innovative result.',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      projectsList: 'projects/projectsList',
    }),
  },
}
</script>
