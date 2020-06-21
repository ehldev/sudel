<template>
  <div>
    <header-app></header-app>
    <nuxt />

    <whatsapp></whatsapp>
  </div>
</template>

<script>
  import HeaderApp from '~/components/Header'
  import Whatsapp from '~/components/Whatsapp'

  export default {
    components: {
      HeaderApp,
      Whatsapp
    }
  }
</script>

<style>
</style>
