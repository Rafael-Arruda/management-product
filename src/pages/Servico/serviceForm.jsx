import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

import api from "../../services/api";
import { Button, FormGroup } from "./style";


export default function ServiceForm({ service, onClose, visible }) {

  const [form, setForm] = useState({});
  useEffect(() => { setForm(service ?? {}) }, [service])


  const handleChangeValue = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    setForm(prev => ({ ...prev, [inputName]: value }))
  }

  const handleSubmit = async (event) => {
    // TODO: implementar yup
    if (form.des_servico_ser && form.txt_servico_ser && form.vlr_servico_ser) {
      const response = await api.post("/service", form);
      console.log(response)
    } else {
      // alert
      console.log('alert')
    }
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
        />
      </FormGroup>

      <FormGroup>
        <label>Observação</label>
        <Input
          type={'text'}
          defaultValue={form?.txt_servico_ser ?? ''}
          name='txt_servico_ser'
          onChange={handleChangeValue}
        />
      </FormGroup>

      <FormGroup>
        <label>Valor</label>
        <Input
          type={'number'}
          defaultValue={form?.vlr_servico_ser ?? ''}
          name='vlr_servico_ser'
          onChange={handleChangeValue}
        />
      </FormGroup>

      <Button onClick={handleSubmit}>Salvar</Button>
    </Modal>
  )
}