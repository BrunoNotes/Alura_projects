import { Router } from "express"
import NivelController from '../controllers/NivelController.js'


const niveis = Router()

niveis.get('/niveis', NivelController.pegaTodosOsNiveis)
// niveis.get('/niveis/:id', NivelController.pegaUmNivel)
// niveis.post('/niveis', NivelController.criaNivel)
// niveis.put('/niveis/:id', NivelController.atualizaNivel)
// niveis.delete('/niveis/:id', NivelController.apagaNivel)

export default niveis;
