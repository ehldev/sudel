<template>
  <header class="header fixed-top">

    <div class="header__top bg-dark py-1 py-md-3">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between text-white text-center text-md-left">
          <div class="d-flex flex-column flex-md-row">
            <span class="mr-3 mb-1 mb-md-0">
              <i class="fas fa-phone-alt"></i>
              + 51 991 778 266 / (01) 7575898
            </span>

            <span class="mr-3">
              <i class="fas fa-envelope"></i>
              <a href="" class="text-white">ventas@suminperu.com</a>
            </span>
          </div>

          <div class="mt-1 mt-md-0">
            <nuxt-link to="/" class="icon mr-2">
              <i class="fab fa-facebook-f"></i>
            </nuxt-link>

            <nuxt-link to="/" class="icon">
              <i class="fab fa-whatsapp"></i>
            </nuxt-link>
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
          <b-navbar-nav class="ml-auto">

            <dropdown
            v-for="(item, index) in categories"
            :key="index"
            :parent="item.name"
            :title="item.name"
            :items="item.subCategories">
            </dropdown>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

  </header>
</template>

<script>
  import Dropdown from '~/components/Dropdown'

  export default {
    data() {
        return {
          categories: [
            {
              name: 'Categoría',
              subCategories: [
                'Subitem 1',
                'Subitem 2',
                'Subitem 3'
              ]
            },
            {
              name: 'Categoría 2',
              subCategories: [
                'Subitem 1',
                'Subitem 2',
                'Subitem 3'
              ]
            },
            {
              name: 'Categoría 3',
              subCategories: [
                'Subitem 1',
                'Subitem 2',
                'Subitem 3'
              ]
            },
            {
              name: 'Categoría 4',
              subCategories: [
                'Subitem 1',
                'Subitem 2',
                'Subitem 3'
              ]
            }
          ]
        }
    },
    components: {
      Dropdown
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
}
</style>
