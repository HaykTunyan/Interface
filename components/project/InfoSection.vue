<template>
  <div class="project-info">
    <p class="project-info__description">
      {{ $getText(project.descriptionTranslation) }}
    </p>
    <ul class="project-info__list">
      <li v-for="bullet in project.bullets" :key="bullet.id">
        {{ $getText(bullet.originalText) }}
      </li>
    </ul>
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
.project-info {
  background: $light-bg;
  padding: 64rem 32rem 262rem;
  color: #000;

  &__description {
    font-size: 38rem; // 60 rem change.
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 20rem;

    li {
      font-size: 30rem;
      padding: 22rem 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        border: 1rem solid $primary-green;
        width: 48rem;
        min-width: 48rem;
        margin-right: 32rem;
      }
    }
  }
}
</style>
