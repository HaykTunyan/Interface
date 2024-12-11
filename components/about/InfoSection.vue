<template>
  <div class="info-hero">
    <div class="info-hero__left">
      <div class="info-hero_text">
        Our core values of INNOVATION, FREEDOM, TRANSPARENCY, and INTEGRATION
        unite us in our pursuit of excellence and sustainable growth, reflecting
        our dedication to integrity and a shared future.
      </div>
    </div>
    <div class="info-hero__right">
      <div class="info-hero_text">
        We create a safe and innovative environment that fosters collaboration,
        bringing projects to life and challenging the status quo for a healthier
        future. Our vision is to foster synergy among diverse perspectives,
        talents, and characters for a harmonious lifestyle.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-hero {
  display: flex;
  min-height: 95vh;

  &__left {
    background: $primary-beige;
    color: $primary-green;
    width: 50%;
    padding: 56rem 25rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  &__right {
    background: $primary-green;
    color: $primary-beige;
    width: 50%;
    padding: 56rem 25rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  &__heading {
    font-size: 60rem;
    font-weight: normal;
    margin-bottom: 20rem;
  }

  &_text {
    font-size: 40rem;
    font-weight: normal;

    ul {
      list-style-type: disc;
      padding-left: 40rem;
    }

    li:not(:last-child) {
      margin-bottom: 15rem;
    }
  }
}

@include mobile {
  .info-hero {
    min-height: auto;
    flex-direction: column;

    &__right,
    &__left {
      width: 100%;
      min-height: 95vh;
    }

    &__heading {
      font-size: 80rem;
    }

    &_text {
      font-size: 60rem;
    }
  }
}
</style>
