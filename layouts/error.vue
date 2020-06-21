<template>
  <div class="error">
    <div class="error__container">
        <h1 class="error__title" v-if="error.statusCode === 404">Página no encontrada</h1>

        <h1 class="error__title" v-else>Ocurrió un error</h1>

        <nuxt-link to="/" class="error__link">Ir al inicio</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style lang="scss">
.error {
    width: 100%;
    height: 100vh;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
        font-size: 2em;
        font-weight: 800;
    }
}
</style>