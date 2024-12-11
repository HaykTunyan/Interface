<template>
  <div v-if="singleProject" class="project-page">
    <hero-section :project="singleProject" />
    <address-section :project="singleProject" />
    <info-section :project="singleProject" />
    <blog-slider :pictures="singleProject.pictures" only-images />
    <website-section v-if="singleProject.bloc_url" :project="singleProject" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeroSection from '~/components/project/HeroSection.vue'
import AddressSection from '~/components/project/AddressSection.vue'
import InfoSection from '~/components/project/InfoSection.vue'
import BlogSlider from '~/components/blog/BlogSlider.vue'
import WebsiteSection from '~/components/project/WebsiteSection.vue'

export default {
  name: 'ProjectDetailPage',
  components: {
    HeroSection,
    AddressSection,
    InfoSection,
    BlogSlider,
    WebsiteSection,
  },
  layout: 'modal-layout',
  async asyncData({ store, route }) {
    store.commit('projects/setSingleProject', null)
    try {
      await store.dispatch('projects/fetchSingleProject', route.params.id)
    } catch (e) {
      return { error: e }
    }
  },
  computed: {
    ...mapGetters({
      singleProject: 'projects/singleProject',
    }),
  },
  mounted() {
    this.$nuxt.$on('back', () => {
      this.$router.push('/projects')
    })
  },
  destroyed() {
    this.$nuxt.$off('back')
  },
}
</script>
