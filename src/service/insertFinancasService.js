import { insertFinancas } from "../repository/financasRepository.js";

export default async function insertFinancasService(financas){

    let id = await insertFinancas(financas);

    return id;
    
} 