import db from "../models/index.js"

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await db.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await db.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await db.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await db.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await db.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            await db.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteid, matriculaid } = req.params
        try {
            const umaMatricula = await db.Matriculas.findOne({ where: { id: Number(matriculaid), estudante_id: Number(estudanteid) } })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteid } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteid) }
        try {
            const novaMatriculaCriada = await db.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteid, matriculaid } = req.params
        const novasInfos = req.body
        try {
            await db.Matriculas.update(novasInfos, { where: { id: Number(matriculaid), estudante_id: Number(estudanteid) } })
            const matriculaAtulizada = await db.Matriculas.findOne({ where: { id: Number(matriculaid) } })
            return res.status(200).json(matriculaAtulizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteid, matriculaid } = req.params
        try {
            await db.Matriculas.destroy({ where: { id: Number(matriculaid) } })
            return res.status(200).json({ mensagem: `id ${matriculaid} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

export default PessoaController;
