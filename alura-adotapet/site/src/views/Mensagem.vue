<script lang="ts">
import { defineComponent } from "vue"
import Botao from "../components/Botao.vue"

export default defineComponent({
    name: "Mensagem",
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    components: { Botao },
})
</script>

<template>
    <div class="conteudoPrincipal">
        <div class="container">
            <p class="conteudoPrincipal-texto">Envie uma mensagem para a pessoa ou instituição que está cuidado do
                animal:</p>

            <div class="formulario" id="formulario">
                <div class="formulario-caixas">
                    <label for="Nome">Nome</label><br>
                    <div class="formulario-input">
                        <input type="text" name="nome" placeholder="Insira seu nome completo"
                            class="formulario-input-caixa"><br>
                    </div>

                    <label for="Nome">Telefone</label><br>
                    <div class="formulario-input">
                        <input type="tel" name="telefone" placeholder="Insira seu telefone e/ou whatsapp"
                            class="formulario-input-caixa"><br>
                    </div>

                    <label for="Nome">Nome do Animal</label><br>
                    <div class="formulario-input">
                        <input type="text" name="nomeAnimal" placeholder="Por qual animal você se interessou?"
                            class="formulario-input-caixa"><br>
                    </div>

                    <label for="Nome">Mensagem</label><br>
                    <div class="formulario-input-mensagem">
                        <textarea name="mensagem" id="formularo-input-mensagem" cols="30" rows="10"
                            placeholder="Escreva sua mensagem." class="formulario-input-caixa-mensagem"></textarea>
                    </div>
                </div>

                <div class="botoes">
                    <Botao msg="Enviar" />
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
    color: #BCBCBC;
    border: 0 solid;
    border-radius: 6px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.formulario textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: left;
    color: #BCBCBC;
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
}

@media only screen and (max-width: 600px) {

    .conteudoPrincipal-texto {
        margin: 10% 18% 2%;
    }

    #formulario {
        margin: 2% 5% 2%;
    }
}
</style>
