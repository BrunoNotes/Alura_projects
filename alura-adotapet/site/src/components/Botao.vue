<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Botao",
    props: ['msg']
})
</script>

<template>
    <button class="botao">{{ msg }}</button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');


.botao {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    white-space: nowrap;
    line-height: 24px;
    color: white;
    background-color: #FC7071;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    padding: 1% 2.5% 1%;
    width: 25%;
}

@media only screen and (max-width: 1024px) {
    .botao {
        width: 40%;
    }
}

@media only screen and (max-width: 600px) {
    .botao {
        width: 60%;
        font-size: 16px;
        padding: 2.5% 2.5% 2.5%;
    }
}
</style>
