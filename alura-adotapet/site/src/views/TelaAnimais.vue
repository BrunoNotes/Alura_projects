<script lang="ts">
import { defineComponent } from "vue"
import Animais from "@/components/Animais.vue"

export default defineComponent({
    name: "TelaAnimais",
    created() {
        document.body.style.backgroundColor = '#FFFFFF'
    },
    components: {
        Animais
    }
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <p class="conteudoPrincipal-texto1">Olá! Veja os amigos disponíveis para adoção!</p>

            <div class="conteudoPrincipal-animais">
                <Animais nome="Dunga" idade="2 anos" porte="pequeno" personalidade="Calmo e educado"
                    cidade-origem="Rio de Janeiro (RJ)" class="animal" />

                <Animais nome="Felícia" idade="3 meses" porte="pequeno" personalidade="Ativa e carinhosa"
                    cidade-origem="Nova Iguaçu (RJ)" class="animal" />

                <Animais nome="Sirius" idade="6 meses" porte="grande" personalidade="Ativo e educado"
                    cidade-origem="Duque de Caxias (RJ)" class="animal" />

                <Animais nome="Fiona" idade="3 anos" porte="pequeno" personalidade="Calma e carinhosa"
                    cidade-origem="São Gonçalo (RJ)" class="animal" />

                <Animais nome="Sid" idade="8 meses" porte="médio/grande" personalidade="Brincalhão e amável"
                    cidade-origem="Rio de Janeiro(RJ)" class="animal" />

                <Animais nome="Yoda" idade="1 ano" porte="médio" personalidade="Ativo e carinhoso"
                    cidade-origem="Nova Iguaçu (RJ)" class="animal" />

                <Animais nome="Lua" idade="6 meses" porte="médio" personalidade="Ativa e carinhosa"
                    cidade-origem="Duque de Caxias (RJ)" class="animal" />

                <Animais nome="Amora" idade="45 dias" porte="grande" personalidade="Calma e carinhosa"
                    cidade-origem="São Gonçalo (RJ)" class="animal" />

                <Animais nome="Zelda" idade="5 meses" porte="médio" personalidade="Ativa e amável"
                    cidade-origem="Rio de Janeiro (RJ)" class="animal" />
            </div>


        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');

.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-texto1 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin: 5% 20% 5%;
}

.conteudoPrincipal-animais {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.conteudoPrincipal-animais * {
    margin: 1% 1% 1%;
}

.animal {
    width: 30%;
}

@media only screen and (max-width: 1024px) {

    .conteudoPrincipal-animais {
        flex-direction: row;
    }

    .conteudoPrincipal-animais * {
        margin: 1% 1% 1%;
    }

    .animal {
        width: 45%;
    }

    .conteudoPrincipal-texto1 {
        margin: 10% 20% 5%;
    }
}

@media only screen and (max-width: 600px) {

    .conteudoPrincipal-animais {
        flex-direction: column;
    }

    .conteudoPrincipal-animais * {
        margin: 2.5% 0% 2.5%;
    }

    .animal {
        width: 100%;
    }

    .conteudoPrincipal-texto1 {
        font-size: 16px;
        margin: 20% 20% 10%;
    }
}
</style>
