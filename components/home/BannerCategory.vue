<template>
  <div
    v-bind:style="{backgroundImage: 'url(' + item.node.image.sourceUrl + ')'}"
    class="banner-category text-center text-white" v-if="item">
    <div class="banner-category__bg-dark">
      <div class="container">
        <h2 class="banner-category__title mb-1 mb-md-3">{{ item.node.name }}</h2>

        <div class="row justify-content-center mb-3">
          <div class="col-md-10">
            <p class="banner-category__description" v-html="item.node.description">
            </p>
          </div>
        </div>

        <div class="text-center">
          <router-link :to="{name: 'categoria-slug', params: {slug: item.node.slug}}" class="btn btn-outline-success px-3">
            Ver más

            <span class="icon icon--opacity">
                <i class="fas fa-chevron-right"></i>
              </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
  @import "../../scss/variables";

.banner-category {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &__bg-dark {
    width: 100%;
    height: 100%;

    background-color: rgba($dark, .9);

    padding: 3em;

    @media (min-width: 1024px) {
      padding: 6em 0;
    }
  }

  &__title {
    font-size: 1.5em;
    font-weight: 800;

    @media (min-width: 1024px) {
      font-size: 2.5em;
    }
  }

  .btn:hover {
    .icon--opacity {
      opacity: 1;
    }
  }

  .icon--opacity {
    opacity: 0;
  }
}
</style>
