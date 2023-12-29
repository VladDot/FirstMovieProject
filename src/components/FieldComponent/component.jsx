import { Field } from "formik";

const FieldComponent = ({
    name,
    type,
    value,
    touched,
    onChange,
    textLabel,
    placeholder,
    ...props
}) => {
    return (
        <Field name={name}>
            {({ meta, form, field }) => {
                const error =
                    meta.error && meta.touched ? meta.error : undefined;
                const handleChange = async (e) => {
                    await form.setFieldValue(name, e.target.value);
                    form.setFieldTouched(name, false);
                };
                return (
                    <div className=" mt-2 mb-6">
                        <span>{textLabel && textLabel}</span>
                        <input
                            className={
                                error
                                    ? "border-2 p-2 w-full border-red"
                                    : "border-2 p-2 w-full"
                            }
                            type={type}
                            name={name}
                            onChange={handleChange}
                            value={field.value}
                            placeholder={placeholder}
                        />
                        {error && <span className="text-red">{error}</span>}
                    </div>
                );
            }}
        </Field>
    );
};

export default FieldComponent;
