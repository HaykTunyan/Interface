<template>
    <div class="investors-hero">
      <h1 class="investors-hero__heading">Services</h1>
    </div>
  </template>

  <style lang="scss" scoped>
  .investors-hero {
    background-image: url('~/assets/images/for-investors/hero.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 95vh;
    padding: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    position: relative;
    &__heading {
      font-weight: 400;
      font-size: $heading-font-size;
      color: #ffffff;
      padding-bottom: 31rem;
      position: relative;
      z-index: 2;
    }

    &::before {
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
  }

  @include mobile {
    .investors-hero {
      background-size: auto 100%;
      background-position: 25% 0;
      min-height: 90vh;
      padding: 40px 20px;

      &__heading {
        font-size: 50px;
        line-height: 50px;
        padding-bottom: 0;
      }
    }
  }
  </style>
