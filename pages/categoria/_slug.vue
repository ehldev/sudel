<template>
  <main class="main">
    <section class="container products-list pt-5">
      <h1 class="products-list__title text-center mb-5">{{ slug | notSlug }}</h1>

      <!-- Cada fila un producto -->
      <div class="row product mb-5 animate__animated animate__fadeIn" v-for="product in products" :key="product.id">
        <div class="col-md-5 p-4">
          <img :src="product.image.sourceUrl" :alt="product.image.altText" class="product__image">
        </div>

        <div class="col-md-7">
          <section class="product__info p-4">
            <h2 class="product__title">{{ product.name }}</h2>
              <div v-html="product.description">
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

    <form-contact></form-contact>
  </main>
</template>

<script>
  import FormContact from '@/components/contact/FormContact'

  // Queries
  import productCategory from '@/apollo/queries/productCategory'
  import redesSociales from '@/apollo/queries/redesSociales'

  export default {
    validate({ params }) {
      return params.slug ? true : false
    },
    data() {
      return {
        slug: this.$route.params.slug
      };
    },
    apollo: {
      productCategory: {
        prefetch: true,
        query: productCategory,
        variables() {
          return {
            id: this.slug
          }
        }
      },
      redesSociales: {
        prefetch: true,
        query: redesSociales
      }
    },
    components: {
      FormContact
    },
    methods: {
      toWhatsapp(name) {
        if(this.redesSociales) {
          let number = this.redesSociales.edges[0].node.sociales.whatsapp
          let message = `Hola quiero recibir información sobre el producto ${name}`
          window.open(`https://api.whatsapp.com/send?phone=51${number}&text=${message}`)
        }
      }
    },
    computed: {
      products: function () {
        if(this.productCategory) {
          return this.productCategory.products.nodes
        }
      }
    },
    filters: {
      notSlug: function (val) {
        if(val) {
          return val.replace(/-/g, ' ')
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "../../scss/variables";

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

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .product {
    &__image {
      width: 90%;
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
