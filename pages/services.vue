<template>
    <div class="services">
      <hero-section />
      <asset-management />
      <!-- <info-section
        background="#1A1A1A"
        text-color="#FFFFFF"
        title="We provide a comprehensive investment model covering every stage, from concept development to project implementation and beyond."
        :slides="slides"
      /> -->
      <asset-banner />
      <consulting-section />
      <div class="services__consulting-banner">
        <consulting-banner />
      </div>
      <!-- <team-section :team="team" /> -->
      <footer-section id="contact-us" />
    </div>
  </template>

  <script>
  import { mapGetters } from 'vuex'

  import HeroSection from '~/components/services/HeroSection.vue'
//   import InfoSection from '~/components/home/InfoSection.vue'
  import AssetManagement from '~/components/services/AssetManagement.vue';
  import AssetBanner from '~/components/services/AssetBanner.vue';
  import ConsultingSection from '~/components/services/ConsultingSection.vue';
  import ConsultingBanner from '~/components/services/ConsultingBanner.vue';
//   import TeamSection from '~/components/about/TeamSection.vue'
  import FooterSection from '~/components/home/FooterSection.vue'

  export default {
    name: 'ForInvestorsPage',
    components: {
      HeroSection,
    //   InfoSection,
      AssetManagement,
      AssetBanner,
      ConsultingSection,
      ConsultingBanner,
    //   TeamSection,
      FooterSection,
    },
    async asyncData({ store }) {
      try {
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
            color: '#000000',
            background: '#F5F5F5',
            title:
              'Our expertise spans various fields, including construction, recreation, beauty, and services, expanding into new areas such as healthcare, business, and education.',
          },
          {
            id: 1,
            color: '#FFFFFF',
            background: '#000000',
            image: require('~/assets/images/home/hero-bg.webp'),
            title:
              'Our team has extensive experience in market analysis, financial modelling, and deal analysis, working closely with clients to develop effective business models.',
          },
          {
            id: 2,
            color: '#FFFFFF',
            background: '#1A1A1A',
            title:
              'We aim for focused and innovative resource management to impact society positively.',
          },
        ],
      }
    },
    computed: {
      ...mapGetters({
        team: 'about/team',
      }),
    },
  }
  </script>

<style lang="scss" scoped>
@include mobile {
  .services {
    &__consulting-banner {
      display: none;
    }
  }
}
</style>
