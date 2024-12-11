<template>
  <div class="login-page">
    <div class="login-page__left">
      <h2 class="login-page__heading">Log in to our Google workspace</h2>
    </div>
    <div class="login-page__right">
      <div ref="google-auth" class="login-page__link" tabindex="0">
        <span class="desk-text">Google</span>
        <span class="mob-text">Log in to our Google workspace</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  notWhite: true,
  data() {
    return {
      auth2: null,
    }
  },
  mounted() {
    window.gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = window.gapi.auth2.init({
        client_id: this.$config.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
      })
      this.attachSignin(this.$refs['google-auth'])
    })
  },
  methods: {
    attachSignin(element) {
      this.auth2.attachClickHandler(element, {}, (googleUser) => {
        this.redirect()
      })
    },
    redirect() {
      setTimeout(() => {
        document.location.href =
          'https://workspace.google.com/intl/en_ie/?utm_source=google&utm_medium=cpc&utm_campaign=emea-emeaot-all-en-dr-bkws-all-all-trial-e-t1-1011339&utm_content=text-ad-crnurturectrl-none-DEV_m-CRE_554514900856-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+Google+Workspace+~+Enterprise-KWID_43700067037917965-kwd-967932086382-userloc_9070053&utm_term=KW_google%20workspace%20enterprise-g&gclid=CjwKCAjw8-OhBhB5EiwADyoY1fl8PqoK3Re4XQMGsR905QOSHg_QzwPeklHrF33Gy0_KPufnTHdiexoCqcwQAvD_BwE&gclsrc=aw.ds'
      }, 250)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-page {
  background: $dark-bg;
  display: flex;
  min-height: 95vh;
  font-weight: 500;

  .mob-text {
    display: none;
  }

  &__heading {
    font-weight: 500;
    font-size: 80rem;
    color: #000;
  }

  &__left {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding: 40rem 25rem;
    background-color: $light-bg;
  }

  &__right {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding: 40rem 25rem;
  }

  &__link {
    color: #fff;
    text-decoration: none;
    font-size: 80rem;
    transition: 0.2s all;
    cursor: pointer;

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
  .login-page {
    overflow: auto;
    min-height: 90vh;

    .desk-text {
      display: none;
    }

    .mob-text {
      display: inline;
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
