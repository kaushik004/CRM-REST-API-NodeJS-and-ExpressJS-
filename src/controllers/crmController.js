import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// Adding a new Contact to database
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Getting all Contacts from database
export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Getting a specific Contact from databse
export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Updating a specific Contact to databae
export const updateContact = (req, res) => {
    Contact.findByIdAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// Deleting a specific Contact from database
export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID }, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact.' });
    });
}