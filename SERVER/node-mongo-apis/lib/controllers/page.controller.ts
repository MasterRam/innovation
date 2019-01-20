import { Request, Response } from "express";
import { MongoSchame } from "../context/mongo.context";

const Page = MongoSchame.getPage();

export class PageController {
  public addNewContact(req: Request, res: Response) {
    let newContact = new Page(req.body);   
    
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }
}
