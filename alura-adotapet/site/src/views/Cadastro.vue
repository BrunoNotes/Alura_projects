<script lang="ts">
import { defineComponent } from "vue"
import Botao from "../components/Botao.vue"

export default defineComponent({
    name: "Cadastro",
    created() {
        document.body.style.backgroundColor = "#FFFFFF";
    },
    components: { Botao }
})
</script>

<template>
    <div class="conteudoPrincipal">

        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo_-_azul.svg" alt="AdotaPet Logo" class="conteudoPrincipal-logo-img">
            </div>

            <p class="conteudoPrincipal-texto1">Ainda não tem cadastro?</p>
            <p class="conteudoPrincipal-texto2">Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>

            <form class="formulario">
                <label for="email">Email</label><br>
                <div class="formulario-input">
                    <input type="text" name="email" placeholder="Escolha seu melhor email"
                        class="conteudoPrincipal-input-email"><br>
                </div>

                <label for="nome">Nome</label><br>
                <div class="formulario-input">
                    <input type="text" name="nome" placeholder="Digite seu nome completo"
                        class="conteudoPrincipal-input-nome"><br>
                </div>

                <label for="senha">Senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="senha" placeholder="Crie uma senha"
                        class="conteudoPrincipal-input-senha"><br>
                </div>

                <label for="csenha">Confima sua senha</label><br>
                <div class="formulario-input">
                    <input type="text" name="csenha" placeholder="Repita a senha criada acima"
                        class="conteudoPrincipal-input-senha"><br>
                </div>
            </form>

            <div class="conteudoPrincipal-botoes">
                <Botao msg="Cadastrar" />
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
    justify-content: space-around;
    margin: 0% 10% 0%;
}

.conteudoPrincipal-logo-img {
    width: 30%;
}

.conteudoPrincipal-texto1 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 3% 10% 0%;
}

.conteudoPrincipal-texto2 {
    color: #3772FF;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0% 35% 2%;
}

.formulario {
    display: flex;
    flex-direction: column;
}

.formulario label {
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #737380;
    margin: 1% 0% 0.5%;
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

.formulario-input {
    width: 100%;
    display: flex;
    justify-content: center;
}

.conteudoPrincipal-input-email {
    width: 60%;
}

.conteudoPrincipal-input-nome {
    width: 60%;
}

.conteudoPrincipal-input-senha {
    width: 40%;
}

.conteudoPrincipal-botoes {
    display: flex;
    justify-content: center;
    margin: 2% 0% 2%;
}

@media only screen and (max-width: 1024px) {
    .conteudoPrincipal-logo {
        margin: 10% 10% 0%;
    }

    .conteudoPrincipal-logo-img {
        width: 50%;
    }

    .conteudoPrincipal-texto1 {
        font-size: 16px;
        margin: 5% 10% 2%;
    }

    .conteudoPrincipal-texto2 {
        font-size: 16px;
        margin: 0% 20% 0%;
    }

    .formulario label {
        font-size: 16px;
        font-weight: 400;
        margin: 4% 0% 2%;
    }

    .formulario input {
        font-size: 12px;
    }

    .conteudoPrincipal-input-email {
        width: 60%;
    }

    .conteudoPrincipal-input-nome {
        width: 60%;
    }

    .conteudoPrincipal-input-senha {
        width: 60%;
    }

    .conteudoPrincipal-botoes {
        margin: 4% 0% 4%;
    }
}

@media only screen and (max-width: 600px) {
    .conteudoPrincipal-logo {
        margin: 10% 10% 0%;
    }

    .conteudoPrincipal-logo-img {
        width: 50%;
    }

    .conteudoPrincipal-texto1 {
        font-size: 16px;
        margin: 5% 10% 5%;
    }

    .conteudoPrincipal-texto2 {
        font-size: 16px;
        margin: 0% 10% 0%;
    }

    .formulario label {
        font-size: 16px;
        font-weight: 400;
        margin: 6% 0% 2%;
    }

    .formulario input {
        font-size: 12px;
    }

    .conteudoPrincipal-input-email {
        width: 80%;
    }

    .conteudoPrincipal-input-nome {
        width: 80%;
    }

    .conteudoPrincipal-input-senha {
        width: 80%;
    }

    .conteudoPrincipal-botoes {
        margin: 4% 0% 4%;
    }
}
</style>
