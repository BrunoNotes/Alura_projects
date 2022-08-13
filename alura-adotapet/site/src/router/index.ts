import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import Cadastro from "../views/Cadastro.vue"
import Login from "../views/Login.vue"
import TelaAnimais from "../views/TelaAnimais.vue"
import Mensagem from "../views/Mensagem.vue"
import Perfil from "../views/Perfil.vue"

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
},
{
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/mensagem',
    name: 'Mensagem',
    component: Mensagem
},
{
    path: '/telaanimais',
    name: 'TelaAnimais',
    component: TelaAnimais
},
{
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
},
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
