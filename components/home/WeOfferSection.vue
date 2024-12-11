<!-- We Offer Section  -->

<template>
  <div class="we-offer">
    <div class="offer-image">
      <div class="full-div">
        <img
          src="~/assets/images/home/rectangle-left.png"
          alt="Rectangle-Left"
          class="full-image"
        />
      </div>
    </div>
    <div class="offer-info">
      <div class="info-head">
        <p class="">WE OFFER</p>
      </div>
      <div style="margin-top: auto"></div>
      <div class="info-body">
        <div class="flex-col">
          <p class="text-asset">Asset</p>
          <p class="text-asset">Management</p>
        </div>
        <div style="margin-top: 20rem"></div>
        <div class="flex-col">
          <p class="text-goals">operate your money efficiently to</p>
          <p class="text-goals">achieve business goals</p>
        </div>
      </div>
      <div style="margin-top: auto"></div>
      <div class="info-footer">
        <div class="flex-col">
          <p class="text-asset">Consulting</p>
        </div>
        <div style="margin-top: 20rem"></div>
        <div class="flex-col">
          <p class="text-goals">high-quality analytical</p>
          <p class="text-goals">products for decision-making</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.we-offer {
  min-height: calc(95vh - 80px);
  height: calc(95vh - 80px);
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.offer-image {
  width: 50%;

  .object-image {
    width: 100%;
    height: auto;

    img {
      width: 100%;
    }
  }

  .full-div {
    width: 100%;
    height: 955px !important;
    overflow: hidden;
  }

  .full-image {
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }
}

.offer-info {
  width: 50%;
  background-color: #1a1a1a;
  color: #f5f5f5;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;

  .info-head {
    display: flex;
    justify-content: flex-end;
    font-size: 22rem;
    line-height: 22rem;
  }

  .text-asset {
    font-size: 60rem;
    font-weight: 400;
    line-height: 60rem;
    text-align: right;
    text-transform: uppercase;
  }

  .text-goals {
    font-size: 40rem;
    font-weight: 400;
    line-height: 40rem;
    text-align: right;
  }
}

@include mobile {
  .we-offer {
    flex-direction: column;
    min-height: auto;
    height: auto;

    .offer-image {
      width: 100%;
      height: 240px;
      overflow: hidden;

      .full-div {
        height: 500px !important;
      }
    }

    .offer-info {
      width: 100%;
      padding: 30px 20px 40px;

      .info-head {
        justify-content: flex-start;
        font-size: 12px;
        margin-bottom: 42px;
      }

      .text-asset {
        text-align: left;
      }

      .text-goals {
        text-align: left;
      }

      .info-footer {
        margin-top: 62px;
      }
    }
  }
}
</style>
