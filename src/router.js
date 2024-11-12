import financasController from './controller/financasController.js'

export default function ApiRouters(servidor){

    servidor.use(financasController);

}