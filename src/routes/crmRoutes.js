import {
    addNewContact,
    getContact,
    getContactWithID,
    updateContact,
    deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // get all contact
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContact)

        // post (send) contact
        .post(addNewContact);
    
    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)

        // update a specific contact
        .put(updateContact)

        // delete a specific contact
        .delete(deleteContact);
}

export default routes;