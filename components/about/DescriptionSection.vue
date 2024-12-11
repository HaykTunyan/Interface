<template>
  <div class="description-section">
    <div class="description-section__subtitle">WHO WE ARE</div>
    <h2 class="description-section__title">Company</h2>
    <p>
      DeepWhite is an asset management and consulting company based in Armenia, specializing in the creation of innovative and sustainable investment projects in sectors such as construction, HoReCa (hospitality and catering), recreation, and education.
      <br><br>
      The company is focuses on developing long-term, stable projects aimed at growth and sustainable development.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.description-section {
  padding: 50rem 40rem;
  background: #BDBDBD;
  font-size: 40rem;
  line-height: 1;

  &__title {
    display: none;
  }

  &__subtitle {
    display: none;
  }
}

@include mobile {
  .description-section {
    padding: 30px 20px;
    font-size: 26px;
    line-height: 26px;

    &__subtitle {
      display: block;
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 42px;
    }

    &__title {
      display: block;
      text-transform: uppercase;
      font-size: 36px;
      line-height: 36px;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }
}
</style>
