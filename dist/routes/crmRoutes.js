"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.routes = (app) => {
            // Contact
            app.route('/contact')
                .get(this.contactController.getContacts)
                .post(this.contactController.addNewContact);
            // Contact details
            app.route('/contact/:contactId')
                .get(this.contactController.getContactById)
                .put(this.contactController.updateContact)
                .delete(this.contactController.deleteContact);
        };
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map