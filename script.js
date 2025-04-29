function AddressBook() {
    this.contacts = {} ;
};
AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
};
function Contact(firstName,lastName,contact,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.email = email;
};
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};
let addressBook = new AddressBook();
let contactForm = document.getElementById("cform")
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();

    const newContact = new Contact(firstName,lastName,contact,email);
    addressBook.addContact(newContact);
});