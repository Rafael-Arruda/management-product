import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Icon from '../Icons';
import Input from '../Input';
import {
  Box,
  InputError,
  Label,
  SelectedBox,
  VisibledPointer
} from "./style";

const SelectBox = ({ options, defaultValue, name, onChange, error, limit = 0 }) => {


  // console.log(defaultValue);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visibled, setVisibled] = useState(true);

  useEffect(() => {
    const selected = options.filter(reg => defaultValue.includes(reg.value))
    setSelectedOptions(selected);
  }, [options])

  const handleSelectChange = (selected) => {
    if(limit == 1 && selected.length > 0){
      selected = [selected.at(-1)];
    }
    setSelectedOptions(selected);
    if(limit == 1){
      selected = selected[0].value
    }
    const event = { target: { name: name, value: selected } };
    onChange(event)
  };
  const handleChangeCustomValue = ({customValue, value}) => {
    const newSelectedOptions = selectedOptions.map(reg => {
      if(reg.value === value){
        reg.custom.value = customValue;
      }
      return reg;
    })
    setSelectedOptions(newSelectedOptions);
    const event = { target: { name: name, value: newSelectedOptions } };
    onChange(event)
  }

  return (
    <>
      <Box error={error}>
        <Select
          options={options}
          isMulti
          value={selectedOptions}
          onChange={handleSelectChange}
        />
      </Box>
      {error && <InputError>{`${error[0].toUpperCase()}${error.substring(1)}`}</InputError>}
      <SelectedBox>
        <Label>
          <label>Selecionado(s):</label>
          <VisibledPointer onClick={() => setVisibled((prev) => !prev)}>
            {!visibled && <Icon icon={'Eye'} />}
            {visibled && <Icon icon={'EyeSlash'} />}
          </VisibledPointer>
        </Label>
        {
          visibled &&
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.value}>{option.label} {option.custom && <Input type={option.custom.type} defaultValue={option.custom.value} onChange={(e)=>handleChangeCustomValue({customValue: e.target.value, value: option.value})}/> }</li>
            ))}
          </ul>
        }
      </SelectedBox>
    </>
  );
};

export default SelectBox;
