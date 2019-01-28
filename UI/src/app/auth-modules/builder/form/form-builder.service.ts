import { Injectable } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { FormModel } from "./form.model";
import { FormBuilderApi } from "./form-builder.api";

@Injectable()
export class FormBuilderService {
  constructor(private api: ApiService) {}

  getForm(formName: string) {
    return this.api.request<FormModel>({
      urlObj: FormBuilderApi.FormGET,
      queryParam: { name: formName }
    });
  }
}
