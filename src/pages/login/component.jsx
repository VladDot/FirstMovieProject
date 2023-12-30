import { useState } from "react";

import { Form, Formik } from "formik";

import { validationSchemas, initialValue } from "../login/config";

import FieldComponent from "../../components/FieldComponent";

const Login = () => {
    const [isDisaled, setIsDisabled] = useState(false);

    const disabled = () => setIsDisabled(true);

    return (
        <>
            <div className=" w-[70%] ml-auto mr-auto mt-10 ">
                <h1>Login to your account</h1>
                <p className="mt-4 mb-8">
                    In order to use the editing and rating capabilities of
                    FilmNet, as well as get personal recommendations you will
                    need to login to your account. If you do not have an
                    account, registering for an account is free and simple.
                    Click here to get started.
                </p>
                <p>
                    If you signed up but didn't get your verification email,
                    click here to have it resent.
                </p>
            </div>

            <Formik
                initialValues={initialValue}
                validationSchema={validationSchemas}
                onSubmit={(values) => {
                    disabled();
                }}
            >
                <Form className=" w-[70%] ml-auto mr-auto mt-8 ">
                    <FieldComponent
                        name="name"
                        type="text"
                        textLabel="Username"
                        placeholder="Enter your name (min 6 symbols)"
                    />
                    <FieldComponent
                        name="password"
                        type="password"
                        textLabel="Password"
                        placeholder="Enter your password (min 6 symbols)"
                    />

                    <button
                        disabled={isDisaled}
                        type="submit"
                        className=" bg-blue border-2 rounded-full  py-2 px-7 text-main hover:bg-aqua hover:text-black transition-all duration-500 mt-2 mb-6"
                    >
                        Login
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default Login;
