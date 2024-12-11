<template>
  <div class="projects">
    <ul class="projects__categories">
      <li v-for="category in projectFilters" :key="category.id">
        <button
          class="projects__category"
          :class="{
            'projects__category--active': activeCategory === category.id,
          }"
          @click="
            activeCategory = activeCategory === category.id ? null : category.id
          "
        >
          {{ $getText(category.originalText) }}
        </button>
      </li>
    </ul>
    <ul class="projects__list">
      <li v-for="project in projectsList" :key="project.id">
        <nuxt-link
          :to="localePath(`/projects/${project.url || project.id}`)"
          :class="{
            inactive:
              !!activeCategory && activeCategory !== project.projectFilterId,
          }"
        >
          {{ $getText(project.titleTranslation) }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectsList',
  noFooter: true,
  layoutClass: 'mob-no-logo mob-nav-black',
  async asyncData({ store }) {
    try {
      await store.dispatch('projects/fetchProjectsList')
      await store.dispatch('projects/fetchProjectFilters')
    } catch (e) {
      return { error: e }
    }
  },
  data() {
    return {
      activeCategory: null,
    }
  },
  computed: {
    ...mapGetters({
      projectsList: 'projects/projectsList',
      projectFilters: 'projects/projectFilters',
    }),
  },
}
</script>

<style lang="scss" scoped>
.projects {
  background-color: $dark-bg;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  width: 100%;

  &__categories {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 65rem 25rem;
    text-align: right;
    min-width: 325rem;

    li:not(:last-child) {
      margin-bottom: 26rem;
    }
  }

  &__category {
    font-size: 24rem;
    font-family: $default-font;
    color: #fff;
    line-height: 1;
    padding: 12rem 16rem;
    border: 1rem solid rgba(#fff, 0.4);
    background: transparent;
    border-radius: 100rem;
    transition: all 0.2s;

    &:hover,
    &:focus {
      outline: none;
      border-color: $light-bg;
      cursor: pointer;
    }

    &--active {
      background-color: $light-bg;
      border-color: $light-bg;
      color: #000;
    }
  }

  &__list {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 65rem 25rem;
    padding-top: 180rem;

    li:not(:last-child) {
      margin-bottom: 36rem;
    }

    a {
      color: #fff;
      font-size: 44rem;
      text-decoration: none;
      transition: all 0.2s;

      &:hover,
      &:focus {
        outline: none;
        opacity: 0.6;
      }

      &.inactive {
        font-size: 40rem;
        opacity: 0.2;
      }
    }
  }
}

@include mobile {
  .projects {
    flex-direction: column;
    max-height: 100vh;

    &__categories {
      width: 100%;
      min-width: 100%;
      order: 2;
      flex-direction: row;
      overflow-x: auto;
      border-top: 1rem solid rgba(#fff, 0.4);
      justify-content: flex-start;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $dark-bg;

      li {
        margin-bottom: 0 !important;
        margin-right: 24rem;
      }
    }

    &__category {
      font-size: 48rem;
      padding: 24rem 32rem;
      white-space: nowrap;
    }

    &__list {
      width: 100%;
      order: 1;
      padding-bottom: 300rem;
    }
  }
}
</style>
