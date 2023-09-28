import React from "react";
import {
  InputForm
} from "./style";


export default function Input({ type, defaultValue, onChange, ...props }) {
  return (<InputForm
    type={type}
    defaultValue={defaultValue}
    onChange={onChange}
    {...props}
  />
  )
}