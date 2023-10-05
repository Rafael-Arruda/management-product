
// import api from "./api";


const getServiceType = async () => {
    try {
        // const response = await api.get("/service");
        const response = [
            {
                value: 1,
                label: 'Cabelo',
                custom:{
                    value:'12.55',
                    type:'number'
                }
            },
            {
                value: 2,
                label: 'Barba'
            },
        ];
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { getServiceType };
