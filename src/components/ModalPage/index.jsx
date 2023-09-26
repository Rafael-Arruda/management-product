import React from "react";
import Select from 'react-select'
import {
  Button,
  Input,
  MaterialForm,
  ModalBotao,
  ModalContainer,
  ModalContent,
  ButtonClose,
  ModalHeader,
  DeviderHorizontal
} from "./style";


export default function ModalPage(
  {
    titleModal,
    btnModalClose,
    descriptionTitle,
    titleButtonSubmit,
    titleButtonCloseModal,
    onClickSubmit,
    onClickCloseModal,
    inputTypeDescription,
    InputValueDescription,
    onChangeInputDescription,
    ValueTitle,
    inputTypeValue,
    InputValueValue,
    onChangeInputValue,
    titleUnit,
    options,
    selectedUnit,
    onChangeUnit,
    isSearchable
  }) {
  return(
    <ModalContainer>
      <ModalContent>
          <ModalHeader>
            <h2>{titleModal}</h2>
            <button onClick={btnModalClose}>X</button>
          </ModalHeader>
          <DeviderHorizontal/>
          <div>
            <MaterialForm>
              <span>{descriptionTitle}</span>
              <Input
                type={inputTypeDescription}
                value={InputValueDescription}
                onChange={onChangeInputDescription}
              />
              <span>{ValueTitle}</span>
              <Input
                type={inputTypeValue}
                value={InputValueValue}
                onChange={onChangeInputValue}
              />
             
              <span>{titleUnit}</span>
               <Select
                   options={options} // As opções obtidas da API
                   value={selectedUnit}
                   onChange={onChangeUnit}
                   //(selectedValue) => setSelectedUnit(selectedValue)
                   isSearchable={isSearchable}
               />
              </MaterialForm>
          </div>
          <DeviderHorizontal/>
          <ModalBotao>
              <Button onClick={onClickSubmit}>{titleButtonSubmit}</Button>
              <ButtonClose onClick={onClickCloseModal}>{titleButtonCloseModal}</ButtonClose>
          </ModalBotao>
      </ModalContent>
    </ModalContainer>
  )
}