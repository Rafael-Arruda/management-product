import React from "react";

import {
  Button,
  Input,
  MaterialForm,
  ModalBotao,
  ModalContainer,
  ModalContent,
  ButtonClose
} from "./style";

export default function ModalPage({titleModal, btnModalClose, addDescriptionTitle, inputType, InputValue, onChangeInput, titleButtonSubmit, titleButtonCloseModal, onClickSubmit, onClickCloseModal }) {
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
                  <span>{addDescriptionTitle}</span>
                  <Input
                      type={inputType}
                      value={InputValue}
                      onChange={onChangeInput}
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