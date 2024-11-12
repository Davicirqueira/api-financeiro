import { deleteFinancas } from "../repository/financasRepository.js";

export default async function deleteFinancasService(id){

    let affectRows = await deleteFinancas(id);

    if(affectRows == 0){

        throw new Error('Nenhuma finança removida.')

    }
    
}