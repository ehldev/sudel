<template>
  <div class="slide">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide__container bg-dark">
          <div class="slide__col1 d-flex justify-content-center">
            <div class="slide__content text-white px-5 py-md-5 py-lg-0 d-flex flex-column justify-content-center h-100">
              <h3 class="slide__subtitle">SOMOS UN SERVICIO COMPLETO</h3>

              <h2 class="slide__title">SUMINISTROS INDUSTRIALES</h2>

              <nuxt-link to="/" class="btn btn-outline-primary rounded-0 align-self-start mt-3">CONTÁCTANOS</nuxt-link>
            </div>
          </div>

          <div class="slide__col2 position-relative">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2uCzt?ver=eb50&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" alt="" class="slide__image">
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        items: 3
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/variables";

.slide {
  margin-top: 10em;

  &__container {
    width: 100%;
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }

  &__col1 {
    order: 2;
    position: relative;

    @media (min-width: 1024px) {
      order: -1;
    }
  }
  &__col2 {

    &::before {
      background-color: rgba($dark, .4);
      content: '';
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }

  &__content {
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 80%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__title {
    font-size: 1.5em;
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 3em;
    }
  }

  &__subtitle {
    font-size: 1.1em;
  }
}

  .swiper-button-prev,
  .swiper-button-next {
    color: $warning;
  }
</style>
