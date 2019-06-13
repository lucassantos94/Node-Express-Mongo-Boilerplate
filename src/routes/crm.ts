import { Request, Response } from 'express';
import { ContactController } from '../controllers/crm';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: any): void {
    app.route('/').get((req: Request, res: Response): void => {
      res.status(200).send({
        message: 'get response'
      });
    });
    // Contact
    app
      .route('/contact')
      // GET endpoint
      .get(this.contactController.getContacts)
      // POST endpoint
      .post(this.contactController.addNewContact);

    // GET  /contact/:contactId
    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactById)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
