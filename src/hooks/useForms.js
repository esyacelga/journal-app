import {useEffect, useMemo, useState} from "react";

export const useForms = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});
    useEffect(() => {
        createValidators()
    }, [formState]);

    const isFormValid = useMemo(() => {
        for (const item of Object.keys(formValidation)) {
            if (formValidation[item] !== null)
                return false
        }
        return true;
    }, [formValidation]);
    const createValidators = () => {
        const formCheckValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField];
            const data = formState[formField];

            const resultado = fn(data)
            console.log('+++++++++++++');
            console.log(data);
            console.log(resultado);
            console.log('+++++++++++++');
            formCheckValues[`${formField}Valid`] = resultado ? null : errorMessage;
        }
        setFormValidation(formCheckValues);
    }
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {...formState, formState, onInputChange, onResetForm, ...formValidation, isFormValid}
}


