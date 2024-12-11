<template>
    <div class="consulting-banner">
      <div class="offer-image">
        <div class="full-div">
          <img
            src="~/assets/images/services/consulting-image.png"
            alt="Consulting-Image"
            class="full-image"
          />
        </div>
      </div>
    </div>
  </template>

  <script></script>

  <style lang="scss" scoped>
  .consulting-banner {
    min-height: calc(95vh - 100px);
    height: calc(95vh - 100px);
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }

  .offer-image {
    width: 100%;

    .object-image {
      width: 100%;
      height: auto;

      img {
        width: 100%;
      }
    }

    .full-div {
      width: 100%;
      height: 130.1vh !important;
      overflow: hidden;
    }

    .full-image {
      width: 100%;
      height: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  </style>
