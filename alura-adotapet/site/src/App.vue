<script setup lang="ts">
import Cabecalho from "./components/Cabecalho.vue"
import Rodape from "./components/Rodape.vue"

</script>

<template>
    <div class="corpo">

        <header>
            <Cabecalho />
        </header>

        <main>
            <router-view></router-view>
        </main>

        <footer>
            <Rodape />
        </footer>

    </div>
</template>

<style scoped>
.corpo {
    background-image: url('./assets/img/Forma_top.svg');
    background-repeat: no-repeat;
    background-size: 40%;
    min-height: 100vh;
}

footer {
    position: sticky;
    top: 100%;
}

@media only screen and (max-width: 1024px) {
    .corpo {
        background-size: 70%;
    }
}

@media only screen and (max-width: 600px) {
    .corpo {
        background-size: 96%;
    }
}
</style>
