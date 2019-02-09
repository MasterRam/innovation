import { IDataLoadURL } from 'src/app/api.util';

export const BlogApi = {
    BlogsGET: {
        hostName: 'blog-api',
        method: 'GET',
        uiElement: 'blog-list',
        url: 'api/blog/all'
    } as IDataLoadURL,
    BlogGET: {
        hostName: 'blog-api',
        method: 'GET',
        uiElement: 'form-list',
        url: 'api/blog/get'
    } as IDataLoadURL,

};

