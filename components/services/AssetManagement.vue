<template>
  <div class="asset-management">
    <div class="management-container">
      <div class="asset-header">
        <div class="">
          <h3 class="asset-title">Asset management</h3>
        </div>
        <div class="subtitle-div">
          <p class="asset-substitle">Services to portfolio companies</p>
        </div>
      </div>
      <div class="top-62"></div>
      <div class="asset-body">
        <!-- 1 -->
        <div class="asset-block">
          <div class="block-number">
            <div class="asset-number">01</div>
          </div>
          <div class="block-info">
            <div class="info-title">
              <p>Strategy Planning</p>
              <p>and Decision-making</p>
            </div>
            <div class="info-subtitle">
              <p>
                Strategy development and implementing; <br />
                setting long-term goals
              </p>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="asset-block top-50">
          <div class="block-number">
            <div class="asset-number">02</div>
          </div>
          <div class="block-info">
            <div class="info-title">
              <p>Financial</p>
              <p>Control</p>
            </div>
            <div class="info-subtitle">
              <p>
                Overseeing budgeting; managing financial<br />
                reporting and analysis; ensuring compliance <br />
                with local regulations
              </p>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="asset-block top-50">
          <div class="block-number">
            <div class="asset-number">03</div>
          </div>
          <div class="block-info">
            <div class="info-title">
              <p>Operational</p>
              <p>Oversight</p>
            </div>
            <div class="info-subtitle">
              <p>
                Implementing control over supply chain and <br />
                improving efficiency
              </p>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="asset-block top-50">
          <div class="block-number">
            <div class="asset-number">04</div>
          </div>
          <div class="block-info">
            <div class="info-title">
              <p>Stakeholder</p>
              <p>Management</p>
            </div>
            <div class="info-subtitle">
              <p>
                Managing relationships with investors,<br />
                shareholders, and other stakeholders
              </p>
            </div>
          </div>
        </div>
        <!-- Contact Us -->
         <div class="block-contact">
            <a href="#contact-us" class="btn-contact">
                <span class="contact-text">Contact us</span>
            </a>
         </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.asset-management {
  background: #1a1a1a;
  // height: 95vh;
}

.management-container {
  padding: 50rem 40rem;
  display: flex;
  flex-direction: column;
  .asset-header {
    .asset-title {
      font-size: 52rem;
      // line-height: 30rem;
      font-weight: 400;
      color: #f5f5f5;
      text-transform: uppercase;
    }
    .asset-substitle {
      font-size: 22rem;
      // line-height: 22rem;
      color: #f5f5f5;
    }
    .subtitle-div {
      margin-top: 8rem;
    }
  }
  .top-62 {
    margin-top: 62rem;
  }
  .top-50 {
    margin-top: 25rem;
  }
  .asset-body {
    padding: 0 134rem;
    color: #f5f5f5;

    .block-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 12rem;
      border-bottom: 1px solid #f5f5f5;
    }

    .asset-block {
      display: flex;
      flex-direction: row;
      gap: 46rem;
    }
    .asset-number {
      font-size: 30rem;
      // line-height: 30rem;
      color: #f5f5f5;
      text-transform: uppercase;
    }
    .info-title {
      font-size: 36rem;
      // line-height: 46rem;
      color: #f5f5f5;
      text-transform: uppercase;
    }
    .info-subtitle {
        width: 430rem;
        text-align: left;
      font-size: 20rem;
      // line-height: 24rem;
      color: #f5f5f5;
      display: flex;
      align-items: flex-end;
    }
    .block-contact {
        margin-left: 80rem;
        margin-top: 50rem;
        .btn-contact {
            width: 300rem;
            height: 52;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            background-color: #f5f5f5;
            padding: 14rem 0;
            border: none;
            outline: none;
            text-decoration: none;

            .contact-text {
                font-size: 20rem;
                color: #1A1A1A;
                // line-height: 24rem;
            }
        }
    }
  }
}

@include mobile {
  .management-container {
    padding: 30px 20px 40px;

    .asset-header {
      .asset-title {
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 2px;
      }


      .subtitle-div {
        margin-top: 0;
      }

      .asset-substitle {
        font-size: 16px;
        line-height: 16px;
      }
    }

    .top-62 {
      margin-top: 40px;
    }

    .asset-body {
      padding: 0;

      .block-info {
        flex-direction: column;
        padding-bottom: 16px;

        .info-title {
          font-size: 26px;
          line-height: 26px;
          margin-bottom: 6px;
        }

        .info-subtitle {
          font-size: 14px;
          line-height: 14px;
          width: 100%;
        }
      }

      .block-contact {
        margin-left: 0;
        margin-top: 42px;

        .btn-contact {
          width: 100%;
          padding: 14px;

          .contact-text {
            font-size: 20px;
          }
        }
      }
    }

    .asset-number {
      font-size: 20px;
      line-height: 20px;
    }

    .top-50 {
      margin-top: 42px;
    }
  }
}
</style>
