<template>
    <footer class="container py-5" v-if="info && page">
        <div class="row justify-content-center text-center text-md-left">
            <div class="col-md-2">
                <img src="https://administrador.sudel.com.pe/wp-content/uploads/2020/06/SUDEL-LOGO.png" alt="Logo Sudel" class="footer__logo">
            </div>
            <div class="col-md-8 col-xl-4">
                <p class="mt-3 mt-md-0">
                    {{ page.inicio.descripcionVision }}
                </p>

                <a :href="`https://api.whatsapp.com/send?phone=+51${info.whatsapp}`" target="_blank" class="btn btn-success">
                    <i class="fab fa-whatsapp"></i>
                    Contacta con un asesor vía Whatsapp
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
// Queries
import page from '@/apollo/queries/page'

export default {
    props: ['info'],
    apollo: {
        page: {
            prefetch: true,
            query: page
        }
    }
}
</script>

<style lang="scss">
.footer__logo {
    max-width: 40%;

    @media (min-width: 768px) {
      max-width: 100%;
    }
}
</style>