
import api from "./api";


const getFuncionario = async () => {
    try {
        const response = await api.get("/funcionario");
        // const response = [
        //     {
        //          // id_funcionario_tfu: ''
                    // id_funcionario_cargo_tfu: ''
                    // desc_funcionario_tfu: ''
                    // telefone_funcionario_tfu: ''
                    // documento_funcionario_tfu: ''
                    // endereco_funcionario_tfu: ''
                    // is_ativo_tfu: ''
                    // created_at:  ''
                    // updated_at: ''
        //     },
        // ];
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};

const deleteFuncionario = async (id) => {
    try {
        await api.delete(`/funcionario/${id}`)
        return true
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};
const saveFuncionario = async (obj) => {
    try {
        if(obj.id_funcionario_tfu){
            await api.put(`/funcionario/${obj.id_funcionario_tfu}`, obj, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }else{
            await api.post("/funcionario", obj, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        return true;
    } catch (error) {
        console.error("Erro ao buscar:", error);
        return false;
    }
};


export { deleteFuncionario, getFuncionario, saveFuncionario };

