<template>
  <div class="container clients text-center" v-if="clientes">

    <h2 class="clients__title mb-5">NUESTROS CLIENTES</h2>

    <!-- Móvil -->
    <div class="d-md-none">
      <client-only>
        <swiper class="swiper" :options="swiperOptionClients">
        <swiper-slide v-for="(client, index) in clients" :key="index">

          <pre>
            {{ client }}
          </pre>

          <div class="card clients__card">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <img :src="client.node.cliente.imagen.sourceUrl" :alt="client.node.cliente.imagen.altText" class="clients__image">

              <p class="clients__description text-dark">
                {{ client }}
              </p>
            </div>
          </div>

        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </client-only>
    </div>

    <!-- Desktop -->
    <div class="row d-none d-md-flex">
      <div class="col-md-4 mb-3" v-for="(client, index) in clients" :key="index">

        <div class="card clients__card border-0">
          <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <img :src="client.node.cliente.imagen.sourceUrl" :alt="client.node.cliente.imagen.altText" class="clients__image">

            <p class="clients__title mt-2">
              {{ client.node.title }}
            </p>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // Queries
  import clientes from '@/apollo/queries/clientes'

  export default {
    data() {
      return {
        swiperOptionClients: {
          slidesPerView: 1,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    apollo: {
      clientes: {
        query: clientes,
        fetchPolicy: 'no-cache'
      }
    },
    computed: {
      clients: function () {
        if(this.clientes) {
          return this.clientes.edges
        }
      }
    }
  }
</script>

<style lang="scss">
  .clients {
    padding: 5rem 0;

    &__card {
      min-height: 200px;

      box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.3);
    }

    &__image {
      width: 30%;
    }

    &__title {
      font-size: 1.2em;
      font-weight: 800;
      color: rgba(#070606, .9);
    }
  }
</style>
