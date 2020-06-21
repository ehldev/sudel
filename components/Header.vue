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

    <b-navbar toggleable="lg" type="white" class="py-4 bg-white">

      <div class="container">
        <nuxt-link to="/" class="header__image-container">
          <img src="/logo-sumin.png" alt="Logo Sudel" class="header__image">
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse" class="text-dark">
          <span class="font-weight-bold">
            <i class="fas fa-align-justify"></i>
          </span>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <dropdown title="Item 1" :items="['First item', 'First item 2', 'First item 3']"></dropdown>

            <dropdown title="Item 2" :items="['First item', 'First item 2', 'First item 3']"></dropdown>

            <dropdown title="Item 3" :items="['First item', 'First item 2', 'First item 3']"></dropdown>

            <dropdown title="Item 4" :items="['First item', 'First item 2', 'First item 3']"></dropdown>

            <dropdown title="Item 5" :items="['First item', 'First item 2', 'First item 3']"></dropdown>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

  </header>
</template>

<script>
  import Dropdown from '~/components/Dropdown'

  export default {
    components: {
      Dropdown
    }
  }
</script>

<style lang="scss">
.header {
  &__image-container {
    display: inline-block;
    max-width: 120px;
  }

  &__image {
    max-width: 100%;
  }
}
</style>
