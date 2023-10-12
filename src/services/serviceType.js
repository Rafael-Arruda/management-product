
import api from "./api";


const getServiceType = async () => {
    try {
        const response = await api.get("/servicoTipo");
        // const response = [
        //     {
        //         "id_servico_tipo_stp": 1,
        //         "des_servico_tipo_stp": "Corte",
        //         "vlr_servico_tipo_stp": 3500,
        //         "is_ativo_stp": 1,
        //         "created_at": "2023-01-01T00:00:00.000000Z",
        //         "updated_at": null
        //     },
        //     {
        //         id_servico_tipo_stp:2,
        //         des_servico_tipo_stp:'Barba',
        //         val_servico_tipo_stp:15.00,
        //         created_at:'2023-01-01',
        //         updated_at:'2023-01-01'
        //     }
        // ];
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};

const deleteServiceType = async (id) => {
    try {
        // const response = await api.get("/service");
        const response = {};
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};
const saveServiceType = async (obj) => {
    try {
        // const response = await api.get("/service");
        const success = false;
        return success;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { deleteServiceType, getServiceType, saveServiceType };

