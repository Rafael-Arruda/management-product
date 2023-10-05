
// import api from "./api";


const getMaterial = async () => {
    try {
        // const response = await api.get("/service");
        const response = [
            {
                value: 1,
                label: 'Lamina de barbear',
                custom:{
                    value:'1.00',
                    type:'number'
                }
            },
            {
                value: 2,
                label: 'Giz preto',
                custom:{
                    value:'1.00',
                    type:'number'
                }
            },
        ];
        return response;
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
};


export { getMaterial };
