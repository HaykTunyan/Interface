<template>
  <div class="about-page">
    <hero-section
      v-for="aboutItem in about"
      :key="aboutItem.id"
      :about="aboutItem"
    />
    <description-section />
    <we-offer-team ></we-offer-team>
    <!-- <info-section
      title="We are guided by our core values of INNOVATION, FREEDOM, TRANSPARENCY, and INTEGRATION."
      :slides="slides"
    /> -->
    <!-- <team-section :team="team" /> -->
    <team-slider :team="team" />
    <address-section />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeroSection from '~/components/about/HeroSection.vue'
import DescriptionSection from '~/components/about/DescriptionSection.vue'
import WeOfferTeam from  '~/components/about/WeOfferTeam.vue'
// import InfoSection from '~/components/home/InfoSection.vue'
// import TeamSection from '~/components/about/TeamSection.vue'
import TeamSlider from '~/components/about/TeamSlider.vue'
import AddressSection from '~/components/about/AddressSection.vue'

export default {
  name: 'AboutPage',
  components: {
    HeroSection,
    DescriptionSection,
    WeOfferTeam,
    // InfoSection,
    // TeamSection,
    TeamSlider,
    AddressSection,
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('about/fetchAbout')
      await store.dispatch('about/fetchTeam')
    } catch (e) {
      return { error: e }
    }
  },
  data() {
    return {
      slides: [
        {
          id: 0,
          color: '#FFFFFF',
          background: '#1A1A1A',
          title:
            'We are committed to upholding these values in our pursuit of excellence and sustainable growth.',
        },
        {
          id: 1,
          color: '#000000',
          background: '#FFFFFF',
          image: require('~/assets/images/light-bg.jpg'),
          title:
            'Our goal is to create a safe and innovative environment that fosters collaboration and challenges the status quo.',
        },
        {
          id: 2,
          color: '#FFFFFF',
          background: '#1A1A1A',
          title:
            'By fostering synergy among diverse perspectives, talents, and characters, we aim to promote a harmonious lifestyle for all.',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      about: 'about/about',
      team: 'about/team',
    }),
  },
}
</script>
