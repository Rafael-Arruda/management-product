
import api from "./api";


const getCentroCusto = async () => {
    try {
        const response = await api.get("/centroCusto");
        // const response = [
        //     {
        //         value: 1,
        //         label: 'Joao'
        //     },
        //     {
        //         value: 2,
        //         label: 'Pedro'
        //     },
        // ];
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { getCentroCusto };
