import { Button } from "@material-ui/core";
import { Formik, Form, Field} from "formik";
import React from "react";
import * as Yup from "yup";
import { useState } from 'react'
import FormikField from "./FormikField/index";
import ShowPassword from './FormikField/password'
import ShowsPassword from './FormikField/passwords'


interface FormValues {
    userName: string;
    password: string;
    cfmPassword: string;
    acceptedTerms: boolean;
}

const initialValues: FormValues = {
    userName: "",
    password: "",
    cfmPassword: "",
    acceptedTerms: false
};

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, "Too Short!")
        .required("Required!"),
    password: Yup.string()
        .min(8, 'Minimum 8 characters required!')
        .matches(/(?=.*[a-z])/, 'One lowercase required!')
        .matches(/(?=.*[A-Z])/, 'One Uppercase required!')
        .matches(/(?=.*[0-9])/, 'One number required!')
        .required("Required!"),
    cfmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password must be the same!')
        .required("Required!"),
    acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'Accept Terms & Conditions is required')
});

const RegisterForm: React.FC = () => {
    const handleSubmit = (values: FormValues): void => {
        window.location.href='/';
        alert(JSON.stringify(values, null, 2));
    }

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showsPassword, setShowsPassword] = useState<boolean>(false);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}>
                {({ dirty, isValid }) => {
                    return (
                        <Form>
                            <FormikField name="userName" label="Username" required />
                            <ShowPassword name="password" label="Password" type={showPassword ? 'text' : 'password'} showPassword={showPassword} setShowPassword={setShowPassword} required />
                            <ShowsPassword name="cfmPassword" label="Confirm Password" type={showsPassword ? 'text' : 'password'} showsPassword={showsPassword} setShowsPassword={setShowsPassword} required />
<<<<<<< HEAD
                            <label><Field name='acceptedTerms' type='checkbox' required />I agree to the Terms of Service and Privacy Policy</label>
                            <br/><br/> 
=======
                            <label><Field name='acceptedTerms' type='checkbox' required />I agree to the Terms of Service and Privacy Policy</label> <br/><br/> 
>>>>>>> d06673492c0772dbaaee1643735dbab855f1d14f
                            <Button
                                variant="contained"
                                color="primary" 
                                disabled={!dirty || !isValid}
                                fullWidth
                                type="submit"
                            >
                                Register
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
export default RegisterForm;
