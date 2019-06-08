
export interface FormInput {
    type: string | 'text' | 'number' | 'date' | 'checkbox' | 'radio' | 'password' | 'list';
    required: boolean | false;
    id: string;
    name: string;
    label: string;
    placeholder: string;
    value: any;
    locked: boolean;
    options: any[];
}

export interface FormInputCollection {
    title: string;
    layout: string | 'one' | 'two' | 'three';
    properties: FormInput[];
}


