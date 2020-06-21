<template>
  <div class="form-contact bg-warning">
    <div class="container">
      <h2 class="form-contact__title">CONTÁCTANOS</h2>

      <div class="row">

        <div class="col-md-7">
          <form action="">
            <div class="group">
              <input id="name" type="text" required>
              <label for="name">Nombre y Apellidos</label>
            </div>

            <div class="group">
              <input id="phone" type="number" required>
              <label for="phone">Teléfono</label>
            </div>

            <div class="group">
              <input id="email" type="email" required>
              <label for="email">Correo electrónico</label>
            </div>

            <div class="group">
              <input id="nameCompany" type="text" required>
              <label for="nameCompany">Nombre de empresa</label>
            </div>

            <div class="group">
              <textarea id="message" required></textarea>
              <label for="message">Mensaje</label>
            </div>

            <div class="form-group text-right mt-3">
              <input type="submit" class="btn btn-lg btn-danger" value="ENVIAR">
            </div>
          </form>
        </div>

        <div class="col-md-5 pt-5">
          <p class="mt-3 d-flex align-items-lg-center">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-envelope"></i>
            </span>
            ventas@suminperu.com
          </p>

          <p class="mt-3 d-flex align-items-lg-center">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Mza. M Lote 29 Urb. Pachacamac - Villa eI Salvador</span>
          </p>

          <p class="mt-3 d-flex align-items-lg-center">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-phone-alt"></i>
            </span>
            +51 991 778 266 / (01) 7575898
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../../scss/variables";

.form-contact {
  padding: 5rem 0;

  &__title {
    font-size: 1.5em;
    font-weight: 800;

    @media (min-width: 1024px) {
      font-size: 2.5em;
    }
  }

  &__label {
    position: absolute;
    top: 30%;

    &--active {
      top: -25px;
    }
  }

  &__field {
    &:focus {
      .form-contact__label {
        top: 0;
        background-color: tomato;
      }
    }
  }
}

.group {
  position: relative;
  padding-bottom: 1em;
  label {
    position: absolute;
    pointer-events: none;
    left: 0.5em;
    top: 1em;
    transition: 0.2s ease all;
    color: $dark;
  }
  input[type=text],
  input[type=number],
  input[type=email],
  textarea{
    background-color: transparent;
    padding: 0.75em 1.5em;
    line-height: 1.5em;
    border: 0;
    display: block;
    width: 100%;
    margin-top: 2em;
    border-bottom: 1px solid $dark;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, $dark 4%);
    background-position: -100em 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-left: 0.5em;
    transition: 0.3s cubic-bezier(.64,.09,.08,1) all;
    &:focus,
    &:valid {
      background-position: 0 0;
      ~ label {
        color: $dark;
        font-size: 0.875em;
        top: -.7em;
      }
    }
    &:focus {
      outline: none;
    }
  }
}

  .icon--form-contact {
    color: $dark;
    font-size: 1.5em;
  }
</style>
