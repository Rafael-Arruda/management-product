import React from "react";
import {
  InputError,
  InputForm
} from "./style";


export default function Input({ type, defaultValue, onChange, error, ...props }) {
  return (<>
    <InputForm
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      {...props}
    />
    {error && <InputError>{`${error[0].toUpperCase()}${error.substring(1)}`}</InputError> }
    
  </>
  )
}