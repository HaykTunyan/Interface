<!-- We offer Team Section -->


<!-- We Offer Section  -->

<template>
    <div class="we-offer-team">
        <div class="offer-image">
            <div class=" full-div">
                <img src="~/assets/images/about/banner-team.jpg" alt="Banner-Team" class="full-image" />
            </div>
        </div>
        <div class="offer-info">
            <div class="info-head">
                <p class=""> WHO WE ARE </p>
            </div>
            <div style="margin-top: auto"></div>
            <div class="info-footer">
                <div class="flex-col">
                    <p class="text-asset">TEAM</p>
                </div>
                <div style="margin-top: 24rem;"></div>
                <div class="flex-col">
                    <p class="text-goals"> has extensive experience in market </p>
                    <p class="text-goals"> analysis, financial modelling, and deal </p>
                    <p class="text-goals"> analysis, working closely with clients to </p>
                    <p class="text-goals"> develop effective business models</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style lang="scss" scoped>
.we-offer-team {
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
        height: 105.1vh !important;
        overflow: hidden;
    }

    .full-image {
        width: 100%;
        height: 100%;
        min-height: 100%;
        object-fit: cover;
    }

}

.offer-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: #1A1A1A;
    color: #F5F5F5;
    padding: 50px 40px;

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
  .we-offer-team {
    height: auto;

    .offer-image {
      display: none;
    }

    .offer-info {
      width: 100%;
      padding: 30px 20px;
      background: #BDBDBD;
      color: $dark-bg;
    }

    .info-head {
      display: none;
    }

    .text-asset {
      text-align: left;
      font-size: 36px;
      line-height: 36px;
    }

    .text-goals {
      text-align: left;
      font-size: 26px;
      line-height: 26px;
      display: inline;
    }
  }
}
</style>
