<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Rodape"
})
</script>

<template>
    <div class="rodapePrincipal">
        <div class="container">
            <p class="rodapePrincipal-texto">2022 Desenvolvido por Alura.</p>
        </div>
    </div>
</template>

<style scoped>
.rodapePrincipal .container {
    width: 100%;
}

.rodapePrincipal-texto {
    background-color: #36D6AD;
    width: 100%;
    padding: 2% 0% 2%;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

@media only screen and (max-width: 1024px) {

    .rodapePrincipal-texto {
        padding: 6% 0% 6%;
    }
}

@media only screen and (max-width: 600px) {

    .rodapePrincipal-texto {
        padding: 10% 0% 10%;
    }
}
</style>
