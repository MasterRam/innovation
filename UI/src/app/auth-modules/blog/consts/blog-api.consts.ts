import { IDataLoadURL } from 'src/app/api.util';

export const Bill_Api = {
    'GetBlog': {
        hostName: 'blog-json',
        method: 'GET',
        url: 'template',
        uiElement: 'id:bill-template',
        defaultHeaders: {
            ['content-type']: 'application/json; charset=utf-8'
        }
    } as IDataLoadURL,
};
