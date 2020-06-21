<template>
  <div>
    <carousel v-if="loadCarousel"></carousel>

    <!-- Detalles -->
    <section class="banner-details d-flex justify-content-center align-items-center bg-warning text-white text-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">70</h3>
            <span class="lead font-weight-bold text-dark">PROYECTOS</span>
          </div>

          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">70</h3>
            <span class="lead font-weight-bold text-dark">CLIENTES SATISFECHOS</span>
          </div>

          <div class="col-md-3 banner-details__item mb-3 mb-md-0">
            <h3 class="banner-details__title">70</h3>
            <span class="lead font-weight-bold text-dark">PROYECTOS EN MARCHA</span>
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
              <i class="fas fa-handshake"></i>
            </span>

            <h3>VISIÓN</h3>
            <p>
              Ser el socio estrategico en el abastecimiento de suministros industriales de las empresas peruanas.
            </p>
          </div>
        </div>

        <div class="col-md-5">
          <div>
            <span class="icon icon--mission text-dark">
              <i class="fas fa-handshake"></i>
            </span>

            <h3>MISIÓN</h3>
            <p>
              Brindar un servicio de calidad, comprometiendonos a lograr sus objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Banners de categoría -->
    <section>
      <div class="d-md-none">
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

    <!-- Banner contacto -->
    <banner-contact></banner-contact>

    <clients></clients>

    <form-contact></form-contact>
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel'
import BannerCategory from '@/components/home/BannerCategory'
import Clients from '@/components/home/Clients'
import BannerContact from '@/components/contact/BannerContact'
import FormContact from '@/components/contact/FormContact'

export default {
  data() {
    return {
      loadCarousel: false,
      categories: [
        {
          image: 'https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/20141229094337oeynuf.jpg'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2020/03/12/07/55/city-4924252_960_720.jpg'
        },
        {
          image: 'https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/20141229094337oeynuf.jpg'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2020/03/12/07/55/city-4924252_960_720.jpg'
        }
      ],
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
    }, 3000)
  },
  components: {
    Carousel,
    BannerCategory,
    BannerContact,
    Clients,
    FormContact
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
