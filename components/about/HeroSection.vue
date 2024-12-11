<template>
  <!-- :style="`background-image: url('${about.file && about.file.location}')`" -->
  <div
    class="about-hero"

  >
    <h2 class="about-hero__heading">{{ $getText(about.nameTranslation) }}</h2>
  </div>
</template>

<script>

export default {
  props: {
    about: {
      type: Object,
      required: true,
    },
  },
}
</script>



<style lang="scss" scoped>
.about-hero {
  background-image: url('~/assets/images/about/about-banner.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 95vh;
  padding: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  &__heading {
    font-weight: 400;
    font-size: $heading-font-size;
    color: #fff;
    padding-bottom: 31rem;
    z-index: 1;
  }

  &::before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 51.45%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
}

@include mobile {
  .about-hero {
    background-size: auto 100%;
    background-position: 80% 0;
    min-height: 90vh;
    padding: 40px 20px;

    &__heading {
      font-size: 50px;
      line-height: 50px;
      padding-bottom: 0;
    }
  }
}
</style>
