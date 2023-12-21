import * as Yup from "yup";

export const initialValue = { name: "", password: "" };

export const validationSchemas = Yup.object().shape({
    name: Yup.string()
        .min(6, "minimum 6 symbol")
        .max(18, "maximum 18 symbol")
        .required("required field"),
    password: Yup.string()
        .min(6, "minimum 6 symbol")
        .max(18, "maximum 18 symbol")
        .required("required field"),
});
