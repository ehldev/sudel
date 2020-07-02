<template>
  <header class="header fixed-top">

    <div class="header__top bg-dark py-1 py-md-3">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between text-white text-center text-md-left">
          <div class="d-flex flex-column flex-md-row">
            <span class="mr-3 mb-1 mb-md-0">
              <i class="fas fa-phone-alt"></i>
              {{ info.telefono }} - {{ info.celular }}
            </span>

            <span class="mr-3">
              <i class="fas fa-envelope"></i>
              <a :href="`mailto:${info.correo}`" class="text-white">{{ info.correo }}</a>
            </span>
          </div>

          <div class="mt-1 mt-md-0">
            <a :href="info.facebook" target="_blank" class="text-white header__icon mr-1">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a :href="info.whatsapp" target="_blank" class="text-white header__icon">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <b-navbar toggleable="lg" type="white" class="bg-white py-3">

      <div class="container">
        <nuxt-link to="/" class="header__image-container">
          <img src="https://administrador.sudel.com.pe/wp-content/uploads/2020/06/SUDEL-LOGO.png" alt="Logo Sudel" class="header__image">
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse" class="text-dark">
          <span class="font-weight-bold">
            <i class="fas fa-align-justify"></i>
          </span>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto text-center">

            <nuxt-link class="header__link ml-3 mb-2 mb-lg-none" to="/">Inicio</nuxt-link>
            <nuxt-link class="header__link ml-3 mb-2 mb-lg-none" v-for="(item, index) in categories" :key="index" :to="{name: 'categoria-slug', params: {slug: item.node.slug}}">{{ item.node.name }}</nuxt-link>

            <!--<dropdown
            v-for="(item, index) in categories"
            :key="index"
            :parent="item.name"
            :title="item.name"
            :items="item.subCategories">
            </dropdown>-->

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

  </header>
</template>

<script>
  import Dropdown from '~/components/Dropdown'

  // Queries
  import productCategories from '@/apollo/queries/productCategories'

  export default {
    data() {
        return {
        }
    },
    mounted() {
      $nuxt.$emit('whatsappNumber', this.info)
    },
    props: ['info'],
    apollo: {
      productCategories: {
        query: productCategories
      }
    },
    components: {
      Dropdown
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
@import "../scss/variables";

.header {
  border-bottom: 1px solid rgba($dark, .1);

  &__image-container {
    display: inline-block;
    max-width: 120px;
  }

  &__image {
    max-width: 80%;
  }

  &__icon {
    display: inline-block;
    font-size: 1.2em;

    transform: scale(0.95);
    transition: transform .5s;

    &:hover {
      transform: scale(0.85);
    }
  }

  &__link {
    font-size: 1.1em;
    color: #070606;

    &.nuxt-link-exact-active.nuxt-link-active {
      color: #0c9b93;
    }
  }
}
</style>
