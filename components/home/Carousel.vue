<template>
  <div class="slide" v-if="sliders">
    <client-only>
      <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide__container">
          <div class="slide__col1 d-flex justify-content-center">
            <div class="slide__content text-white px-5 py-md-5 py-lg-0 d-flex flex-column justify-content-center h-100">
              <div class="slide__subtitle" v-html="item.node.content"></div>

              <h2 class="slide__title ml-0">{{ item.node.title }}</h2>

              <nuxt-link to="/" class="btn btn-outline-primary rounded-0 align-self-start mt-3">CONTÁCTANOS</nuxt-link>
            </div>
          </div>

          <div class="slide__col2 position-relative">
            <img :src="item.node.imagendestacada.imagen.sourceUrl" :alt="item.node.imagendestacada.imagen.altText" class="slide__image">
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </client-only>
  </div>
</template>

<script>
  import sliders from '@/apollo/queries/sliders'

  export default {
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    apollo: {
      sliders: {
        query: sliders
      }
    },
    computed: {
      items: function () {
        if(this.sliders) {
          return this.sliders.edges
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/variables";

.slide {
  margin-top: 9em;

  &__container {
    background-color: rgba($dark, .95);
    width: 100%;
    height: 77vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    @media (min-width: 1024px) {
      height: 50vh;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    @media (min-width: 1200px) {
      height: 80vh;
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
    position: relative;
    z-index: 1000;

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
      font-size: 2.3em;
    }
  }

  &__subtitle {
    h2,
    h3 {
      font-size: 1.1em !important; // Para cambiar el tamaño de Wordpress
    }
  }
}

  .swiper-button-prev,
  .swiper-button-next {
    color: $warning;
  }
</style>
