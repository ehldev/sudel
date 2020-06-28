<template>
  <div>
    <header-app :info="redesSociales.edges[0].node.sociales"></header-app>
    <nuxt />

    <whatsapp :info="redesSociales.edges[0].node.sociales"></whatsapp>
  </div>
</template>

<script>
  import HeaderApp from '~/components/Header'
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
      Whatsapp
    }
  }
</script>

<style>
</style>
