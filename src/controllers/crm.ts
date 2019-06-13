import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crm';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response): void {
    let newContact = new Contact(req.body);
    newContact.save((err, contact): void => {
      if (err) res.send(err);
      res.json(contact);
    });
  }
  public getContacts(req: Request, res: Response): void {
    Contact.find({}, (err, contact): void => {
      if (err) res.send(err);
      res.json(contact);
    });
  }
  public getContactById(req: Request, res: Response): void {
    Contact.findById(req.params.contactId, (err, contact): void => {
      if (err) res.send(err);
      res.json(contact);
    });
  }
  public updateContact(req: Request, res: Response): void {
    Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true },
      (err, contact): void => {
        if (err) res.send(err);
        res.json(contact);
      }
    );
  }
  public deleteContact(req: Request, res: Response): void {
    Contact.findByIdAndRemove(req.params.contactId, (err): void => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact!' });
    });
  }
}
