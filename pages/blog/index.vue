<template>
  <div class="blog-page">
    <template v-if="blogsList.length > 0">
      <blog-card type="main" :blog="blogsList[0]" />
      <blog-card
        v-for="(blog, idx) in blogsList.slice(1)"
        :key="blog.id"
        :blog="blog"
        :type="(idx + 1) % 2 === 0 ? 'primary' : 'default'"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BlogCard from '~/components/blog/BlogCard.vue'

export default {
  name: 'BlogPage',
  components: { BlogCard },
  async asyncData({ store }) {
    try {
      await store.dispatch('blog/fetchBlogsList')
    } catch (e) {
      return { error: e }
    }
  },
  computed: {
    ...mapGetters({
      blogsList: 'blog/blogsList',
    }),
  },
}
</script>
