<template>
  <div v-if="page">
    <carousel v-if="loadCarousel"></carousel>

    <!-- Detalles -->
    <section class="banner-details d-flex justify-content-center align-items-center bg-warning text-white text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">{{ page.inicio.numero1 }}</h3>
            <span class="lead font-weight-bold text-dark">{{ page.inicio.titulo1 }}</span>
          </div>

          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">{{ page.inicio.numero2 }}</h3>
            <span class="lead font-weight-bold text-dark">{{ page.inicio.titulo2 }}</span>
          </div>

          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">{{ page.inicio.numero3 }}</h3>
            <span class="lead font-weight-bold text-dark">{{ page.inicio.titulo3 }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Misión y visión -->

    <div class="container py-5 mission">
      <div class="row justify-content-center text-center">
        <div class="col-md-5">
          <div>
            <span class="icon icon--mission text-dark">
              <i :class="page.inicio.iconoVision"></i>
            </span>

            <h3>VISIÓN</h3>
            <p>
              {{ page.inicio.descripcionVision }}
            </p>
          </div>
        </div>

        <div class="col-md-5">
          <div>
            <span class="icon icon--mission text-dark">
              <i :class="page.inicio.iconoMision"></i>
            </span>

            <h3>MISIÓN</h3>
            <p>
              {{ page.inicio.descripcionMision }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Banners de categoría -->
    <section v-if="productCategories">
      <div class="d-md-none" v-if="loadCarousel">
        <swiper class="swiper" :options="swiperOptionCategories">
          <swiper-slide v-for="(item, index) in categories" :key="index">
            <banner-category :item="item"></banner-category>
          </swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <div class="d-none d-md-block">
        <banner-category v-for="(item, index) in categories" :key="index" :item="item"></banner-category>
      </div>
    </section>

    <clients></clients>

    <form-contact :bgBanner="page.inicio.fondo1.sourceUrl"></form-contact>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel'
import BannerCategory from '@/components/home/BannerCategory'
import Clients from '@/components/home/Clients'
import FormContact from '@/components/contact/FormContact'

// Queries
import page from '@/apollo/queries/page'
import productCategories from '@/apollo/queries/productCategories'

export default {
  data() {
    return {
      loadCarousel: false,
      swiperOptionCategories: {
        slidesPerView: 1,
        freeMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadCarousel = true
    }, 1000)
  },
  apollo: {
    productCategories: {
      prefetch: true,
      query: productCategories
    },
    page: {
      prefetch: true,
      query: page
    }
  },
  components: {
    Carousel,
    BannerCategory,
    Clients,
    FormContact
  },
  computed: {
    categories: function () {
      if(this.productCategories) {
        return this.productCategories.edges
      }
    }
  }
}
</script>

<style lang="scss">
  .banner-details {
    min-height: 300px;

    @media (min-width: 1024px) {
      min-height: 200px;
    }

    &__item {

      &:hover .banner-details__title{

        font-size: 2.5em;

        @media (min-width: 1024px) {
          font-size: 4em;
        }

      }

    }

    &__title {
      font-size: 2em;
      font-weight: 800;

      transition: font-size .3s;

      @media (min-width: 1024px) {
        font-size: 3.8em;
      }
    }
  }

  .icon--mission {
    font-size: 3em;
  }
</style>
