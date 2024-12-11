<template>
  <img v-if="type === 'image'" :src="media.location" :alt="media.title" />
  <video v-else-if="type === 'video'" controls>
    <source :src="media.location" />
  </video>
  <iframe v-else :src="media.location" :title="media.title" />
</template>

<script>
export default {
  props: {
    media: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      if (this.media.mimtype.includes('image')) {
        return 'image'
      } else if (
        this.media.mimtype.includes('video') ||
        this.media.mimtype === 'application/octet-stream'
      ) {
        return 'video'
      } else {
        return 'any'
      }
    },
  },
}
</script>
