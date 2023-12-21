import * as Yup from "yup";

export const initialValue = {
    registrationName: "",
    registrationPassword: "",
    confirmPassword: "",
    registrationEmail: "",
};

export const validationSchemas = Yup.object().shape({
    registrationName: Yup.string()
        .min(6, "minimum 6 symbol")
        .max(18, "maximum 18 symbol")
        .required("required field"),
    registrationPassword: Yup.string()
        .min(6, "minimum 6 symbol")
        .max(18, "maximum 18 symbol")
        .required("required field"),
    confirmPassword: Yup.string()
        .min(6, "minimum 6 symbol")
        .max(18, "maximum 18 symbol")
        .oneOf(
            [Yup.ref("registrationPassword"), null],
            "The passwords must match"
        )
        .required("required field"),
    registrationEmail: Yup.string()
        .email("not valid email")
        .min(8, "minimum 8 char")
        .max(26, "miximum 26 char")
        .required("required field"),
});
