import { Request, Response } from "express";
import { PageController } from "../controllers/page.controller";
import { attachControllers } from "@decorators/express";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });
    attachControllers(app, [PageController]);
    //  // Contact
    //  app.route('/contact')
    //  // GET endpoint
    //  .get((req: Request, res: Response) => {
    //  // Get all contacts
    //      res.status(200).send({
    //          message: 'GET request asd successfulll!!!!'
    //      })
    //  })
    //  // POST endpoint
    //  .post((req: Request, res: Response) => {
    //  // Create new contact
    //      res.status(200).send(this.pageController.addNewContact)
    //  })

    //  // Contact detail
    //  app.route('/contact/:contactId')
    //  // get specific contact
    //  .get((req: Request, res: Response) => {
    //  // Get a single contact detail
    //      res.status(200).send({
    //          message: 'GET request successfulll!!!!'
    //      })
    //  })
    //  .put((req: Request, res: Response) => {
    //  // Update a contact
    //      res.status(200).send({
    //          message: 'PUT request successfulll!!!!'
    //      })
    //  })
    //  .delete((req: Request, res: Response) => {
    //  // Delete a contact
    //      res.status(200).send({
    //          message: 'DELETE request successfulll!!!!'
    //      })
    //  })
  }
}
