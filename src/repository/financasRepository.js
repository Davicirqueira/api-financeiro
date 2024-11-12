import con from './connection.js';

export async function insertFinancas(financas){

    const command = ` 
    
        insert into tb_financas (ds_valor, ds_origem)
        values (?, ?)
    
    `;

    let response = await con.query(command, [financas.valor, financas.origem]);

    let info = response[0];

    let id = info.insertId;

    return id;

}


export async function selectFinancas(){

    const command = ` 
    
        select 
        id_financa 		idFinanca,
        ds_valor		valor,
        ds_origem		origem
        from tb_financas
    
    `;

    let response = await con.query(command);

    let records = response[0];

    return records;

}


export async function updateFinancas(financas, id){

    const command = `
    
        update tb_financas
        set ds_valor = ?,
        ds_origem = ?
        where id_financa = ?
    
    `;

    let response = await con.query(command, [financas.valor, financas.origem, id]);

    let info = response[0];

    let affectRows = info.affectedRows;

    return affectRows;

}


export async function deleteFinancas(id){

    const command = `  
    
        delete from tb_financas
        where id_financa = ?
    
    `;

    let response = await con.query(command, [id]);

    let info = response[0];

    let affectRows = info.affectedRows;

    return affectRows;

}