import React, { useState } from 'react';
import { Field } from './Field';
import { Customer } from './Customer';

export const CustomerComponent = () => {
    const [input, setInput] = useState<Customer>(new Customer());

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;

        switch (name) {
            case input.firstName.name:
                setInput(prevState => ({
                    ...prevState,
                    [name]: Field.SetValue(input.firstName, value)
                }));
                break;
            case input.middleName.name:
                setInput(prevState => ({
                    ...prevState,
                    [name]: Field.SetValue(input.middleName, value)
                }));
                break;
            case input.lastName.name:
                setInput(prevState => ({
                    ...prevState,
                    [name]: Field.SetValue(input.lastName, value)
                }));
                break;
            default:
                break;
        }
    };

    const onSubmitHandler = (event: any) => {
        event.preventDefault();

        Promise.resolve(validateInputs(input)).then(() => {
            if (!Field.HasErrors(input)) {
                save();
            }
        });
    };

    const reset = () => {
        setInput(new Customer());
    };

    const save = () => {
        alert(`${input.lastName.value}, ${input.firstName.value} ${input.middleName.value}`);
    };

    const validateInputs = (fields: any) => {
        Object.keys(fields).forEach(key => {
            setInput(prevState => ({
                ...prevState,
                [key]: Field.Validate(fields[key])
            }));
        });
    };

    return (
        <>
            <form className='mt-4' onSubmit={onSubmitHandler}>
                <div className="row mb-2">
                    <label htmlFor={input.firstName.id} className="form-label"><b>{input.firstName.label}</b></label>
                    <div className='col-sm-4'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={input.firstName.placeholder}
                            id={input.firstName.id}
                            name={input.firstName.name}
                            value={input.firstName.value}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        {input.firstName.touched && input.firstName.invalid && (
                            <div className="form-text text-danger">{input.firstName.error}</div>
                        )}
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlFor={input.middleName.id} className="form-label"><b>{input.middleName.label}</b></label>
                    <div className='col-sm-4'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={input.middleName.placeholder}
                            id={input.middleName.id}
                            name={input.middleName.name}
                            value={input.middleName.value}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <div className="form-text">{input.middleName.helpText}</div>
                    </div>
                </div>

                <div className="row mb-2">
                    <label htmlFor={input.lastName.id} className="form-label"><b>{input.lastName.label}</b></label>
                    <div className='col-sm-4'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={input.lastName.placeholder}
                            id={input.lastName.id}
                            name={input.lastName.name}
                            value={input.lastName.value}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        {input.lastName.touched && input.lastName.invalid && (
                            <div className="form-text text-danger">{input.lastName.error}</div>
                        )}
                    </div>
                </div>

                <div className="row mb-2 mt-4">
                    <div className='col-sm-4'>
                        <button type="button" className="btn btn-secondary me-2" onClick={reset}>Reset</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
};
