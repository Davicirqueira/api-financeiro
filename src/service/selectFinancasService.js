import { selectFinancas } from "../repository/financasRepository.js";

export default async function selectFinancasService(){

    let records = await selectFinancas();

    return records;
    
}