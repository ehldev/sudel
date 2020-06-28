<template>
<div class="whatsapp position-relative">
    <div class="whatsapp__container">
        <a :href="`https://api.whatsapp.com/send?phone=+51${info.whatsapp}`" target="_blank">
            <img src="/whatsapp.svg" alt="Logo whatsapp" class="whatsapp__image">
        </a>
    </div>
</div>
</template>

<script>
    export default {
      props: ['info']
    }
</script>

<style lang="scss">
.whatsapp {
    &__container {
      position: fixed;
      bottom: 5%;
      left: 5%;
      z-index: 100;
    }

    &__image {
      max-width: 10%;

      @media (min-width: 1024px) {
        max-width: 9%;
      }
    }
}
</style>
