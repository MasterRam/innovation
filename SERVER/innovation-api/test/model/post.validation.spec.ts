
import { assert } from 'chai';
import 'mocha';
import { model } from 'mongoose';
import { BlogPost, PostSchema } from '../../lib/models/postSchema.model';
import { GetErrorsAsString } from '../extensions/test.extension';


const PostDocument = model('Post', PostSchema);


describe('Post Schema', () => {
    it('Should be a valid object', () => {
        const post = new BlogPost();
        post.title = 'Sample Post';
        post.content = '<h1>Sample Post</h1><p>Sample Post Content</p>';
        post.tags = ['Sample'];
        post.created_date = new Date(Date.now());
        post.updated_date = new Date(Date.now());
        const postDoc = new PostDocument(post);
        const error: Error | any = postDoc.validateSync();
        assert.isUndefined(error, 'post model shouldn\'t have any schema errors');
    });
    it('Post error validation', () => {
        const post = new BlogPost();
        post.created_date = new Date(Date.now());
        post.updated_date = new Date(Date.now());
        const postDoc = new PostDocument(post);
        const error: Error | any = postDoc.validateSync();
        assert.equal(Object.keys(error.errors).length, 1, 'Validation Errors other than title exists \n' + GetErrorsAsString(error.errors));
        assert.equal(error.errors['title'].message, 'Give a Title', 'Title cannot be null');
    });
});
