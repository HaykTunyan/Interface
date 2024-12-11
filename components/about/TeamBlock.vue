<template>
  <!-- ${member.color} -->
  <div class="team-block" :style="`background: #1A1A1A`">
    <!-- <div class="list-image" v-for="image in imageList" :key="image.id">
      <img :src="image.img" :alt="image.alt" />
    </div> -->

    <div class="list-image">
      <img :src="member.img" :alt="member.alt" />
    </div>

    <div class="team-block__info">
      {{ member.title }} <br />
      <span class="team-block__pos">{{ member.position }}</span>
    </div>

    <!-- <div v-if="member.file" class="team-block__image">
      <img :src="member.file.location" alt="Member picture" />
    </div> -->
    <!-- <div class="team-block__info">
      {{ $getText(member.nameTranslation) }} <br />
      <span class="team-block__pos">{{ $getText(member.positionTranslation) }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
    // imageList: {
    //   type: Array,
    //   required: true,
    // },
  },

  data() {
    return {
      imageList: [
        {
          id: 0,
          img: require('~/assets/images/about/persion-one.png'),
          alt: 'Persion-One',
        },
        {
          id: 1,
          img: require('~/assets/images/about/persion-two.png'),
          alt: 'Persion-Two',
        },
        {
          id: 2,
          img: require('~/assets/images/about/persion-three.png'),
          alt: 'Persion-Three',
        },
        {
          id: 3,
          img: require('~/assets/images/about/persion-four.png'),
          alt: 'Persion-Four',
        },
        {
          id: 4,
          img: require('~/assets/images/about/persion-five.png'),
          alt: 'Persion-Five',
        },
        {
          id: 5,
          img: require('~/assets/images/about/persion-six.png'),
          alt: 'Persion-Six',
        },
        {
          id: 6,
          img: require('~/assets/images/about/persion-seven.png'),
          alt: 'Persion-Seven',
        },
        {
          id: 7,
          img: require('~/assets/images/about/persion-eght.png'),
          alt: 'Persion-Eght',
        },
        {
          id: 8,
          img: require('~/assets/images/about/persion-nine.png'),
          alt: 'Persion-Nine',
        },
      ],
    }
  },

  methods: {
   
    getImageByMemberId(id) {
      const imageIndex = (id - 1) % this.imageList.length 
      return this.imageList[imageIndex].img
    },

    getImageAltByMemberId(id) {
      const imageIndex = (id - 1) % this.imageList.length
      return this.imageList[imageIndex].alt
    },
  },

  mounted() {
    
  },
}
</script>

<style lang="scss" scoped>
.team-block {
  display: flex;
  height: 865px;
  width: 100%;
  background: $gray;
  position: relative;
  font-weight: 500;
  border-left: 0.5px solid #7c8387;
  border-right: 0.5px solid #7c8387;
  // 
  &__info {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 185px;
    padding: 45px 35px;  // 35rem 25rem
    font-size: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    mix-blend-mode: difference;
  }

  &__pos {
    font-weight: normal;
    font-size: 25rem;
  }

  // &__image {
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   overflow: hidden;

  //   img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //   }
  // }
}

.team-block__pos {
  margin-top: 10px;
  font-size: 30px;
  line-height: 30px;
  font-weight: normal;
}

.list-image {
  width: 100%;
  height: 680px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
