import { Router } from 'express'
import TurmaController from '../controllers/TurmaController.js'

const turmas = Router()

turmas.get('/turmas', TurmaController.pegaTodasAsTurmas)
// turmas.get('/turmas/:id', TurmaController.pegaUmaTurma)
// turmas.post('/turmas', TurmaController.criaTurma)
// turmas.put('/turmas/:id', TurmaController.atualizaTurma)
// turmas.delete('/turmas/:id', TurmaController.apagaTurma)

export default turmas;
