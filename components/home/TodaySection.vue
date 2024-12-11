<!-- WE ARE TODAY Component -->

<template>
    <div class="today-section">
        <div class="today-flex">
            <div class="today-head">
                <h4 class="head-title"> WE ARE TODAY </h4>
            </div>
            <div class="today-body">
                <div class="body-info">
                    <div class="info-text">
                        <p class="info-dynamic">Dynamic</p>
                        <p class="info-dynamic">perspective</p>
                    </div>
                </div>
                <div class="body-prices">
                    <div class="prices-info">
                        <div class="flex-col left-text">
                            <div class="price-title">
                                $39M
                            </div>
                            <div class="price-subtitle">
                                <p>Assets</p>
                                <p>under management</p>
                            </div>
                        </div>
                        <div class="flex-col left-text">
                            <div class="price-title">
                                18
                            </div>
                            <div class="price-subtitle">
                                <p>Portfolio </p>
                                <p>companies</p>

                            </div>
                        </div>
                        <div class="flex-col left-text">
                            <div class="price-title">
                                50+
                            </div>
                            <div class="price-subtitle">
                                <p>Consulting projects </p>
                                <p>delivered since 2022</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



</script>


<style lang="scss" scoped>
.today-section {
    // min-height: 35vh;
    // height: 35vh;
    display: flex;
    background-color: #BDBDBD;
    padding: 40px 50px;
}

.today-flex {
    display: flex;
    flex-direction: column;
    width: 100%;

    .today-head {
        display: flex;
        justify-content: flex-start;


        .head-title {
            color: #000000;
            font-size: 24px;
            font-weight: 400;
                // 3px 3px 0px #aaa,
                // 4px 4px 0px #aaa,
                // 5px 5px 0px #aaa;


        }
    }

    .today-body {
        margin-top: 88px;
        display: flex;
        justify-content: space-between;

        .body-info {
            display: flex;
            flex-direction: column;
            width: 50%;

            .info-text {
                display: flex;
                flex-direction: column;
                padding-top: 38px;

                .info-dynamic {
                    color: #000000;
                    font-weight: 400;
                    font-size: 60rem;
                    line-height: 60px;
                    text-align: left;
                    text-transform: uppercase;
                    text-shadow: 0px 4px 4px 0px #00000040;

                }
            }

        }

        .body-prices {
            border-top: 1px solid #1A1A1A;
            padding-top: 20px;
            width: 50%;

            .prices-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .price-title {
                color: #1A1A1A;
                font-size: 80rem;
                font-weight: 400;
                line-height: 80px;
                text-align: left;
            }

            .price-subtitle {
                margin-top: 8px;
                color: #1A1A1A;
                font-size: 24rem;
                font-weight: 400;
                line-height: 24px;
                text-align: left;
            }

        }

    }

    .flex-col {
        display: flex;
        flex-direction: column;

    }

    .left-text {
        text-align: left;
    }

}

@include mobile {
  .today-section {
    padding: 40px 20px;
  }

  .today-flex {
    .today-head .head-title {
      font-size: 12px;
    }
    .today-body {
      margin-top: 42px;
      flex-direction: column;

      .body-info {
        width: 100%;

        .info-text {
          padding-top: 0;
          .info-dynamic {
            font-size: 36px;
            line-height: 36px;
          }
        }
      }

      .body-prices {
        border-top: none;
        width: 100%;
        padding-top: 20px;

        .prices-info {
          flex-direction: column;
          align-items: flex-start;

          .flex-col {
            max-width: 240px;
            width: 100%;
            border-bottom: 1px solid $dark-bg;
            margin-bottom: 17px;
            padding-bottom: 10px;

            &:last-child {
              border-bottom: 0;
              padding-bottom: 0;
              margin-bottom: 0;
            }

            .price-title {
              font-size: 30px;
              line-height: 30px;
              margin-bottom: 4px;
            }

            .price-subtitle {
              margin-top: 0;
              font-size: 10px;
              line-height: 10px;
            }
          }
        }
      }
    }
  }

}
</style>
