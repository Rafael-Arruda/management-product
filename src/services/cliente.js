
import api from "./api";


const getCliente = async () => {
    try {
        const response = await api.get("/cliente");
        // const response = [
        //     {
        //         id_servico_ser: 1,
        //         des_servico_ser: 'teste 1',
        //         txt_servico_ser: 'obs do servico',
        //         vlr_servico_ser: 12.50,
        //         created_at: '2023-09-28 20:50'
        //     },
        //     {
        //         id_servico_ser: 2,
        //         des_servico_ser: 'teste 2',
        //         txt_servico_ser: 'obs do servico2',
        //         vlr_servico_ser: 11.50,
        //         created_at: '2023-09-28 21:50'
        //     }
        // ];
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};
const saveCliente = async (obj) => {
    try {
        // const response = await api.get("/service");
        const response = await api.post("/cliente", obj);
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};

export { getCliente, saveCliente };
