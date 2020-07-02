<template>
  <div>
    <header-app :info="redesSociales.edges[0].node.sociales"></header-app>
    <nuxt />

    <whatsapp :info="redesSociales.edges[0].node.sociales"></whatsapp>

    <footer-app :info="redesSociales.edges[0].node.sociales"></footer-app>
  </div>
</template>

<script>
  import HeaderApp from '~/components/Header'
  import FooterApp from '~/components/Footer'
  import Whatsapp from '~/components/Whatsapp'

  // Queries
  import redesSociales from '@/apollo/queries/redesSociales'

  export default {
    apollo: {
      redesSociales: {
        prefetch: true,
        query: redesSociales
      }
    },
    components: {
      HeaderApp,
      FooterApp,
      Whatsapp
    }
  }
</script>

<style>
</style>
