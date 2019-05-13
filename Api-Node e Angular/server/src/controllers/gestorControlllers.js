const Database = require('../../bin/database');
const express = require('express');

function gestorController(){

}

gestorController.prototype.cadastrofuncionario = async (req,res) =>{
    const IDEMPRESA = req.body.idEmpresa;
    const IDGESTOR = req.body.idGestor;
    const NMFUNCIONARIO = req.body.nmFuncionario;
    const NMEMAIL = req.body.email;
    const NMCARGO = req.body.cargo;
    const NMSENHA = req.body.senha;

    console.log(IDEMPRESA);
    console.log(IDGESTOR);
    console.log(NMFUNCIONARIO);
    console.log(NMEMAIL);
    console.log(NMCARGO);
    console.log(NMSENHA);

    if ( //IDEMPRESA == "" || IDEMPRESA == undefined || 
        //IDGESTOR == null || IDGESTOR == undefined || 
        NMFUNCIONARIO == "" || NMFUNCIONARIO == undefined ||
        NMEMAIL == "" || NMEMAIL == undefined ||
        NMCARGO == "" || NMCARGO == undefined ||
        NMSENHA == "" || NMSENHA == undefined) {
        console.log('Dados incorretos, preencher corretamente!');
        return false;
    }

    criarUser(null, NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA);
}

gestorController.prototype.cadastroapi = async (req,res) =>{

}

gestorController.prototype.getapi = async (req,res) =>{

}

function criarUser(NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA) {
    return new Promise((resolve, reject) => {
        existeUsuario(NMEMAIL).then(existe => {
            if (!existe) {
                //INSERT INTO TB_USUARIO(IDEMPRESA, IDGESTOR, NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA
                Database.query(`INSERT INTO TB_FUNCIONARIO(NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA)
                    VALUES ('${NMFUNCIONARIO}', '${NMEMAIL}', '${NMCARGO}', '${NMSENHA}')`).then(results => {
                    resolve(results);
                }).catch(error => {
                    reject(error);
                });
            } else {
                console.log(`Usuario com o email ${NMEMAIL} já cadastrado.`);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}


module.exports = gestorController;