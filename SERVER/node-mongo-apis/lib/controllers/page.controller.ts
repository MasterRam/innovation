import { MongoSchame } from "../context/mongo.context";
import { Response, Params, Controller, Get } from '@decorators/express';
import { Injectable } from "@decorators/di";
import { Page } from "../models/pageSchema.model";

const PageSchema = MongoSchame.getPage();

@Controller('/page')
@Injectable()
export class PageController {
  constructor(userService) {}

  @Get('/:id')
  getData(@Response() res, @Params('id') id: string) {
    const page=new Page();
    page.title=id;
    let newContact = new PageSchema(page);   
    res.send(newContact);
  }
}
