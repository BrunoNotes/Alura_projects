<script lang="ts">
import Botao from "../components/Botao.vue"

export default {
    created() {
        document.body.style.backgroundColor = "#3772FF";
    },
    components: { Botao },
    data() {
        return {
            textoPrincipal: ''
        }
    },
    computed: {
        mobile() {
            let texto: String
            if (screen.width <= 600) {
                return texto = "Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!"
            }
            else {
                return texto = "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
            }
        }
    },
}
</script>

<template>
    <div class="conteudoPrincipal">
        <div class="container">
            <div class="conteudoPrincipal-logo">
                <img src="../assets/img/Logo.svg" alt="AdotaPet Logo">
            </div>

            <h2 class="conteudoPrincipal-titulo">Boas-Vindas!</h2>
            <div class="conteudoPrincipal-texto-pos">
                <p class="conteudoPrincipal-texto">{{ mobile }}</p>
            </div>

            <div class="conteudoPrincipal-botoes">
                <router-link to="/login" class="conteudoPrincipal-botao">
                    <Botao msg='Já tenho conta' />
                </router-link>
                <router-link to="/cadastro" class="conteudoPrincipal-botao">
                    <Botao msg='Quero me cadastrar' />
                </router-link>
            </div>
            <div class="footer">
                <div class="rodapePrincipal-ilustracao">
                    <img src="../assets/img/Ilustração_(1).png" alt="Ilustacao">
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

.conteudoPrincipal-logo {
    display: flex;
    justify-content: space-around;
    margin: 0% 10% 1%;
}

.conteudoPrincipal-titulo {
    color: white;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 28px;
    display: flex;
    justify-content: space-around;
}

.conteudoPrincipal-texto-pos {
    display: flex;
    justify-content: center;
}

.conteudoPrincipal-texto {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 25%;
    margin: 1% 0% 1%;
}

.conteudoPrincipal-botao {
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin: 1%;
}

.rodapePrincipal-ilustracao {
    width: 100%;
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 1024px) {
    .conteudoPrincipal .container {
        background-position: right 0% top 40%;
        background-size: auto 70%;
    }

    .conteudoPrincipal-logo {
        margin: 10% 0% 2%;
    }

    .conteudoPrincipal-titulo {
        font-size: 26px;
    }

    .conteudoPrincipal-texto {
        font-size: 16px;
        width: 50%;
        margin: 1.5% 0% 1.5%;
    }

    .conteudoPrincipal-botao {
        margin: 2%;
    }

    .rodapePrincipal-ilustracao {
        transform: scale(1);
    }
}

@media only screen and (max-width: 600px) {
    .conteudoPrincipal .container {
        background-position: right 0% top 20%;
        background-size: auto 50%;
    }

    .conteudoPrincipal-logo {
        margin: 10%;
    }

    .conteudoPrincipal-titulo {
        font-size: 26px;
    }

    .conteudoPrincipal-texto {
        font-size: 16px;
        padding: 5% 20% 5%;
        width: 100%;
    }

    .conteudoPrincipal-botao {
        margin: 3%;
    }

    .rodapePrincipal-ilustracao {
        transform: scale(1);
    }
}
</style>
