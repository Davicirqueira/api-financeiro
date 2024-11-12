import { updateFinancas } from "../repository/financasRepository.js";

export default async function updateFinancasService(financas, id){

    let affectRows = await updateFinancas(financas, id);

    if(affectRows == 0){

        throw new Error('Nenhuma finança alterada.')

    }
    
}