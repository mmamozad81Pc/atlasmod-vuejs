<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="../assets/img/1.jpg" alt="1">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/2.jpg" alt="2">
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.slide-image {
  width: 100%;
  height: 90vh;
  position: relative;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: "next";
  font-size: 24px;
  color: gray;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "prev";
  font-size: 24px;
  color: gray;
}
</style>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>


