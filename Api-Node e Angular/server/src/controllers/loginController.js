const Database = require('../../bin/database');
const express = require('express');


function loginController(){
    
};

loginController.prototype.logar = async (req,res) =>{

    const login = req.body.loginJSON;
    const senha = req.body.senhaJSON;

    console.log(login);

    if(login == undefined || login == "" || senha == undefined || senha ==""){
        console.log("Login e senha não podem estar vazios!!");
        return false;
    }
    else{
        console.log("Sucesso!!");
    }
    Database.query(`Select * from TB_FUNCIONARIO where nmEmail = '${login}' `).then(resultadoQuery =>{
        
        console.log(resultadoQuery);
        const linhas = resultadoQuery.recordsets[0];
        req.session.id = linhas[0].IDFUNCIONARIO;
        console.log(linhas);

        const senhaBanco = linhas[0].nmSenha;
        const valido = senha === senhaBanco ? true : false;
        console.log(valido);
        
    });

    console.log(login);
    console.log(senha);
}

loginController.prototype.cadastrar = async (req, res) => {

    //dados para cadastrar a empresa
    //const IDEMPRESA = req.body.idEmpresa;
    const NMEMPRESA = req.body.nmEmpresa;
    const CDCNPJ    = req.body.cdCnjp;

    //dados para cadastrar o primeiro usuário

    const NMFUNCIONARIO = req.body.nmFuncionario;
    const NMEMAIL = req.body.email;
    const NMCARGO = req.body.cargo;
    const NMSENHA = req.body.senha;

    console.log(NMFUNCIONARIO);
    console.log(NMEMAIL);
    console.log(NMCARGO);
    console.log(NMSENHA);
    console.log(NMEMPRESA);
    console.log(CDCNPJ);

    if (NMEMPRESA == "" || NMEMPRESA == undefined ||
        CDCNPJ == "" || CDCNPJ == undefined ||
        NMFUNCIONARIO == "" || NMFUNCIONARIO == undefined ||
        NMEMAIL == "" || NMEMAIL == undefined ||
        NMCARGO == "" || NMCARGO == undefined ||  
        NMSENHA == "" || NMSENHA == undefined ) {
        console.log('Dados incorretos, preencher corretamente!');
        return false;
    }
    
    console.log('Antes das querys');
    criarEmpresa(NMEMPRESA,CDCNPJ);
    console.log('Depois da empresa');
    //criarUser(NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA);
};

function criarUser(IDEMPRESA, NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA,IDEMPRESA) {
    return new Promise((resolve, reject) => {
        existeUsuario(NMEMAIL).then(existe => {
            if (!existe) {
                Database.query(`INSERT INTO TB_FUNCIONARIO(NMFUNCIONARIO, NMEMAIL, NMCARGO, NMSENHA)
                    VALUES ('${NMFUNCIONARIO}', '${NMEMAIL}', '${NMCARGO}', '${NMSENHA}', ${IDEMPRESA})`).then(results => {
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

function existeUsuario(NMEMAIL) {
    let querystring = `SELECT * FROM TB_FUNCIONARIO WHERE NMEMAIL = '${NMEMAIL}'`;
    return new Promise((resolve, reject) => {
        Database.query(querystring).then(results => {
            const existe = results.rowsAffected > 0 ? true : false;
            resolve(existe);
        }).catch(error => {
            reject(error);
        });
    });
}

function criarEmpresa(NMEMPRESA,CDCNPJ) {
    return new Promise((resolve, reject) => {
        existeEmpresa(NMEMPRESA).then(existe => {
            if (!existe) {
                Database.query(`INSERT INTO TB_EMPRESA(NMEMPRESA,CDCNPJ)
                    VALUES ('${NMEMPRESA}', '${CDCNPJ})`).then(results => {
                    resolve(results);
                    console.log(results);
                }).catch(error => {
                    reject(error);
                });
            } else {
                console.log(`Empresa já cadastrada ${NMEMPRESA} já cadastrado.`);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

function existeEmpresa(NMEMPRESA) {
    let querystring = `SELECT * FROM TB_EMPRESA WHERE NMEMPRESA = '${NMEMPRESA}'`;
    return new Promise((resolve, reject) => {
        Database.query(querystring).then(results => {
            const existe = results.rowsAffected > 0 ? true : false;
            console.log(existe);
        }).catch(error => {
            reject(error);
        });
    });
}



module.exports = loginController;