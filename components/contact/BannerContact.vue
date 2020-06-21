<template>
  <section class="banner-contact text-white">
    <div class="banner-contact__bg-dark">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-5 col-lg-6 d-flex justify-content-center mb-3 mb-md-0">
            <img src="https://www.suminperu.com/wp-content/uploads/2020/05/isosumin.png" alt="" class="banner-contact__image">
          </div>

          <div class="col-md-7 col-lg-6 text-center text-md-left">
            <h2 class="banner-contact__title mb-3">¿Tienes dudas?</h2>

            <h3 class="banner-contact__subtitle">
              CONVERSA CON UN ASESOR COMERCIAL
            </h3>

            <p class="lead text-warning">Estaremos gustosos de atenderte.</p>

            <button class="btn btn-success">
              <i class="fab fa-whatsapp"></i>
              Contacta con un asesor vía Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../scss/variables";

.banner-contact {
  background-image: url("https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/20141229094337oeynuf.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__bg-dark {
    width: 100%;
    height: 100%;

    background-color: rgba($dark, .9);

    padding: 3em;

    @media (min-width: 1024px) {
      padding: 5em 0;
    }
  }

  &__title {
    font-size: 1.5em;
    font-weight: 800;

    @media (min-width: 1024px) {
      font-size: 2.5em;
    }
  }

  &__subtitle {
    font-size: 1.1em;
    font-weight: 800;
  }

  &__image {
    max-width: 30%;
  }
}
</style>
