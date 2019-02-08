import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response
} from '@decorators/express';
import { FormDocument } from '../../models/documents';
import { Form } from './formSchema.model';

@Controller('/api/form')
@Injectable()
export class FormController {
  constructor() {}

  @Get('/:id')
  getData(@Response() res, @Params('id') id: string) {
    const form = new Form();
    form.title = id;
    const newContact = new FormDocument(form);
    res.send(newContact);
  }
  @Post('/:id')
  postData(@Response() res, @Params('id') id: string, @Body() data: Form) {
    data.title = id;
    const newContact = new FormDocument(data);
    res.send(newContact);
  }
}
