<template>
  <div class="form-contact bg-warning">
    <div class="container">
      <h2 class="form-contact__title">CONTÁCTANOS</h2>

      <div class="row mt-lg-5">
        <div class="col-md-7">
          <form action>
            <div class="group">
              <input type="text" required="required" class="form-input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Nombre y apellidos</label>
            </div>

            <div class="group">
              <input type="number" min="0" required="required" class="form-input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Número de contacto</label>
            </div>

            <div class="group">
              <input type="email" required="required" class="form-input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Correo electrónico</label>
            </div>

            <div class="group">
              <input type="text" required="required" class="form-input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Nombre de empresa</label>
            </div>

            <div class="input-container position-relative mb-5">
              <textarea
                type="text"
                id="message"
                class="form-input"
                pattern=".+"
                required
              ></textarea>
              <label for="message">Mensaje</label>
            </div>

            <div class="form-group text-right mt-3">
              <input type="submit" class="btn btn-lg btn-danger" value="ENVIAR" />
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
export default {};
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

.icon--form-contact {
  color: $dark;
  font-size: 1.5em;
}

.group {
  position: relative;
  margin: 45px 0;
}

textarea {
  resize: none;
}

.form-input {
  background: none;
  color: $dark;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $primary;
}

.form-input:focus {
  outline: none;
}

.form-input:focus ~ label,
.form-input:valid ~ label {
  top: -14px;
  font-size: 12px;
  color: $dark;
}

.form-input:focus ~ .bar:before {
  width: 320px;
}

label {
  color: $dark;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  -webkit-transition: 300ms ease all;
  transition: 300ms ease all;
}

.bar {
  position: relative;
  display: block;
}
.bar:before {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0px;
  position: absolute;
  -webkit-transition: 300ms ease all;
  transition: 300ms ease all;
  left: 0%;
}
</style>
