<template>
  <div class="container clients text-center">

    <h2 class="clients__title mb-5">NUESTROS CLIENTES</h2>

    <!-- Móvil -->
    <div class="d-md-none">
      <client-only>
        <swiper class="swiper" :options="swiperOptionClients">
        <swiper-slide v-for="(client, index) in clients" :key="index">

          <div class="card clients__card">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
              <img :src="client.image" alt="" class="clients__image">

              <p class="clients__description text-dark">
                {{ client.name }}
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
            <img :src="client.image" alt="" class="clients__image">

            <p class="clients__description text-dark">
              {{ client.name }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clients: [
          {
            name: 'SEGURO SOCIAL DE SALUD - ESSALUD',
            image: '/logo-sumin.png'
          },
          {
            name: 'EXIGE INDUSTRIAL S.A.C.',
            image: 'https://www.suminperu.com/wp-content/uploads/2019/01/ESSALUDLOGO.jpg'
          },
          {
            name: 'IBT GROUP',
            image: 'https://www.suminperu.com/wp-content/uploads/2019/01/ESSALUDLOGO.jpg'
          },
          {
            name: 'IBERICA DE MANTENIMIENTO S.A.',
            image: 'https://www.suminperu.com/wp-content/uploads/2019/01/ESSALUDLOGO.jpg'
          },
          {
            name: 'TACTICAL IT S.A.C.',
            image: 'https://www.suminperu.com/wp-content/uploads/2019/01/ESSALUDLOGO.jpg'
          },
          {
            name: 'TERMOENCOGIBLES DEL PERU S.A.',
            image: 'https://www.suminperu.com/wp-content/uploads/2019/01/ESSALUDLOGO.jpg'
          }
        ],
        swiperOptionClients: {
          slidesPerView: 1,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
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

      -webkit-box-shadow: 10px 10px 8px -10px rgba(0,0,0,0.52);
      -moz-box-shadow: 10px 10px 8px -10px rgba(0,0,0,0.52);
      box-shadow: 10px 10px 8px -10px rgba(0,0,0,0.52);
    }

    &__image {
      width: 30%;
    }

    &__title {
      font-size: 1.5em;
      font-weight: 800;

      @media (min-width: 1024px) {
        font-size: 2.5em;
      }
    }

    &__description {
      font-size: 1.1em;
    }
  }
</style>
