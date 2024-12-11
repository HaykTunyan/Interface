<template>
  <div ref="map" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const map = new window.google.maps.Map(this.$refs.map, {
      zoom: 15,
      center: this.coords,
      mapId: '8c0612a2b2655097',
      disableDefaultUI: true,
      zoomControl: true,
    })

    // eslint-disable-next-line no-unused-vars
    const marker = new window.google.maps.Marker({
      icon: {
        url: require('~/assets/images/icons/mark.svg'),
        size: { width: 64, height: 64, f: 'px', b: 'px' },
      },
      position: this.coords,
      map,
    })
  },
}
</script>
