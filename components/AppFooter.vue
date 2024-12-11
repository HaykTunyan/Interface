<template>
  <div class="app-footer">
    <div class="app-footer__links">
      <div class="app-footer__socials">
        <a href="https://www.instagram.com/deepwhite.am">Instagram</a>
        <a href="https://www.facebook.com/deepwhite.am">Facebook</a>
        <a href="https://www.linkedin.com/company/deepwhitecompany">LinkedIn</a>
      </div>
      <a href="mailto:admin@deepwhite.am">admin@deepwhite.am</a>
      <a href="tel:+37494586620">(+374) 94 586620</a>
    </div>
    <div class="app-footer__copyright">
      <div style="display: flex ; flex-direction: column; justify-content: end; ">
        <p>© 2022 DeepWhite</p>
        <p style="font-size: 12px; margin-top: 8px;  text-align: end; color: #F5F5F5; "> Կայքը պատկանում է «ԴիփՈուայթ» ՍՊԸ-ին</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-footer {
  min-height: 50vh;
  padding: 70rem 25rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: $dark-bg;
  font-size: 60rem;
  color: #fff;
  font-weight: normal;

  &__links {
    display: flex;
    flex-direction: column;

    a {
      margin-top: 32rem;
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__socials {
    font-size: 40rem;
    line-height: 40rem;

    a {
      display: inline-flex;
      align-items: center;
      margin-right: 36rem;

      &::after {
        content: '';
        width: 40rem;
        height: 40rem;
        min-width: 40rem;
        background-image: url('@/assets/images/icons/arrow-up-right.svg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
    }
  }
}

@include mobile {
  .app-footer {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    &__copyright {
      margin-top: 32rem;
    }

    &__socials {
      order: 4;
      display: flex;
      flex-direction: column;
      margin: 40px 0;
      font-size: 26px;
      line-height: 26px;
    }
  }
}
</style>
