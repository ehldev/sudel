<template>
<main class="main">
    <section class="container products-list pt-5">
        <h1 class="products-list__title text-center mb-5">{{ slug }}</h1>
    </section>

    <div class="container-fluid px-0">
      <div class="row">
          <div class="col-md-12">
            <section>
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
          </div>
        </div>
    </div>

    <!-- Banner contacto -->
    <banner-contact></banner-contact>

    <form-contact></form-contact>
</main>
</template>

<script>
import BannerCategory from '@/components/home/BannerCategory'
import BannerContact from '@/components/contact/BannerContact'
import FormContact from '@/components/contact/FormContact'

export default {
  validate({ params }) {
      return params.slug ? true : false
  },
  data() {
    return {
      slug: this.$route.params.slug,
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
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadCarousel = true
    }, 1000)
  },
  components: {
      BannerCategory,
      BannerContact,
      FormContact
  },
};
</script>

<style lang="scss">
.main {
    margin-top: 10rem;
}

.products-list {
    &__title {
        font-size: 1.5em;
        font-weight: 800;

        @media (min-width: 1024px) {
        font-size: 2.5em;
        }
    }
}
</style>