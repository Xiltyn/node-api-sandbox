"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    constructor() {
        this.addNewContact = (req, res) => {
            let newContact = new Contact(req.body);
            newContact.save((err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json(contact);
            });
        };
        this.getContacts = (req, res) => {
            Contact.find({}, (err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json(contact);
            });
        };
        this.getContactById = (req, res) => {
            Contact.findById(req.params.contactId, (err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json(contact);
            });
        };
        this.updateContact = (req, res) => {
            Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json(contact);
            });
        };
        this.deleteContact = (req, res) => {
            Contact.remove({ _id: req.params.contactId }, (err, contact) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: `Successfully deleted contact { _id: ${req.params.contactId} }!` });
            });
        };
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map