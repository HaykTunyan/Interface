<template>
  <div
    class="project-hero white-black"
    :style="`background-image: url('${
      project.blocImage && project.blocImage.src
    }')`"
  >
    <div class="project-hero__info">
      <h1 class="project-hero__title">
        {{ $getText(project.titleTranslation) }}
      </h1>
      <div class="project-hero__chips">
        <template v-for="tag in project.tags">
          <component
            :is="!!tag.link ? 'a' : 'div'"
            :key="tag.id"
            :href="tag.link"
            target="_blank"
            class="project-hero__chip"
          >
            {{ $getText(tag.originalText) }}
          </component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-hero {
  min-height: 95vh;
  display: flex;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

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
    position: absolute;
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
    text-decoration: none;

    @include mobile {
      font-size: 40rem;
    }

    &:is(a) {
      background: $dark-bg;
      border-color: $dark-bg;
      transition: 0.2s all;
      display: flex;
      align-items: center;

      &:hover,
      &:focus {
        background-color: lighten($dark-bg, 10);
        border-color: lighten($dark-bg, 10);
      }

      &::after {
        content: '';
        width: 20rem;
        height: 20rem;
        min-width: 20rem;
        margin-left: 8rem;
        background-image: url('@/assets/images/icons/link-arrow.svg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
