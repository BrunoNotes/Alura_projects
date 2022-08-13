import { Router } from "express"
import PessoaController from "../controllers/PessoaController.js"

const pessoas = Router()

// CRUD
pessoas.get('/pessoas', PessoaController.pegaTodasAsPessoas)
pessoas.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
pessoas.post('/pessoas', PessoaController.criaPessoa)
pessoas.put('/pessoas/:id', PessoaController.atualizaPessoa)
pessoas.delete('/pessoas/:id', PessoaController.apagaPessoa)
pessoas.get('/pessoas/:estudanteid/matricula/:matriculaid', PessoaController.pegaUmaMatricula)
pessoas.post('/pessoas/:estudanteid/matricula', PessoaController.criaMatricula)
pessoas.put('/pessoas/:estudanteid/matricula/:matriculaid', PessoaController.atualizaMatricula)
pessoas.delete('/pessoas/:estudanteid/matricula/:matriculaid', PessoaController.apagaMatricula)

export default pessoas;

