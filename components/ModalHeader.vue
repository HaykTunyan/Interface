<template>
  <header class="header this-header" :class="{ 'nav-open': isNavOpen, 'is-white': isWhite }">
    <nuxt-link :to="localePath('/')" class="logo">
      <img src="~/assets/images/logo-deep-white.svg" alt="DeepWhite" />
    </nuxt-link>
    <!-- Don't delete this line code.  that future for change UI -->
    <!-- <nav class="nav hooker hooker-menu">
      <a class="nav__menu" href="" @click.prevent="isNavOpen = !isNavOpen">
        Menu
      </a>
      <ul class="hooker">
        <button class="close-btn" @click.prevent="isNavOpen = false">
          <img src="~/assets/images/icons/close.svg" alt="X" />
        </button>
        <li v-for="(route, idx) in routes" :key="idx">
          <nuxt-link :to="localePath(route.path)" @click.native="isNavOpen = false">
            {{ route.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav> -->
    <button class="header__btn" @click="back">
      <img src="~/assets/images/icons/close.svg" alt="X" />
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isWhite: false,
      routes: [
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/for-investors', label: 'For Investors' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact-us', label: 'Contacts' },
        { path: '/login', label: 'Log in' },
      ],
    }
  },
  mounted() {
    this.setHeaderClass();
    window.addEventListener('scroll', this.setHeaderClass);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.setHeaderClass);
  },
  methods: {
    back() {
      this.$nuxt.$emit('back')
    },
    setHeaderClass() {
      const wHeight = (window.innerHeight / 100) * 80;
      if (window.scrollY >= wHeight) {
        this.isWhite = false;
      } else {
        this.isWhite = true;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.hooker {
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 100px;
    height: 50rem;
    top: 100%;

    @include mobile {
      display: none;
    }
  }
}

.hooker-menu {
  right: 100px;
}

.header {
  padding: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 70rem;
    height: 70rem;
    margin-bottom: 16rem;
    box-shadow: 0 0 0 0 #fff;
    transition: 0.2s all;
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 25rem;
    top: 25rem;
    z-index: 2;
    backdrop-filter: blur(22px);
    box-shadow: 0 0 0 0 rgba(#fff, 0.5);
    pointer-events: all;

    img {
      width: calc(100% + 2rem);
      height: calc(100% + 2rem);
      opacity: 0.5;
      transition: all 0.2s;
    }

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5rem #fff;

      img {
        opacity: 1;
      }
    }
  }
}

.close-btn {
  display: none;
}

.logo {
  width: 240rem;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @include mobile {
    width: 286rem;
    height: 71rem;
  }
}

.nav {
  position: relative;
  padding: 25rem 0;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 30rem;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
      color: lighten(#ffffff, 20);
    }
  }

  ul {
    display: flex;
    position: absolute;
    top: 0;
    left: calc(100% + 25rem);
    opacity: 0;
    transition: 0.5s all;
    pointer-events: none;
    list-style: none;
    padding: 25rem;

    a {
      padding-left: 18rem;
      padding-right: 18rem;
    }
  }

  @media screen and (min-width: 521px) {
    &:hover {
      ul {
        opacity: 1;
        transform: translateX(-100%);
        pointer-events: all;
      }

      .nav__menu {
        opacity: 0;
        padding-right: 20rem;
      }
    }
  }
}

@include mobile {
  .header {
    padding: 70rem 40rem;
    transition: mix-blend-mode 0.2s;
    pointer-events: none;

    &.nav-open {
      mix-blend-mode: normal;

      .nav ul {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .logo {
    width: 286rem;
    height: 71rem;
    pointer-events: all;
  }

  .nav {
    margin-left: auto;
    padding: 0;
    pointer-events: all;

    a {
      font-size: 60rem;
    }

    .close-btn {
      width: 64rem;
      height: 64rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 72rem;
      right: 40rem;
      background: transparent;
      border: none;
      opacity: 0.7;
      transition: all 0.2s;

      img {
        width: 100%;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
      }
    }

    ul {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: $dark-bg;
      opacity: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      text-align: center;
      pointer-events: all;
      transition: all 0.2s;
      transform: translateY(-100%);
      opacity: 0;

      li {
        padding: 36rem 0;

        a {
          font-size: 80rem;
        }
      }
    }
  }
}
</style>
