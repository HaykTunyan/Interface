<template>
  <header class="header" :class="{ 'nav-open': isNavOpen, 'is-white': isWhite && !notWhite }">
    <nuxt-link :to="localePath('/')" class="logo">
      <img src="~/assets/images/logo-deep-white.svg" alt="DeepWhite" />
    </nuxt-link>
    <!-- hooker -->
     <nav class="nav-link">
      <ul class="hooker">
        <button class="close-btn" >
          <img src="~/assets/images/icons/close.svg" alt="X" />
        </button>
        <li v-for="(route, idx) in routes" :key="idx">
          <nuxt-link
            :to="localePath(route.path)"
            @click.native="isNavOpen = true"
          >
            {{ route.label }}
          </nuxt-link>
        </li>
      </ul>
     </nav>
    <nav class="nav hooker">
      <a class="nav__menu" href="" @click.prevent="isNavOpen = !isNavOpen">
        Menu
      </a>
      <ul class="hooker">
        <button class="close-btn" @click.prevent="isNavOpen = false">
          <img src="~/assets/images/icons/close.svg" alt="X" />
        </button>
        <li v-for="(route, idx) in routes" :key="idx">
          <nuxt-link
            :to="localePath(route.path)"
            @click.native="isNavOpen = false"
          >
            {{ route.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <!--  -->
  </header>
</template>

<script>
export default {
  props: {
    notWhite: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isNavOpen: false,
      isWhite: false,
      routes: [
        { path: '/about', label: 'About us' },
        { path: '/services', label: 'Services' },
        // { path: '/for-investors', label: 'For Investors' },
        { path: '/projects', label: 'Projects' },
        { path: '/blog', label: 'News' }, // Blog
        { path: '/contact-us', label: 'Contacts' },
        // { path: '/login', label: 'Log in' },
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
    right: 0;
    height: 50rem;
    top: 100%;
    @include mobile {
      display: none;
    }
  }
}

.header {
  // padding: 0 25rem;
  padding: 18px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  // mix-blend-mode: difference;
  font-weight: normal;
  background: #1A1A1A;

  pointer-events: none;

  &.is-white {
    mix-blend-mode: normal;
  }

  .logo {
    pointer-events: all;
  }

  .nav {
    pointer-events: all;
    display: none;
  }
}

.nav-link {
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
    flex-direction: row;
    pointer-events: all;
    cursor: pointer;
    list-style: none;
    // list-style: none;
    // display: flex;
    // position: absolute;
    // top: 0;
    // left: 0;
    // opacity: 0;
    // // transition: 0.5s all;
    // pointer-events: none;
    // list-style: none;
    // padding: 25rem;

    a {
      padding-left: 18rem;
      padding-right: 18rem;
    }
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

.logo {
  width: 240rem;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
}

.close-btn {
  display: none;
}

@include mobile {
  .header {
    padding: 22px 20px;
    transition: mix-blend-mode 0.2s;
    pointer-events: none;

    .nav {
      display: block;
    }

    .nav-link {
      display: none;
    }

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
