import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilderApi } from './form-editor.api';

@Injectable()
export class FormEditorService {

    constructor(private api: ApiService) { }

    get() {
        this.api.request({ urlObj: FormBuilderApi.FormGET });
    }
    saveForm() {
        this.api.request({ urlObj: FormBuilderApi.FormPOST });
    }
}
