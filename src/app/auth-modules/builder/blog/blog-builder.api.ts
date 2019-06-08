import { IDataLoadURL } from 'src/app/api.util';

export const BlogBuilderApi = {
  BlogGET: {
    hostName: 'blog-api',
    method: 'GET',
    uiElement: 'form-list',
    url: 'api/blog/get'
  } as IDataLoadURL,
  BlogPOST: {
    hostName: 'blog-api',
    method: 'POST',
    uiElement: 'form-list',
    defaultHeaders: {
      ['content-type']: 'application/json'
    },
    url: 'api/blog/post'
  } as IDataLoadURL,

};
