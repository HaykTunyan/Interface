<template>
  <div class="hotel-section">
    <!-- <div
      class="section-img"
      :style="{ backgroundImage: `url(${backgroundImage})` , transform: 'scale(1)' }"
    >
    
    </div> -->
    <!-- <div
      class="section-img"
      :style="{ backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/47ef3ec5-7c7a-420d-afbc-12a8b830a75d/project/a78f4a4c-b15a-4e00-9a1f-b3188f10a35b.webp')` }"
    >
    
    </div> -->

    <div
      class="section-img"
      :class="{
        current: itemHove === 0,
      }"
      :style="{
        backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/47ef3ec5-7c7a-420d-afbc-12a8b830a75d/project/a78f4a4c-b15a-4e00-9a1f-b3188f10a35b.webp')`,
        opacity: activeImg === 0 ? '1' : '',
        filter: activeImg === 0 ? 'none' : '',
        // transition: 'opacity 0.3s ease',
      }"
    ></div>

    <div
      class="section-img"
      :class="itemHove === 1 ? 'current' : null"
      :style="{
        backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/a3427174-5302-4d2d-b1d2-46b72eab5439/project/eed0b02a-5c1e-43a6-89e3-af246301a1ca.webp')`,
        opacity: activeImg === 1 ? '1' : null,
        filter: activeImg === 1 ? 'none' : '',
        // transition: 'opacity 0.3s ease',
      }"
    ></div>

    <div
      class="section-img"
      :class="itemHove === 2 ? 'current' : null"
      :style="{
        backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/12317581-72dc-4936-b07b-1c1fbb227d67/project/c20c5cda-e1f9-4c90-b8eb-8f82b1ffa529.webp')`,
        opacity: activeImg === 2 ? '1' : '',
        filter: activeImg === 2 ? 'none' : '',
        // transition: 'opacity 0.3s ease',
      }"
    ></div>

    <div
      class="section-img"
      :class="itemHove === 3 ? 'current' : null"
      :style="{
        backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/c82cc8e9-9364-49aa-818d-f0497d3189b8/project/722dd159-cd58-46f8-8d2d-fc1e2cb3601a.webp')`,
        opacity: activeImg === 3 ? '1' : '',
        filter: activeImg === 3 ? 'none' : '',
        // transition: 'opacity 0.3s ease',
      }"
    ></div>

    <!-- <div
      class="section-img"
      :class="itemHove === 4 ? 'current' : null"
      :style="{
        backgroundImage: `url('https://media-advanza.advanza.am/advanza.devpub/c82cc8e9-9364-49aa-818d-f0497d3189b8/project/722dd159-cd58-46f8-8d2d-fc1e2cb3601a.webp')`,
        opacity: activeImg === 4 ? '1' : '',
        filter: activeImg === 4 ? 'none' : '',
        // transition: 'opacity 0.3s ease',
      }"
    ></div> -->

    <div class="grid-container">
      <!--  @mouseenter="changeBackground(item.imgUrl)" -->

      <!-- @mouseenter="changeImageIndex(item.id)" -->
      <div
        v-for="item in hotelItems"
        :key="item.id"
        class="grid-item"
        @mouseenter="changeImageIndex(item.id)"
        @click="handleButtonClick(item.id)"
        @mouseleave="resetBackground"
      >
        <div
          class="left-more"
          @mouseenter="!isDisabled && changeImageIndex(item.id)"
          @click.stop="handleLeftItem(item.id)"
        >
          <img src="~/assets/images/icons/arrow-left.svg" alt="Arrow-left" />
        </div>

        <div class="item-div">
          <div
            class="hover-div"
            @mouseenter.stop
            :style="{
              backgroundColor:
              itemHove === item.id ? 'transparent' : 'transparent',
            }"
          >
            <div class="item-info">
              <div class="subtitle-div">
                <span class="item-subtitle">{{ item.subTitle }}</span>
              </div>
              <div class="title-div">
                <p class="item-title">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="more"
          @mouseenter="!isDisabled && changeImageIndex(item.id)"
          @click.stop="handelRightItem(item.id)"
        >
          <img src="~/assets/images/icons/arrow-right.svg" alt="Arrow-Right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Thumbs, Mousewheel } from 'swiper'
import { ref } from 'vue'

const isDisabled = ref(false)

Swiper.use([Thumbs, Mousewheel])

