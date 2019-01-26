
export class FormInput {
    type: string | 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'password' | 'list';
    required: boolean | false;
    id: string;
    name: string;
    label: string;
    placeholder: string;
    value: any;
    options: any[];
}

export class FormInputCollection {
    title: string;
    layout: string | 'column1' | 'column2' | 'column3';
    elements: FormInput[];
}
