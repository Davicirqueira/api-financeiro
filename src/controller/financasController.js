import insertFinancasService from "../service/insertFinancasService.js";
import selectFinancasService from "../service/selectFinancasService.js";
import updateFinancasService from "../service/updateFinancasService.js";
import deleteFinancasService from "../service/deleteFinancasService.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post('/financa', async (req, resp) => {

    try {
    
        let financa = req.body;

        let id = await insertFinancasService(financa);

        resp.send({

            idFinanca: id

        })

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/financa', async (req, resp) => {

    try {
    
        let records = await selectFinancasService();

        resp.send(records);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/financa/:id', async (req, resp) => {

    try {
    
        let financa = req.body;

        let id = req.params.id;

        await updateFinancasService(financa, id);

        resp.send();

    }
    catch(err){
     
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/financa/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        await deleteFinancasService(id);

        resp.send()

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})

export default endpoints;