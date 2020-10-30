import { Field, ErrorMessage } from "formik";
import React from 'react'



interface FormikFieldProps {
    name: string;
    type?: boolean;
    required?: boolean;
  }

const CheckBox: React.FC<FormikFieldProps> = ({ name, type = 'checkbox', required = false }) => {
    return (
      <div className="Checkbox" >
        
        <Field
          required={required}
          autoComplete="off"
          as={CheckBox}
          name={name}
          type={type}
          helperText={<ErrorMessage name={name}/>}
        />
      </div>
    );
  };
  
  export default CheckBox;
  