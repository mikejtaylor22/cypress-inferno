describe("Living Will Form - Validation Tests", () => {
	it("should disable Generate button if first name is empty", () => {
		cy.get('input[name="firstName"]').clear();
		cy.get('input[name="lastName"]').type("Doe");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if last name is empty", () => {
		cy.get('input[name="lastName"]').clear();
		cy.get('input[name="firstName"]').type("John");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if birthdate is empty", () => {
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).clear();
		cy.get('input[name="firstName"]').type("John");
		cy.get('input[name="lastName"]').type("Doe");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if user is adding a contact", () => {
		cy.get(":nth-child(3) > .p-2").click();
		cy.get('button[type="submit"]').should("be.disabled");
	});
	it("should enable Generate button if all form fields are valid", () => {
		cy.get('input[name="firstName"]').clear().type("John");
		cy.get('input[name="lastName"]').clear().type("Doe");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		)
			.clear()
			.type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("not.be.disabled");
	});
});

describe("Healthcare Form - Validation Tests", () => {
	beforeEach(() => {
		cy.contains("Healthcare Power of Attorney").click();
		cy.get(".col-span-3 > .text-lg").should("be.visible");
	});

	it("should disable Generate button if first name is empty", () => {
		cy.get('input[name="firstName"]').clear();
		cy.get('input[name="lastName"]').type("Doe");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if last name is empty", () => {
		cy.get('input[name="lastName"]').clear();
		cy.get('input[name="firstName"]').type("John");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if birthdate is empty", () => {
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		).clear();
		cy.get('input[name="firstName"]').type("John");
		cy.get('input[name="lastName"]').type("Doe");
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if user is adding a agent", () => {
		cy.get(":nth-child(3) > .p-2").click();
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if user is adding a Guardian", () => {
		cy.get(":nth-child(4) > .p-2").click();
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should disable Generate button if user is adding an Estate Guardian", () => {
		cy.get(":nth-child(5) > .p-2").click();
		cy.get('button[type="submit"]').should("be.disabled");
	});

	it("should enable Generate button if all form fields are valid", () => {
		cy.get('input[name="firstName"]').clear().type("John");
		cy.get('input[name="lastName"]').clear().type("Doe");
		cy.get(
			":nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .px-3"
		)
			.clear()
			.type("04/10/1987{Enter}");
		cy.get('button[type="submit"]').should("not.be.disabled");
	});
});
