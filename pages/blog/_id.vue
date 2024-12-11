<template>
  <div class="detail-blog">
    <template v-if="singleBlog">
      <hero-section :blog="singleBlog" />
      <info-content
        v-for="content in singleBlog.blogItem"
        :key="content.id"
        :content="content"
        background="#F5F5F5"
        color="#000000"
      />
      <info-section
        title="Related articles"
        :slides="blogSlides"
        arrow
        @view="(urlOrId) => $router.push(localePath(`/blog/${urlOrId}`))"
      />

    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeroSection from '~/components/blog/HeroSection.vue'
import InfoContent from '~/components/home/InfoContent.vue'
import InfoSection from '~/components/home/InfoSection.vue'

export default {
  name: 'BlogDetailPage',
  components: { InfoSection, HeroSection, InfoContent  },
  layout: 'modal-layout',
  async asyncData({ store, route }) {
    store.commit('blog/setSingleBlog', null)
    try {
      await store.dispatch('blog/fetchSingleBlog', route.params.id)
      await store.dispatch('blog/fetchBlogsList')
    } catch (e) {
      return { error: e }
    }
  },
  computed: {
    ...mapGetters({
      singleBlog: 'blog/singleBlog',
      blogsList: 'blog/blogsList',
    }),
    blogSlides() {
      return this.blogsList
        .filter((blog) => blog.id !== this.singleBlog.id)
        .map((blog) => ({
          id: blog.url || blog.id,
          color: '#ffffff',
          background: '#1A1A1A',
          image: blog.picture && blog.picture.location,
          title: this.$getText(blog.titleTranslation),
        }))
    },
  },
  mounted() {
    this.$nuxt.$on('back', () => {
      this.$router.push('/blog')
    })
  },
  destroyed() {
    this.$nuxt.$off('back')
  },
}
</script>
