
import api from "./api";


const getUnidade = async () => {
    try {
        const response = await api.get("/unidade");
        // const response = [
        //     {
        //         id_unidade_und:1,
        //         des_unidade_und:'Quilo',
        //         des_reduz_unidade_und:'Kg',
        //         created_at:'2023-01-01',
        //         updated_at:'2023-01-01'
        //     },
        //     {
        //         id_unidade_und:2,
        //         des_unidade_und:'Litro',
        //         des_reduz_unidade_und:'L',
        //         created_at:'2023-01-01',
        //         updated_at:'2023-01-01'
        //     },
        // ];
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};

const deleteUnidade = async (id) => {
    try {
        // const response = await api.get("/service");
        const response = {};
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};
const saveUnidade = async (obj) => {
    try {
        // const response = await api.get("/service");
        const success = false;
        return success;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { deleteUnidade, getUnidade, saveUnidade };

