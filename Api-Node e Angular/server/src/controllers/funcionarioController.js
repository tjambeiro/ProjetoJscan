const Database = require('../../bin/database');
const express = require('express');

function funcionarioController(){

}

funcionarioController.prototype.getapi = async (req,res) =>{
    Database.query(``);then(resultadoQuery =>{

    });
}

funcionarioController.prototype.getpc = async (req,res) =>{

    Database.query(`Select * from TB_COMPUTADOR inner join tb_leitura_pc on tb_computador.idcomputador = 
    tb_leitura_pc.idcomputador WHERE IDFUNCIONARIO = '${req.session.id}' `).then(resultadoQuery =>{
        
        //resultado na variavel linhas
        //em json, basta colocar o nome do campo do banco após o recordsets
        const linhas = resultadoQuery.recordsets[0];
        
        
    });
}

module.exports = funcionarioController;
