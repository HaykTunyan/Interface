<template>
  <div class="website-section">
    <div class="website-section__left">
      <h2 class="website-section__heading">
        Visit the {{ $getText(project.titleTranslation) }} website
      </h2>
    </div>
    <div class="website-section__right">
      <a :href="project.bloc_url" target="_blank" class="website-section__link">
        <span class="desk-text">Link</span>
        <span class="mob-text"
          >Visit the {{ $getText(project.titleTranslation) }} website</span
        >
      </a>
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
.website-section {
  background: $dark-bg;
  display: flex;
  min-height: 95vh;
  font-weight: 500;

  .mob-text {
    display: none;
  }

  &__left {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding: 40rem 30rem;
    background-color: $light-bg;
  }

  &__heading {
    font-size: 80rem;
    font-weight: 500;
    color: #000;
  }

  &__right {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding: 40rem 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__link {
    color: #fff;
    text-decoration: none;
    font-size: 80rem;
    transition: 0.2s all;

    &::after {
      content: '';
      display: inline-block;
      width: 56rem;
      height: 56rem;
      min-width: 56rem;
      margin-left: 5rem;
      background-image: url('@/assets/images/icons/link-arrow.svg');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      opacity: 0.7;
      transition: 0.2s all;
    }

    &:hover,
    &:focus {
      color: #fff;
      &::after {
        opacity: 1;
      }
    }
  }
}

@include mobile {
  .website-section {
    overflow: auto;

    .mob-text {
      display: inline;
    }

    .desk-text {
      display: none;
    }

    &__left {
      display: none;
    }

    &__right {
      min-width: 100%;
    }
  }
}
</style>
