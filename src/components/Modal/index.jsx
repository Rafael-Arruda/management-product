import React from "react";
import {
  DeviderHorizontal,
  ModalContainer,
  ModalContent,
  ModalHeader
} from "./style";


export default function Modal({ title, onClose, visible, children }) {
  if (!visible)
    return <></>
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </ModalHeader>
        <DeviderHorizontal />
        {children}
        <DeviderHorizontal />
      </ModalContent>
    </ModalContainer>
  )
}