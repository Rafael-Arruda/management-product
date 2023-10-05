
// import api from "./api";


const getEmployee = async () => {
    try {
        // const response = await api.get("/service");
        const response = [
            {
                value: 1,
                label: 'Joao'
            },
            {
                value: 2,
                label: 'Pedro'
            },
        ];
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { getEmployee };
