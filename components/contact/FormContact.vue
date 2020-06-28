<template>
  <div v-if="redesSociales">
    <!-- Banner contacto -->
    <banner-contact :info="info.sociales" :bg="bgBanner"></banner-contact>

    <div class="form-contact bg-warning">
    <div class="container">
      <h2 class="form-contact__title">CONTÁCTANOS</h2>

      <div class="row mt-lg-1">
        <div class="col-md-7">
          <p class="lead" v-if="success.status">
            {{ success.message }}
          </p>

          <form @submit.prevent="submit()" v-else>
            <div class="group">
              <input type="text" required="required" class="form-input" v-model="name" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Nombre y apellidos</label>
            </div>

            <div class="group">
              <input type="number" min="0" required="required" class="form-input" v-model="phone" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Número de contacto</label>
            </div>

            <div class="group">
              <input type="email" required="required" class="form-input" v-model="email" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Correo electrónico</label>
            </div>

            <div class="group">
              <input type="text" required="required" class="form-input" v-model="company" />
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
                v-model="message"
              ></textarea>
              <label for="message">Mensaje</label>
            </div>

            <div class="form-group text-right mt-3">
              <input type="submit" class="btn btn-lg btn-danger" :disabled="loading ? true : false" :value="loading ? 'Enviando' : 'ENVIAR'" />
            </div>
          </form>
        </div>

        <div class="col-md-5 pt-5">
          <a :href="`mailto:${info.sociales.correo}`" class="mt-3 d-flex align-items-lg-center text-dark">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-envelope"></i>
            </span>
            {{ info.sociales.correo }}
          </a>

          <p class="mt-3 mt-md-0 mb-0 d-flex align-items-lg-center">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-envelope"></i>
            </span>
            <span>{{ info.sociales.direccion }}</span>
          </p>

          <p class="mt-3 mt-md-0 mb-0 d-flex align-items-lg-center">
            <span class="icon icon--form-contact mr-3 mr-lg-2">
              <i class="fas fa-phone-alt"></i>
            </span>
            {{ info.sociales.telefono }} - {{ info.sociales.celular }}
          </p>

          <p class="mt-1 mb-0 text-muted">Redes sociales</p>

          <div class="d-flex">
            <a href="" class="form-contact__link mr-2">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a href="" class="form-contact__link">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import BannerContact from '@/components/contact/BannerContact'

  // Queries
  import redesSociales from '@/apollo/queries/redesSociales'

export default {
    data() {
      return {
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
        loading: false,
        success: {
          status: false,
          message: ''
        }
      }
    },
  apollo: {
    redesSociales: {
      query: redesSociales
    }
  },
  components: {
    BannerContact
  },
  methods: {
    submit() {
      this.loading = true
      this.success = {
        status: false,
        message: ''
      }

      let url = 'https://administrador.sudel.com.pe/wp-json/contact-form-7/v1/contact-forms/42/feedback'

      let formData = new FormData()
      formData.append('your-name', this.name)
      formData.append('your-phone', this.phone)
      formData.append('your-email', this.email)
      formData.append('your-business', this.company)
      formData.append('your-message', this.message)

      if(this.name && this.email && this.phone && this.company && this.message) {
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: formData // data can be `string` or {object}!
        }).then(res => res.json())
          .catch(error => {
            this.loading = false
          })
          .then(response => {
            this.success = {
              status: true,
              message: response.message
            }

            this.loading = false
          });
      }
    }
  },
  props: ['bgBanner'],
  computed: {
    info: function () {
      if(this.redesSociales) {
        return this.redesSociales.edges[0].node
      }
    }
  }
};
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

  &__link {
    font-size: 1.5em;
    color: rgba(#070606, .8);

    transition: color .5s;

    &:hover {
      color: #070606;
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
