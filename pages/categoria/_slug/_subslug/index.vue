<template>
<main class="main">
    <section class="container products-list pt-5">
        <h1 class="products-list__title text-center mb-5">{{ subslug }}</h1>
    
        <!-- Cada fila un producto -->
        <div class="row product mb-5 animate__animated animate__fadeIn" v-for="(product, index) in products" :key="index">
            <div class="col-md-5 p-4">
                <img src="https://www.suminperu.com/wp-content/uploads/2019/04/VENTILADORES-IMACO.jpg" alt="" class="product__image">
            </div>

            <div class="col-md-7">
                <section class="product__info p-4">
                    <h2 class="product__title">{{ product.name }}</h2>
                    <div>
                        <span class="font-weight-bold">Características:</span>

                        <p>
                            Potencia 45, 60 watts. Cuerda de encendido y control de 3 velocidades. Diámetro 16″, 18″, 24″ . Rejilla protectora de aspas. Perilla de control de oscilación. 220V / 50Hz. Tipos: Pedetal, Pared , Techo.
                        </p>
                    </div>

                    <div>
                        <span class="font-weight-bold">Modelo:</span>

                        <p>
                            FSM370, FS1631, FS2623E, FSM370P, FS6558, FS1645P, FS18105, TF2905, IVA163, IVA10, IVA13, FW450, WF2630, OCF7918, FT8518, IVA2020, IVA230, WF1860.
                        </p>
                    </div>

                    <div class="d-flex">
                        <span class="font-weight-bold">Marca:</span>

                        <p class="ml-2">
                            IMACO
                        </p>
                    </div>

                    <button class="btn btn-primary px-3" @click="toWhatsapp(product.name)">
                        COTIZAR
                        <span class="icon icon--opacity">
                            <i class="fab fa-whatsapp"></i>
                        </span>
                    </button>
                </section>
            </div>
        </div>

    </section>

    <!-- Banner contacto -->
    <banner-contact></banner-contact>

    <form-contact></form-contact>
</main>
</template>

<script>
import BannerContact from '@/components/contact/BannerContact'
import FormContact from '@/components/contact/FormContact'

export default {
  validate({ params }) {
      return params.subslug ? true : false
  },
  data() {
    return {
      subslug: this.$route.params.subslug,
      products: [
          {
              name: 'Ventiladores – IMACO'
          },
          {
              name: 'Llave Térmica'
          },
          {
              name: 'Llave Diferencial'
          },
          {
              name: 'Tomacorriente'
          },
          {
              name: 'Interruptor'
          }
      ]
    };
  },
  components: {
      BannerContact,
      FormContact
  },
  methods: {
      toWhatsapp(name) {
          let number = 51981647313
          let message = `Hola quiero recibir información sobre el producto ${name}`
          window.open(`https://api.whatsapp.com/send?phone=${number}&text=${message}`)
      }
  }
};
</script>

<style lang="scss">
@import "../../../../scss/variables";

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

.product {
    &__image {
        max-width: 100%;
        box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
    }
    
    &__title {
        font-size: 1.5em;
        font-weight: 800;
    }

    &__info {
        border: 3px solid rgba($dark, .2);
    }
}
</style>