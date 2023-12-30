import { Formik, Form } from "formik";
import React, { useState } from "react";

import { initialValue, validationSchemas } from "./config";

import FieldComponent from "../../components/FieldComponent";

const Registration = () => {
    const [user, setUser] = useState([]);
    const [isDisaled, setIsDisabled] = useState(false);

    const disabledButton = () => setIsDisabled(true);

    return (
        <div>
            <div className="w-[70%] ml-auto mr-auto mt-10">
                <h1>Sign up for an account</h1>
                <p className="mt-4 mb-8">
                    Signing up for an account is free and easy. Fill out the
                    form below to get started. JavaScript is required to to
                    continue.
                </p>
            </div>

            <Formik
                initialValues={initialValue}
                validationSchema={validationSchemas}
                onSubmit={(values, error) => {
                    setUser([...user, values]);

                    disabledButton();
                }}
            >
                <Form className=" w-[70%] ml-auto mr-auto mt-10">
                    <FieldComponent
                        textLabel="Username"
                        name="registrationName"
                        type="text"
                        placeholder="Enter your name (min 6 symbols)"
                    />
                    <FieldComponent
                        textLabel="Password"
                        name="registrationPassword"
                        type="password"
                        placeholder="Enter your name (min 6 symbols)"
                    />
                    <FieldComponent
                        textLabel="Password Confirm"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                    />
                    <FieldComponent
                        textLabel="Email"
                        name="registrationEmail"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button
                        className=" bg-blue border-2 rounded-full  p-2 text-main hover:bg-aqua hover:text-black transition-all  py-2 px-7 duration-500 mt-2 mb-6"
                        type="submit"
                        disabled={isDisaled}
                    >
                        Registr
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Registration;
