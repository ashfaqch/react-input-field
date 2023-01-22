import { Field } from './Field';

export class Customer {
    firstName: Field;
    middleName: Field;
    lastName: Field;
    constructor() {
        this.firstName = new Field('firstName', 'First Name', '', true, 'First Name', '');
        this.middleName = new Field('middleName', 'Middle Name', '', false, 'Middle Name', 'Optional');
        this.lastName = new Field('lastName', 'Last Name', '', true, 'Last Name', '');
    }
}
