export default class Identity {
    constructor(id, firstName, lastName, address, zipCode, state, dob, phoneNumber, email, isRenting, hasSocialSecurityNumber, hasDriversLicence, hasPassport) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.zipCode = zipCode;
        this.state = state;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isRenting = isRenting; // Boolean
        this.hasSocialSecurityNumber = hasSocialSecurityNumber; // Boolean
        this.hasDriversLicence = hasDriversLicence; // Boolean
        this.hasPassport = hasPassport; // Boolean  
       }; 
}