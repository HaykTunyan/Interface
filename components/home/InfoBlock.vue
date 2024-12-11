<template>
  <div
    class="info-block white-black"
    :style="{
      'background-color': background,
      'background-image': `url(${img})`,
      '--text-color': textColor,
    }"
  >
    <h2 class="info-block__heading" :style="{ color: textColor }">
      <span class="swiper-no-swiping">
        {{ title }}
      </span>
    </h2>
    <button
      v-if="!noBtn"
      class="info-block__view"
      :style="{ 'border-color': textColor }"
      @click="$emit('view')"
    >
      <svg
        v-if="arrow"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM31.4142 22.5858L30 21.1716L27.1716 24L28.5858 25.4142L39.1716 36L28.5858 46.5858L27.1716 48L30 50.8284L31.4142 49.4142L43.4142 37.4142L44.8284 36L43.4142 34.5858L31.4142 22.5858Z"
          :fill="textColor"
        />
      </svg>
      <svg
        v-else
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM36 20C34 20 34 20 34 20.0001V34H20.0001C20 34 20 34 20 36C20 38 20.0004 38 20.0005 38H34V51.9999C34 52 34 52 36 52C38 52 38 51.9991 38 51.999V38H51.9999C52 38 52 38 52 36C52 34 51.9996 34 51.9995 34H38V20.0001C38 20 38 20 36 20Z"
          :fill="textColor"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: '#F5F5F5',
    },
    background: {
      type: String,
      default: '#1A1A1A',
    },
    noBtn: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: '',
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.info-block {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 56rem 45rem 56rem 25rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  &__heading {
    font-size: $heading-font-size;
    font-weight: normal;
  }

  &__view {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72rem;
    min-width: 72rem;
    height: 72rem;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 0 0 0 var(--text-color);
    transition: 0.2s box-shadow;
    margin-left: 24rem;

    svg {
      width: 100%;
      height: 100%;
      transform: scale(1.01);
    }

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5rem var(--text-color);
    }
  }
}

@include mobile {
  .info-block {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 80rem 50rem;

    &__view {
      margin-top: 48rem;
      margin-left: 0;
    }
  }
}

// Change Landing UI style.

.swiper-no-swiping {
  font-size: 52rem !important;
}
</style>
