<template>
  <div
    class="blog-hero-section white-black"
    :style="`background-image: url('${blog.picture && blog.picture.location}')`"
  >
    <div class="blog-hero-section__info">
      <h1 class="blog-hero-section__title">
        {{ $getText(blog.titleTranslation) }}
      </h1>
      <div class="blog-hero-section__chips">
        <div class="blog-hero-section__chip">{{ blog.data }}</div>
        <div class="blog-hero-section__chip">
          {{ $getText(blog.authorTranslation) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-hero-section {
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;

  @include mobile {
    min-height: 90vh;
  }

  &::after {
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

  &__info {
    width: 100%;
    bottom: 0;
    z-index: 2;
    padding: 26rem;
  }

  &__title {
    font-weight: 500;
    font-size: $heading-font-size;
    color: #fff;
    padding-bottom: 24rem;
  }

  &__chips {
    display: flex;
    width: 100%;
    overflow-x: auto;

    @include mobile {
      width: auto;
      margin-left: -26rem;
      margin-right: -26rem;
      padding-right: 26rem;
      padding-left: 26rem;
      padding-bottom: 20rem;
      margin-bottom: 52rem;
      margin-top: 20rem;
    }
  }

  &__chip {
    font-size: 24rem;
    color: #fff;
    padding: 12rem 16rem;
    border: 1rem solid rgba(#fff, 0.4);
    border-radius: 100rem;
    margin-right: 16rem;
    white-space: nowrap;

    @include mobile {
      font-size: 40rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
