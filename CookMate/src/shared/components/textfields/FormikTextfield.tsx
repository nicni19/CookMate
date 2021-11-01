import { Field, FieldAttributes, useField } from "formik";
import React from "react";

type myProps = {
    placeholder: string;
    type?: string;
} & FieldAttributes<unknown>;

const FormikTextfield: React.FC<myProps> = ({ ...props }) => {
    const [field, meta] = useField<unknown>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";

    return (
        <Field name={props.name} type="input" validateOnBlur validateOnChange>
            {() => (
                <div>
                    <label>{props.placeholder}</label>
                    <input type="text"></input>
                </div>
            )}
        </Field>
    );
};

export default FormikTextfield;
