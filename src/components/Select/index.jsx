import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { parseCurrencyToInt } from '../../utils/format';
import Icon from '../Icons';
import Input from '../Input';
import {
  Box,
  BoxFormSelectBox,
  InputError,
  Label,
  LiSelectBox,
  SelectedBox,
  VisibledPointer
} from "./style";

const SelectBox = ({ options, defaultValue, name, onChange, error, limit = 0 }) => {

  // console.log(defaultValue)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visibled, setVisibled] = useState(true);

  useEffect(() => {
    // preenche quando existir um unico registro
    if(options?.length == 1){
      handleSelectChange(options);
      return;
    }

    // preenche com o valor default
    if(typeof defaultValue == 'number'){
      // console.log('aaaa')
      const selected = options.filter(reg => defaultValue == reg.value)
      setSelectedOptions(selected);
    }else{
      // console.log('bbb')
      const selected = options.filter(reg => defaultValue.includes(reg.value))
      setSelectedOptions(selected);
    }
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
        customValue = parseCurrencyToInt(customValue);
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
              <LiSelectBox key={option.value}>{option.label}
                {
                  option.custom && <>
                  {
                    option.custom.map(reg=>(<BoxFormSelectBox key={`${reg.value}_${reg.column}`}>
                      <label>{reg?.label}</label>
                    <Input type={reg.type} defaultValue={reg.value} mask={reg.mask ?? false} prefixDefault={reg.prefixDefault ?? ''} onChange={(e)=>handleChangeCustomValue({customValue: e.target.value, value: option.value})}/>
                    </BoxFormSelectBox>))
                  }
                  </>
                }
              </LiSelectBox>
            ))}
          </ul>
        }
      </SelectedBox>
    </>
  );
};

export default SelectBox;