export default {
  data() {
    return {
      hotelItems: [
        {
          id: 0,
          subTitle: 'Hotel complex',
          title: 'Dilijani Tun',
          zIndex: '10',
          itemHove: '0',
          imgUrl:
            'https://media-advanza.advanza.am/advanza.devpub/47ef3ec5-7c7a-420d-afbc-12a8b830a75d/project/a78f4a4c-b15a-4e00-9a1f-b3188f10a35b.webp',
          altUrl: '1.webp',
        },
        {
          id: 1,
          subTitle: 'Luxury suites',
          title: 'Dilijani Tun 3',
          zIndex: '10',
          itemHove: '1',
          imgUrl:
            'https://media-advanza.advanza.am/advanza.devpub/a3427174-5302-4d2d-b1d2-46b72eab5439/project/eed0b02a-5c1e-43a6-89e3-af246301a1ca.webp',
          altUrl: '2.webp',
        },
        {
          id: 2,
          subTitle: 'Ocean view rooms',
          title: 'KUWA',
          zIndex: '10',
          itemHove: '2',
          imgUrl:
            'https://media-advanza.advanza.am/advanza.devpub/12317581-72dc-4936-b07b-1c1fbb227d67/project/c20c5cda-e1f9-4c90-b8eb-8f82b1ffa529.webp',
          altUrl: 'kuwa.webp',
        },
        {
          id: 3,
          subTitle: 'Multifunctional facility',
          title: 'Arev Ser',
          zIndex: '10',
          itemHove: '3',
          imgUrl:
            'https://media-advanza.advanza.am/advanza.devpub/c82cc8e9-9364-49aa-818d-f0497d3189b8/project/722dd159-cd58-46f8-8d2d-fc1e2cb3601a.webp',
          altUrl: '2.webp',
        },
      ],
      backgroundImage: '',
      zIndex: '1',
      itemHove: 0,
      activeImg: null,
      hoveBg: 0,
    }
  },
  methods: {
    changeBackground(imgUrl) {
      this.backgroundImage = imgUrl
      this.activeImg = null
    },
    changeImageIndex(index) {
      this.itemHove = index
      this.activeImg = index
    },
    resetBackground() {
      this.backgroundImage = this.hotelItems[0].imgUrl
      this.activeImg = null
    },
    handleButtonClick(itemId) {
      this.activeImg = itemId
    },

    handelRightItem() {

    isDisabled.value = true;

    if (this.activeImg < this.hotelItems.length - 1) {
      this.activeImg += 1;
      this.itemHove = this.activeImg
    } else {
      this.activeImg = 0; 
      this.itemHove = this.activeImg
    }

    this.itemHove = this.activeImg;

    setTimeout(() => {
      isDisabled.value = false;
    }, 700); 
  },


  handleLeftItem() {
    isDisabled.value = true;


    if (this.activeImg > 0) {
      this.activeImg -= 1;
      this.itemHove = this.activeImg
    } else {
      this.activeImg = this.hotelItems.length - 1;
      this.itemHove = this.activeImg
    }

    this.itemHove = this.activeImg;

 
    setTimeout(() => {
      isDisabled.value = false;
    }, 700); 
  }


  },
  mounted() {
    this.backgroundImage = this.hotelItems[0].imgUrl
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
.hotel-section {
  min-height: 95vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: black;
  // transition: background 0.3s, border 0.3s , border-radius 0.3s, box-shadow 0.3s ;

  .section-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transition: all 0.7s;
    transform: scale(1.1, 1.1);
    opacity: 0;
    filter: grayscale(100%);

    &.current {
      transform: scale(1);
      opacity: 0.6;
      background-color: rgba(0, 0, 0, 0.2);
      // transition: opacity 0.7s, transform 0.7s;
    }

    &.current:hover {
      opacity: 0.6;
      background-color: rgba(0, 0, 0, 0.2);
    }

    // &.current:active {
    //   opacity: 1;
    // }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  }

  // @keyframes gradientAnimation {
  //   from {
  //     transform: scale(1.2);
  //   }
  //   to {
  //   }
  // }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 95vh;
  }

  .grid-item {
    text-align: center;
    border-left: 0.05px #ffffff;
    border-right: 0.05px solid #ffffff;
    cursor: pointer;
    height: 100%;
    overflow: hidden;
    z-index: 2;

    .grid-item:first-child {
      border-left: none !important;
      border-left: 0 !important;
    }

    .grid-item:last-child {
      border-right: none !important;
      border-right: 0 !important;
    }

    .item-div {
      position: relative;

      .subtitle-div {
        text-align: left;

        .item-subtitle {
          font-size: 14px;
          line-height: 20px;
          color: #f5f5f5;
        }
      }

      .title-div {
        margin-top: 16px;
        text-align: left;

        .item-title {
          font-size: 40px;
          line-height: 40px;
          color: #f5f5f5;
        }
      }
    }

    .more {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.14);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 24px;
      right: 24px;
      z-index: 100;
    }

    .more::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      // background: rgba(255, 255, 255, 0.154);
      border-radius: 50%;
    }

    .left-more {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.14);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 24px;
      left: 24px;
      z-index: 100;
    }

    .left-more::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      // background: rgba(255, 255, 255, 0.154);
      border-radius: 50%;
    }

    .item-info {
      padding: 25px 23px;
      z-index: 9;
      height: 110px;
    }

    .hover-div {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0;
      transition: height 0.5s ease, opacity 0.5s ease;
      z-index: 10;
    }

    &:hover .hover-div {
      height: 130px;
      opacity: 1;
      // background-color: rgba(0, 0, 0, 0.8);
    }

    .item-div {
      position: relative;
      z-index: 2;
      /* Ensure text is above hover div */
    }

    .item-subtitle,
    .item-title {
      color: #fff;
      /* Text color for better visibility */
    }
  }
}
</style>
