import TableRow from '../TableRow';
import { StyledTable } from './style';
import api from "../../services/api";
import TableHeader from '../TableHeader';

export default function TableContent () {

    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetchMaterials();
      }, []);

    async function fetchMaterials() {
        try {
        const response = await api.get("/material");
        setMaterials(response.data);
        console.log("Lista de materiais:", response.data);
        } catch (error) {
        console.error("Erro ao buscar materiais:", error);
        }
    }

    async function handleDeleteMaterial(material) {
        const userConfirmed = window.confirm(
            `Você realmente deseja excluir o material "${material.des_material_mte}"?`
          );
          if (userConfirmed) {
            if (material.is_ativo_mte === 0) {
              alert('Este material não pode ser excluído porque não está ativo.');
            } else {
              try {
                await api.delete(`/material/${material.id_material_mte}`);
                alert(`O material "${material.des_material_mte}" foi excluído com sucesso.`);
                fetchMaterials();
                console.log(handleDeleteMaterial())
              } catch (error) {
                console.error('Erro ao excluir material', error);
              }
            }
          }
    }

  return (
    <StyledTable>
        <TableHeader/>
        <tbody>
            { materials
                .filter((material) => material.is_ativo_mte === 1)
                .map((material) => (
                    <TableRow
                        key={material.id_material_mte}
                        material={material}
                        onClickEditar={() => {} }
                        onClickExluir={() => handleDeleteMaterial(material) }
                    />
                ))
            }
        </tbody>
    </StyledTable>
  )
}