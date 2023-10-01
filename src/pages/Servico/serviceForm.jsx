import { useEffect, useState } from "react";
import yup from "../../utils/yup";



import Input from "../../components/Input";
import Modal from "../../components/Modal";

import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import { FormGroup } from "./style";

const schema = yup.object().shape({
  vlr_servico_ser: yup.number().required().positive().integer(),
  txt_servico_ser: yup.string().min(20).required(),
  des_servico_ser: yup.string().min(10).required(),
});

export default function ServiceForm({ service, onClose, visible }) {

  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => { setForm(service ?? {}); }, [service])

  const handleChangeValue = (event) => {
    const inputName = event.target.name;
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
        // console.log(response)
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
    }, 2000);
  }


  return (
    <Modal title="Cadastro" onClose={onClose} visible={visible} >

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

      <ButtonSubmit handleSubmit={handleSubmit} loading={loadingSubmit} >Salvar</ButtonSubmit>
    </Modal>
  )
}