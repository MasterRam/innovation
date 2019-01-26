
import { assert } from 'chai';
import 'mocha';
import { model } from 'mongoose';
import { Form, FormSchema } from '../../lib/models/formSchema.model';
import { GetErrorsAsString } from '../extensions/test.extension';


const FormDocument = model('Form', FormSchema);


describe('Form Schema', () => {
    it('Should be a valid object', () => {
        const form = new Form();
        form.title = 'Sample form';
        form.layout = 'column1';
        form.validation = true;
        form.created_date = new Date(Date.now());
        form.updated_date = new Date(Date.now());
        const formDoc = new FormDocument(form);
        const error: Error | any = formDoc.validateSync();
        assert.isUndefined(error, 'Model shouldn\'t have any schema errors');
    });
    it('Form error validation', () => {
        const form = new Form();
        form.created_date = new Date(Date.now());
        form.updated_date = new Date(Date.now());
        const formDoc = new FormDocument(form);
        const error: Error | any = formDoc.validateSync();
        assert.equal(Object.keys(error.errors).length, 1, 'Validation Errors other than title exists \n' + GetErrorsAsString(error.errors));
        assert.equal(error.errors['title'].message, 'Give a Title', 'Title cannot be null');
    });
});
