export class Field {
    id: string;
    name: string;
    label: string;
    value: string;
    required: boolean;
    placeholder: string;
    helpText: string;
    touched: boolean;
    invalid: boolean;
    error: string;

    constructor(
        name: string,
        label: string,
        value: string,
        required: boolean,
        placeholder: string,
        helpText: string
    ) {
        this.id = `${name}-id`;
        this.name = name;
        this.label = label;
        this.value = value;
        this.required = required;
        this.placeholder = placeholder;
        this.helpText = helpText;
        this.touched = false;
        this.invalid = false;
        this.error = '';
    }

    static SetValue(field: Field, value = ''): Field {
        field.value = value;
        field.touched = true;
        return this.Validate(field);
    }

    static SetError(field: Field, error = ''): Field {
        if (error === null || error.trim().length === 0) {
            field.invalid = false;
            field.error = '';
        } else {
            field.invalid = true;
            field.error = error;
        }
        return field;
    }

    static Validate(field: Field): Field {
        Field.SetError(field);
        field.touched = true;
        if (field.required && field.value.trim().length === 0) {
            return Field.SetError(field, `${field.label} is required.`);
        }
        return field;
    }

    static HasErrors(fields: any): boolean {
        return Object.keys(fields).some((x) => fields[x].invalid);
    }
}