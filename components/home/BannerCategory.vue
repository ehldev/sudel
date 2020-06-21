<template>
  <div
    v-bind:style="{backgroundImage: 'url(' + item.image + ')'}"
    class="banner-category text-center text-white">
    <div class="banner-category__bg-dark">
      <div class="container">
        <h2 class="banner-category__title mb-1 mb-md-3">ELECTRICIDAD INDUSTRIAL</h2>

        <div class="row justify-content-center mb-3">
          <div class="col-md-10">
            <p class="banner-category__description">
              SUMIN hace que tus trabajos de electricidad generen una corriente de calidad con equipos y accesorios seguros para tu proyecto. Representamos las mejores marcas del mercado.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 mb-2 mb-md-0">
            <a href="" class="btn btn-outline-success px-3">
              RESIDENCIAL

              <span class="icon icon--opacity">
                <i class="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>

          <div class="col-md-4 mb-2 mb-md-0">
            <a href="" class="btn btn-outline-success px-3">
              RESIDENCIAL

              <span class="icon icon--opacity">
                <i class="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>

          <div class="col-md-4 mb-2 mb-md-0">
            <a href="" class="btn btn-outline-success px-3">
              RESIDENCIAL

              <span class="icon icon--opacity">
                <i class="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
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
