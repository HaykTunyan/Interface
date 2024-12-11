<template>
  <div class="contact-us">
    <address-section />
    <footer-section />
  </div>
</template>

<script>
import AddressSection from '~/components/contact-us/AddressSection.vue'
import FooterSection from '~/components/home/FooterSection.vue'

export default {
  name: 'ContactUsPage',
  components: { AddressSection, FooterSection },
}
</script>
