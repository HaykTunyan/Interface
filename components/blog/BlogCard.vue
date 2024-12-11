<template>
  <div class="blog-card" :class="`blog-card--${type}`">
    <nuxt-link
      :to="localePath(`/blog/${blog.url || blog.id}`)"
      class="blog-card__content"
    >
      <div class="blog-card__title">
        {{ $getText(blog.titleTranslation) }}
      </div>
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
        class="view-more"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM31.4142 22.5858L30 21.1716L27.1716 24L28.5858 25.4142L39.1716 36L28.5858 46.5858L27.1716 48L30 50.8284L31.4142 49.4142L43.4142 37.4142L44.8284 36L43.4142 34.5858L31.4142 22.5858Z"
        />
      </svg>
    </nuxt-link>
    <div class="blog-card__image">
      <img
        v-if="blog.picture"
        v-lazy-load
        :data-src="blog.picture.location"
        alt="Blog image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default', // default | primary | main
    },
    blog: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-card {
  $self: &;
  display: flex;
  min-height: 95vh;
  font-weight: 500;

  &__content {
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 56rem 45rem 56rem 25rem;
    background-color: $light-bg;
    text-decoration: none;
    transition: 0.2s background-color;

    &:hover {
      background-color: darken($light-bg, 3);

      .view-more {
        transform: scale(1.05);
      }
    }
  }

  &__title {
    color: #000;
    font-size: 60rem;
    margin-right: 24rem;
    width: 100%;
  }

  .view-more {
    width: 72rem;
    min-width: 72rem;
    height: 72rem;
    fill: #000;
    transition: 0.2s all;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &--primary {
    #{$self} {
      &__content {
        background-color: $primary-green;
        order: 2;
        .view-more {
          fill: $light-bg;
        }

        &:hover {
          background-color: darken($primary-green, 3);
        }
      }

      &__title {
        color: $light-bg;
      }

      &__image {
        order: 1;
      }
    }
  }

  &--main {
    position: relative;
    height: 95vh;
    #{$self} {
      &__content {
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        padding: 26rem;
        z-index: 1;

        .view-more {
          fill: #fff;
        }
      }

      &__title {
        color: #fff;
        font-size: $heading-font-size;
        margin-right: 64rem;
      }

      &__image {
        width: 100%;
      }
    }
  }
}

@include mobile {
  .blog-card {
    min-height: 50vh;
    position: relative;

    &__content {
      width: 100%;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      .view-more {
        width: 64rem;
        min-width: 64rem;
        height: 64rem;
      }
    }

    &__title {
      margin-right: 0;
      font-size: 80rem;
      margin-bottom: 48rem;
    }

    &__image {
      width: 100%;
    }

    &--primary {
      .blog-card__content {
        background: transparent;
      }
    }

    &--main {
      min-height: 95vh;
      .blog-card {
        &__content {
          padding-bottom: 112rem;
        }
      }
    }
  }
}
</style>
