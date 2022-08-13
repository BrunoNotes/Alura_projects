<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Cabecalho",
    data() {
        return {
            // logado: true,
            logado: false,
        }
    },
    methods: {
        rotaHome() {
            let rotaAtiva = this.$route.name

            if (rotaAtiva != "Home") {
                return this.$router.push('/')
            }
            else {
                return this.$router.push('/telaanimais')
            }
        },
        mobile() {
            if (screen.width <= 600) {
                return true;
            }
            else {
                return false;
            }
        },
    },
    computed: {
        rotaPatas() {
            let rotaAtiva = this.$route.name
            if (rotaAtiva == "Cadastro" || rotaAtiva == "Login") {
                return "patas"
            } else {
                return "none"
            }
        }
    }
})
</script>

<template>
    <div class="cabecalhoPrincipal" v-bind:id="rotaPatas">
        <div class="container">
            <nav class="cabecalhoPrincipal-nav">
                <div class="menu">
                    <router-link to="/" v-if="!mobile()" class="logo">
                        <img src="../assets/img/Logo.svg" alt="Mensagem" class="logoImg">
                    </router-link>

                    <div @click="rotaHome()" class="cabecalhoPrincipal-nav-link">
                        <img src="../assets/img/Casa.svg" alt="Home">
                    </div>

                    <router-link to="/mensagem" class="cabecalhoPrincipal-nav-link">
                        <img src="../assets/img/Mensagens.svg" alt="Mensagem">
                    </router-link>
                </div>

                <router-link to="/" v-show="logado == true" class="cabecalhoPrincipal-usuario-link">
                    <img src="../assets/img/Usuário.png" alt="Usuário">
                </router-link>

            </nav>

        </div>
    </div>
</template>

<style scoped>
#patas {
    background-image: url(../assets/img/Patas.png);
    background-repeat: no-repeat;
    background-position: right 0% top 20%;
    background-size: 10%;
}

.cabecalhoPrincipal .container {
    display: flex;
}

.menu {
    width: 25%;
    display: flex;
    min-height: 56px;
    align-items: center;
    justify-content: right;
}

.cabecalhoPrincipal-nav {
    display: flex;
    align-items: center;
    margin: 4%;
    flex-grow: 1;
}

.cabecalhoPrincipal-nav-link {
    margin: 0% 5% 0%;
    cursor: pointer;
}

.cabecalhoPrincipal-usuario-link {
    display: flex;
    flex-grow: 1;
    justify-content: right;
    cursor: pointer;
}

.logo {
    margin: 0% 10% 0%;
    cursor: pointer;
}

.logoImg {
    height: 6vh;
    width: auto;
}

@media only screen and (max-width: 1024px) {
    .cabecalhoPrincipal-nav {
        margin: 8%;
    }

    .menu {
        width: 50%;
        justify-content: space-around;
    }

    .cabecalhoPrincipal-nav-link {
        margin: 0% 6% 0%;
    }

    .logo {
        margin: 0%;
    }

    .logoImg {
        height: 4vh;
        width: auto;
    }
}

@media only screen and (max-width: 600px) {
    .cabecalhoPrincipal-nav {
        margin: 10%;
    }

    .menu {
        width: 50%;
        justify-content: space-around;
    }

    .cabecalhoPrincipal-nav-link {
        margin: 0% 6% 0%;
    }
}
</style>
