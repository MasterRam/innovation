import { FormInputCollection } from '../models/form-input';

export const SampleFormConst: FormInputCollection = {
    title: 'Form 1',
    layout: 'one',
    elements: [
        {
            name: 'name',
            type: 'text',
            required: true,
            id: 'input',
            label: 'Name',
            placeholder: 'Enter Name'
        }, {
            name: 'Age',
            type: 'text',
            required: true,
            id: 'input_num',
            label: 'Age',
            placeholder: 'Enter Age'
        }
    ]
} as FormInputCollection;


