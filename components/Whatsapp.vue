<template>
<div class="whatsapp position-relative">
    <div class="whatsapp__container">
        <a href="" target="_blank">
            <img src="/whatsapp.svg" alt="Logo whatsapp" class="whatsapp__image">
        </a>
    </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.whatsapp {
    &__container {
        position: fixed;
        bottom: 5%;
        left: 5%;
    }

    &__image {
        max-width: 10%;
    }
}
</style>