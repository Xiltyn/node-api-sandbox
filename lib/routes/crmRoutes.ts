import { ContactController } from "../controllers/crmController";

export class Routes {

	public contactController: ContactController = new ContactController();

	public routes = (app): void => {
		// Contact
		app.route('/contact')
			.get(this.contactController.getContacts)
			.post(this.contactController.addNewContact);

		// Contact details
		app.route('/contact/:contactId')
			.get(this.contactController.getContactById)
			.put(this.contactController.updateContact)
			.delete(this.contactController.deleteContact);
	}
}