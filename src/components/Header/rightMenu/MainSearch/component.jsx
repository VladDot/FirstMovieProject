import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";

import { getStyles } from "./style";

const MainSearch = () => {
    const [isActive, setIsActive] = useState(false);
    const { serchWrapper, searchButton } = getStyles(isActive);

    const initialValue = {
        searchInput: "",
    };

    const searchNavigate = useNavigate();

    const onSubmit = ({ searchInput }, formik) => {
        searchNavigate(`/search/${searchInput}`);
        setIsActive(!isActive);
        formik.resetForm();
    };

    return (
        <div>
            <button
                className={searchButton}
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                Search
            </button>
            <Formik
                initialValues={initialValue}
                onSubmit={onSubmit}
            >
                {({ values, errors, handleChange }) => (
                    <Form>
                        <div className={serchWrapper}>
                            <div className="w-3/4 border-2 border-blue rounded-full ">
                                <input
                                    className="w-[83%] px-2 py-1 outline-none  rounded-full text-blue"
                                    type="text"
                                    name="searchInput"
                                    value={values.searchInput}
                                    onChange={handleChange}
                                />
                                <button
                                    className="bg-blue  w-[17%]  rounded-full h-full hover:shadow-2xl hover:bg-burgerBg hover:border-burgerBg"
                                    type="submit"
                                >
                                    click
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MainSearch;
