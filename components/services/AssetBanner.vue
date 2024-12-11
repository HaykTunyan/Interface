<template>
  <div class="asset-banner">
    <div class="offer-image">
      <div class="full-div">
        <img
          src="~/assets/images/services/asset-banner-one.png"
          alt="Asset-Banner-One"
          class="full-image"
        />
      </div>
    </div>
    <div class="offer-image">
      <div class="full-div">
        <img
          src="~/assets/images/services/asset-banner-two.png"
          alt="Asset-Banner-Two"
          class="full-image"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.asset-banner {
  min-height: 30vh;
  height: 30vh;
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
    height: 100%;
    overflow: hidden;
  }

  .full-image {
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}

@include mobile {
  .asset-banner {
    min-height: 240px;
    height: 240px;
    .offer-image {
      width: 100%;
      &:last-child {
        display: none;
      }
    }
  }
}
</style>
