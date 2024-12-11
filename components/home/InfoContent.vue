<template>
  <div
    class="info-content"
    :style="`background: ${background}; color: ${color}`"
  >
    <p>{{ $getText(content.descriptionTranslation) }}</p>
    <blog-slider
      v-if="content.pictures.length > 1"
      :pictures="content.pictures"
      class="img-wrapper"
    />
    <div v-else-if="content.pictures.length === 1" class="img-wrapper">
      <app-media class="img" :media="content.pictures[0]" />
    </div>
  </div>
</template>

<script>
import BlogSlider from '~/components/blog/BlogSlider.vue'
import AppMedia from '~/components/AppMedia.vue'

export default {
  components: { BlogSlider, AppMedia },
  props: {
    background: {
      type: String,
      default: '#F5F5F5',
    },
    color: {
      type: String,
      default: '#000000',
    },
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.info-content {
  padding: 25rem 32rem;
  background: $primary-green;
  font-size: 40rem;
  color: $secondary-green;

  h2 {
    font-weight: normal;
    font-size: $heading-font-size;
    margin-bottom: 42rem;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -32rem 42rem;
    max-height: 95vh;
    overflow: hidden;

    .img {
      width: 100%;
      height: auto;
    }
  }

  p {
    white-space: pre-line;
  }

  p:not(:last-child) {
    margin-bottom: 42rem;
  }
}
</style>
