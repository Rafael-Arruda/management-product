import { useEffect, useState } from "react";
import yup from "../../utils/yup";



import Input from "../../components/Input";
import Modal from "../../components/Modal";

import { toast } from "react-toastify";

import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import SelectBox from "../../components/Select";
import { getEmployee } from "../../services/employee";
import { getMaterial } from "../../services/material";
import { saveServices } from "../../services/service";
import { getServiceType } from "../../services/serviceType";
import { FormGroup } from "./style";

const schema = yup.object().shape({
  vlr_servico_ser: yup.number().required().positive().integer(),
  txt_servico_ser: yup.string().min(20).required(),
  des_servico_ser: yup.string().min(10).required(),
});


export default function ServiceForm({ service, onClose, visible }) {

  const [form, setForm] = useState(service ?? {});
  const [formData, setFormData] = useState(service ?? {});
  const [error, setError] = useState({});
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
          Promise.all([getEmployee(),getServiceType(), getMaterial()])
          .then(([employees, servicesType, material])=>{
            const serviceTypeOptions = servicesType.map(({ id_servico_tipo_stp, des_servico_tipo_stp, val_servico_tipo_stp })=>{
              return ({
                value: id_servico_tipo_stp,
                label: des_servico_tipo_stp,
                custom:{
                    value:val_servico_tipo_stp,
                    type:'number'
                }
              });
            })

            const materialOptions = material.map(({ id_material_mte, des_material_mte, des_reduz_unidade_und, vlr_material_mte })=>{
              return ({
                value: id_material_mte,
                label: `${des_material_mte} - ${des_reduz_unidade_und}`,
                custom:{
                    value:vlr_material_mte,
                    type:'number'
                }
              });
            })
            setFormData({employees, servicesType:serviceTypeOptions, material:materialOptions})
          })
      } catch (error) {
          console.error("Erro ao buscar:", error);
      }
    };
    fetchData();
  }, [])

  const handleChangeValue = (event) => {
    const inputName = event.target.name.replace(/\[|\]/g, '');
    const value = event.target.value;
    setForm(prev => ({ ...prev, [inputName]: value }))
  }

  const handleSubmit = async (event) => {
    setLoadingSubmit(true);
    setTimeout(async () => {
      try {
        await schema.validate(form);
        // TODO submit to backend
        // const response = await api.post("/service", form);
        console.log(JSON.stringify(form));
        await saveServices(form);
        // console.log(response)
        console.log('submitting')
        toast.success("Serviço salvo!");

        setError({});
      } catch (err) {
        let objError = {};
        err.errors.forEach(e => {
          const [inputError, ...error] = e.split(' ');
          objError = { ...objError, [inputError]: error.join(' ') }
        });

        setError(objError);
      } finally {
        setLoadingSubmit(false);
      }
    }, 1000);
  }


  return (
    <Modal title={form.id_servico_ser ? "Edição" : "Cadastro"} onClose={onClose} visible={visible} >
      <FormGroup>
        <label>Descrição</label>
        <Input
          type={'text'}
          defaultValue={form?.des_servico_ser ?? ''}
          name='des_servico_ser'
          onChange={handleChangeValue}
          error={error?.des_servico_ser ?? false}
        />
      </FormGroup>

      <FormGroup>
        <label>Funcionário</label>
        <SelectBox
          options={formData.employees ?? []}
          defaultValue={form?.id_func ?? []}
          name='funcionario[]'
          onChange={handleChangeValue}
          error={error?.id_func ?? false}
          limit={1}
        />
      </FormGroup>

      <FormGroup>
        <label>Observação</label>
        <Input
          type={'text'}
          defaultValue={form?.txt_servico_ser ?? ''}
          name='txt_servico_ser'
          onChange={handleChangeValue}
          error={error?.txt_servico_ser ?? false}
        />
      </FormGroup>

      <FormGroup>
        <label>Valor</label>
        <Input
          type={'number'}
          defaultValue={form?.vlr_servico_ser ?? ''}
          name='vlr_servico_ser'
          onChange={handleChangeValue}
          error={error?.vlr_servico_ser ?? false}
        />
      </FormGroup>
      <FormGroup>
        <label>Serviços</label>
        <SelectBox
          options={formData.servicesType ?? []}
          defaultValue={form?.tipo_servico ?? []}
          name='tipo_servico[]'
          onChange={handleChangeValue}
          error={error?.tipo_servico ?? false}
        />
      </FormGroup>
      <FormGroup>
        <label>Materiais</label>
        <SelectBox
          options={formData.material ?? []}
          defaultValue={form?.material ?? []}
          name='material[]'
          onChange={handleChangeValue}
          error={error?.material ?? false}
        />
      </FormGroup>

      <ButtonSubmit handleSubmit={handleSubmit} loading={loadingSubmit} >Salvar</ButtonSubmit>
    </Modal>
  )
}