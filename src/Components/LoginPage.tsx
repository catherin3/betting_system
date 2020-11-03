import { Button,Link } from "@material-ui/core";
import { Formik, Form} from "formik";
import React from "react";
import * as Yup from "yup";
import { useState } from 'react'
import FormikField from "./FormikField/index";
import ShowPassword from './FormikField/password'

interface FormValues {
    userName: string;
    password: string;
    // cfmPassword: string;
    // acceptedTerms: boolean;
}

const initialValues: FormValues = {
    userName: "",
    password: "",
    // cfmPassword: "",
    // acceptedTerms: false
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
    // cfmPassword: Yup.string()
    //     .oneOf([Yup.ref('password')], 'Password must be the same!')
    //     .required("Required!"),
    // acceptedTerms: Yup.boolean()
    //     .required('Required')
    //     .oneOf([true], 'Accept Terms & Conditions is required')
});

const LoginPage: React.FC = () => {
    const handleSubmit = (values: FormValues): void => {
        window.location.href='/mainpage';
        alert(JSON.stringify(values, null, 2));
    }

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}>
                {({ dirty, isValid }) => {
                    return (
                        <Form>
                            <FormikField name="userName" label="Username"/>
                            <ShowPassword name="password" label="Password" type={showPassword ? 'text' : 'password'} showPassword={showPassword} setShowPassword={setShowPassword} />
                            <Link>Forgot Password</Link>
                            <br /> <br/>
                            <Button
                                variant="contained"
                                color="primary" 
                                disabled={!dirty || !isValid}
                                fullWidth
                                type="submit"
                            >
                                Login
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
export default LoginPage;
