import React from "react"
import { ErrorMessage, Field } from "formik"
import {TextField,IconButton} from "@material-ui/core"
import {VisibilityOff, Visibility as VisibilityOn } from '@material-ui/icons'

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  showsPassword: boolean;
  setShowsPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowPassword: React.FC<FormikFieldProps> = ({ name, label, type = "text", required = false, showsPassword, setShowsPassword}) => {
    // const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleShowPassword = () => {
        setShowsPassword(prev => !prev);
    }
  return (
    <div className="showPassword">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        InputProps={{ endAdornment: <IconButton edge='end' onClick={handleShowPassword}>{showsPassword ? <VisibilityOff /> : <VisibilityOn />}</IconButton> }}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default ShowPassword;