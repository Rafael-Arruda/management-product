import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Icon from '../Icons';
import {
  Box,
  InputError,
  Label,
  SelectedBox,
  VisibledPointer
} from "./style";

const SelectBox = ({ options, defaultValue, name, onChange, error }) => {


  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visibled, setVisibled] = useState(true);

  useEffect(() => {
    const selected = options.filter(reg => defaultValue.includes(reg.value))
    setSelectedOptions(selected);
  }, [])

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    const event = { target: { name: name, value: selected } };
    onChange(event)
  };

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
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        }
      </SelectedBox>
    </>
  );
};

export default SelectBox;
