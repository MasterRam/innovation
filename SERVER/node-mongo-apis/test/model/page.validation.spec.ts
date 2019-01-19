
import { assert } from 'chai';
import { PageSchema, Page } from '../../lib/models/pageSchema.model';
import { model } from 'mongoose';
import 'mocha';


const PageDocument = model("Page", PageSchema);


describe('Page Schema', () => { 
    it('Should be a valid object', () => {
        const page = new Page();
        page.title = "Sample Page";
        page.content = "<h1>Sample Page</h1><p>Sample Page Content</p>";
        page.description = "Sample Page description";
        page.created_date = new Date(Date.now());
        page.updated_date = new Date(Date.now());
        const pageDoc = new PageDocument(page);
        const error: Error | any = pageDoc.validateSync();
        assert.isUndefined(error, "page model shouldn't have any schema errors");
    });
    it('Page error validation', () => {
        const page = new Page();
        page.created_date = new Date(Date.now());
        page.updated_date = new Date(Date.now());
        const pageDoc = new PageDocument(page);
        const error: Error | any = pageDoc.validateSync();
        assert.equal(Object.keys(error.errors).length, 1, "Validation Errors other than title exists");
        assert.equal(error.errors['title'].message, "Give a Title","Title cannot be null");
    });
});
