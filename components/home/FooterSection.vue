<template>
  <div class="footer-section">
    <div class="footer-section__heading">
      <h2>
        <p class="white-title"> Want to work </p>
        <p class="white-title"> together? </p>
        <!-- <div>Request</div> -->
        <div class="deck">
          <!-- <span>2023 deck</span> -->
          <img src="~/assets/images/icons/arrow.svg" alt="->" />
        </div>
      </h2>
    </div>
    <div class="footer-section__form">
      <div v-if="formSent" class="message">
        All done! <br />
        We’ll get back soon
      </div>
      <div v-else-if="error" class="message">
        Something went wrong. Try again later!
      </div>
      <form v-else @submit.prevent="formSubmit">
        <email-field @change="(value) => (email = value)" />
        <button type="submit" class="send-btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import EmailField from '~/components/ui/EmailField.vue'

export default {
  components: { EmailField },
  data() {
    return {
      email: '',
      formSent: false,
      isSending: false,
      error: false,
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) { }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    ...mapActions({
      sendEmail: 'about/sendEmail',
    }),
    async formSubmit() {
      if (this.isSending) return
      this.isSending = true
      try {
        const token = await this.$recaptcha.execute('contact')

        await this.sendEmail({ email: this.email, token })
        this.formSent = true
      } catch {
        this.error = true
      }
      this.isSending = false
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-section {
  min-height: 28vh; // 95vh
  display: flex;
  align-items: stretch;
  overflow-x: auto;

  .deck {
    display: flex;
    align-items: center;

    img {
      flex: 1;
      height: auto;
      max-width: 180rem;
      margin-left: 20rem;
      padding-top: 15rem;
      display: none;
    }
  }

  &__heading {
    width: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40rem 20rem;

    h2 {
      font-weight: 500;
      font-size: $heading-font-size;
    }
  }

  .message {
    font-size: 80rem;
    font-weight: 500;
    font-family: $default-font;
    color: #fff;
    animation: fadeIn 0.3s ease-in;
  }

  &__form {
    width: 50%;
    background-color: $dark-bg;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40rem 20rem;

    form {
      display: flex;
      flex-direction: column;

      button {
        background: transparent;
        border: none;
        font-size: 80rem;
        font-weight: normal;
        font-family: $default-font;
        // color: #fff;
        color: #1A1A1A;
        text-align: left;
        cursor: pointer;
        transition: color 0.2s;
        line-height: 1;
        align-self: flex-start;

        // &:hover,
        // &:focus {
        //   outline: none;
        //   color: lighten(#fff, 20);
        // }
      }
    }
  }

  .white-title {
    color: #fff;
    font-size: 80rem;
    font-weight: 400;
    line-height: 80px;
    text-align: left;

  }

  .footer-section__form {
    background-color: #fff;

    .send-btn {
      font-size: 80rem;
      font-weight: 400;
      line-height: 80px;
      text-align: left;

    }

  }

  .footer-section__heading {
    background-color: #1A1A1A;
  }

}

@include mobile {
  .footer-section {
    &__heading {
      min-width: 95%;
      padding: 80rem 50rem;
    }

    &__form {
      min-width: 95%;
      padding: 80rem 50rem;
    }

    .deck img {
      display: block;
    }
  }
}

@include mobile {
  .footer-section {
    min-height: 420px;

    & &__heading {
      background: $light-bg;
      padding: 40px 20px;

      .white-title {
        color: $dark-bg;
        font-size: 40px;
        line-height: 40px;
      }
    }

    .deck img {
      margin-left: auto;
    }

    & &__form {
      padding: 40px 20px;
      background: $dark-bg;

      .send-btn {
        line-height: 80rem;
        color: $light-bg;
      }
    }
  }
}
</style>
