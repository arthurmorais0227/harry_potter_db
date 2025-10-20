//lógica (filtros), tratativa de erros e regras de negocio

import * as BruxoModel from './../models/bruxoModel.js'

export const listarTodos = async (req, res) => {
    try {
        const bruxos = await BruxoModel.encontreTodos();

        if(!bruxos || bruxos.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há bruxos na lista',
                bruxos
            })
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de bruxos',
            bruxos
        })
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}