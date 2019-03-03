import { IDataLoadURL } from 'src/app/api.util';

export const FormBuilderApi = {
  FormGET: {
      hostName: 'form-api',
      method: 'POST',
      uiElement: 'form-list',
      url: 'api/form'
  } as IDataLoadURL,
  FormPOST: {} as IDataLoadURL
};
