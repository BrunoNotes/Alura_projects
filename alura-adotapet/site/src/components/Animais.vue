<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Animais",
    props: {
        img: String,
        nome: String,
        idade: String,
        porte: String,
        personalidade: String,
        cidadeOrigem: String
    },
    methods: {
        imgUrl(imagem) {
            let caminho = "/src/assets/img/animais/"
            return caminho + imagem + ".png"
        }
    }
})
</script>

<template>
    <div class="conteudoPrincipal-animal">
        <img :src=imgUrl(nome) alt="imgAnimal" class="conteudoPrincipal-animal-imagem">
        <div class="conteudoPrincipal-animal-texto">
            <p class="conteudoPrincipal-animal-nome">{{ nome }}</p>
            <div class="conteudoPrincipal-animal-descricao">
                <p>{{ idade }}</p>
                <p>Porte {{ porte }}</p>
                <p>{{ personalidade }}</p>
            </div>
            <div class="conteudoPrincipal-animal-footer">
                <p class="conteudoPrincipal-animal-cidade">{{ cidadeOrigem }}</p>
                <div class="conteudoPrincipal-animal-mensagem">
                    <img src="@/assets/img/ícone_mensagem.svg" alt="mensagem">
                    <p>Falar com responsável</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');

.conteudoPrincipal-animal {
    display: flex;
    background-color: #F6F6F6;
    padding: 5%;
    white-space: nowrap;
}

.conteudoPrincipal-animal-imagem {
    width: 100%;
}

.conteudoPrincipal-animal-texto {
    display: flex;
    flex-direction: column;
    padding-left: 5%;
}

.conteudoPrincipal-animal-nome {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10%;
}

.conteudoPrincipal-animal-descricao {
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
}

.conteudoPrincipal-animal-footer {
    position: sticky;
    top: 100%;
}

.conteudoPrincipal-animal-cidade {
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
}

.conteudoPrincipal-animal-mensagem {
    display: flex;
    color: #737380;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: 400;
    padding-top: 10%;
    align-items: center;
}

.conteudoPrincipal-animal-mensagem p {
    margin-left: 5%;
}
</style>
