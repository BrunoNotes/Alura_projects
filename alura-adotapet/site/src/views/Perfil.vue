<script lang="ts">
import { defineComponent } from "vue"
import Botao from "../components/Botao.vue"

export default defineComponent({
    name: "Perfil",
    data() {
        return {
            nome: "Joana Magalhães",
            telefone: "55 11 XXXXXXXXX",
            cidade: "São Paulo",
            sobre: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
        }
    },
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    components: { Botao },
})
</script>

<template>
    <div class="conteudoPrincipal">
        <div class="container">
            <p class="conteudoPrincipal-texto">Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
                mensagem.</p>

            <div class="formulario" id="formulario">
                <div class="formulario-caixas">
                    <h3 class="formulario-header">Perfil</h3>

                    <label for="Nome">Foto</label><br>
                    <div class="formulario-foto">
                        <img src="../assets/img/Usuário.png" alt="usuario">
                    </div>
                    <p class="formulario-foto-texto">Clique na foto para editar</p>

                    <label for="Nome">Nome</label><br>
                    <div class="formulario-input">
                        <input type="text" name="nome" placeholder="Insira seu nome completo"
                            class="formulario-input-caixa" :value="nome"><br>
                    </div>

                    <label for="telefone">Telefone</label><br>
                    <div class="formulario-input">
                        <input type="tel" name="telefone" placeholder="Insira seu telefone e/ou whatsapp"
                            class="formulario-input-caixa" :value="telefone"><br>
                    </div>

                    <label for="cidade">Cidade</label><br>
                    <div class="formulario-input">
                        <input type="text" name="cidade" placeholder="Por qual animal você se interessou?"
                            class="formulario-input-caixa" :value="cidade"><br>
                    </div>

                    <label for="Nome">Sobre</label><br>
                    <div class="formulario-input-mensagem">
                        <textarea name="mensagem" id="formularo-input-mensagem" cols="30" rows="5"
                            placeholder="Escreva sua mensagem."
                            class="formulario-input-caixa-mensagem">{{ sobre }}</textarea>
                    </div>
                </div>

                <div class="botoes">
                    <Botao msg="Salvar" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');

.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
    background-image: url('../assets/img/Forma_2.svg');
    background-repeat: no-repeat;
    background-position: right 0% top 20%;
    background-size: auto 80%;
}

.formulario-header {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    font-weight: 600;
    color: #737380;
}

.formulario-foto {
    display: flex;
    justify-content: center;
    margin: 2% 0% 1%;
}


.formulario-foto img {
    width: 12%;
    cursor: pointer;
}

.formulario-foto-texto {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #FC7071;
}

.conteudoPrincipal-texto {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #3772FF;
    text-align: center;
    margin: 2% 37% 0%;
}

#formulario {
    background-color: #F6F6F6;
    margin: 2% 25% 2%;
    border-radius: 6px;
}

.formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.formulario-caixas {
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin: 4%;
}

.formulario label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #3772FF;
    margin: 1% 0% 0.5%;
}

.formulario input {
    height: 40px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: left;
    color: #737380;
    border: 0 solid;
    border-radius: 6px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.formulario textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: left;
    color: #737380;
    border: 0 solid;
    border-radius: 6px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    width: 100%;
    resize: none;
}

.formulario-input-caixa {
    width: 100%;
}



.botoes {
    display: flex;
    justify-content: center;
    margin: 0% 0% 4%;
}

@media only screen and (max-width: 1024px) {

    .conteudoPrincipal-texto {
        margin: 10% 18% 2%;
    }

    #formulario {
        margin: 2% 18% 2%;
    }

    .formulario-foto img {
        width: 16%;
    }
}

@media only screen and (max-width: 600px) {

    .conteudoPrincipal-texto {
        margin: 10% 18% 2%;
    }

    #formulario {
        margin: 2% 5% 2%;
    }

    .formulario-foto img {
        width: 20%;
    }
}
</style>
