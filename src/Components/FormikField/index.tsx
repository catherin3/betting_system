import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { AccountCircle } from "@material-ui/icons"

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = "text", required = false }) => {
  return (
    <div className="FormikField" >
      
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        InputProps={{ endAdornment: <AccountCircle /> }}
        helperText={<ErrorMessage name={name}/>}
      />
    </div>
  );
};

export default FormikField;
