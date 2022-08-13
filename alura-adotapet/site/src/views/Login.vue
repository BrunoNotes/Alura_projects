<script lang="ts">
import { defineComponent } from "vue"
import Botao from "../components/Botao.vue"

export default defineComponent({
    name: "Login",
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    components: { Botao },
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo_-_azul.svg" alt="AdotaPet Logo" class="conteudoPrincipal-logo-img">
            </div>

            <p class="conteudoPrincipal-texto1">Já tem conta? Faça seu login:</p>

            <form class="formulario">
                <label for="email">Email</label><br>
                <div class="formulario-input">
                    <input type="text" name="email" placeholder="Insira seu email" class="formulario-input-email"><br>
                </div>

                <label for="senha">Senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="senha" placeholder="Insira sua senha" class="formulario-input-senha"><br>
                </div>
            </form>

            <div class="conteudoPrincipal-botao-texto">
                <a>Esqueci minha senha</a>
            </div>

            <div class="conteudoPrincipal-botoes">
                <Botao msg="Entrar" />
            </div>

        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&family=Poppins&display=swap');

.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
    transform: none;
    background-image: url('../assets/img/Forma_2.svg');
    background-repeat: no-repeat;
    background-position: right 0% top 20%;
    background-size: auto 80%;
}

.conteudoPrincipal .container {
    display: flex;
    flex-direction: column;
}

.conteudoPrincipal-logo {
    display: flex;
    justify-content: center;
    margin: 0% 0% 0%;
}

.conteudoPrincipal-logo-img {
    width: 20%;
}

.conteudoPrincipal-texto1 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2% 10% 2%;
}

.formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.formulario label {
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #737380;
    margin: 1% 0% 1%;
}

.formulario input {
    height: 40px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #BCBCBC;
    border: 0 solid;
    border-radius: 6px;
    background: #F7F7F7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.conteudoPrincipal-botoes {
    display: flex;
    justify-content: center;
    margin: 1% 0% 1%;
}

.conteudoPrincipal-botao-texto {
    display: flex;
    justify-content: center;
    color: #FC7071;
    text-decoration: underline;
    cursor: pointer;
    margin: 0.5% 0% 1%;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
}

.formulario-input {
    display: flex;
    justify-content: center;
}

.formulario-input-email {
    width: 50%;
}

.formulario-input-senha {
    width: 30%;
}

@media only screen and (max-width: 1024px) {
    .conteudoPrincipal .container {
        background-position: right 0% top 100%;
        background-size: auto 80%;
    }

    .conteudoPrincipal-logo {
        margin: 5% 0% 5%;
    }

    .conteudoPrincipal-logo-img {
        width: 40%;
    }

    .conteudoPrincipal-texto1 {
        font-size: 16px;
        margin: 2% 10% 2%;
    }

    .formulario label {
        font-size: 16px;
        font-weight: 400;
        margin: 4% 0% 2%;
    }

    .formulario input {
        font-size: 12px;
    }

    .formulario-input-email {
        width: 60%;
    }

    .formulario-input-senha {
        width: 60%;
    }

    .conteudoPrincipal-botao-texto {
        margin: 2% 0% 6%;
    }

    .conteudoPrincipal-botoes {
        margin: 0% 0% 1%;
    }
}

@media only screen and (max-width: 600px) {
    .conteudoPrincipal .container {
        background-position: right 0% top 100%;
        background-size: auto 80%;
    }

    .conteudoPrincipal-logo {
        margin: 10% 0% 10%;
    }

    .conteudoPrincipal-logo-img {
        width: 40%;
    }

    .conteudoPrincipal-texto1 {
        font-size: 16px;
        margin: 5% 10% 5%;
    }

    .formulario label {
        font-size: 16px;
        font-weight: 400;
        margin: 6% 0% 2%;
    }

    .formulario input {
        font-size: 12px;
    }

    .formulario-input-email {
        width: 80%;
    }

    .formulario-input-senha {
        width: 80%;
    }

    .conteudoPrincipal-botao-texto {
        margin: 2% 0% 6%;
    }

    .conteudoPrincipal-botoes {
        margin: 0% 0% 1%;
    }
}
</style>
