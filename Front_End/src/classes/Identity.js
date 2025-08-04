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


       worthHowMuch() {

        let count = 0;
        

        const identityFactors = [
            this.firstName,
            this.lastName,
            this.address,
            this.zipCode,
            this.state,
            this.dob,
            this.phoneNumber,
            this.email,
        ]

        identityFactors.forEach(factor => {
            if (factor) {
                count++;
            }
        });

        const identityValues = [
            this.isRenting,
            this.hasSocialSecurityNumber,
            this.hasDriversLicence,
            this.hasPassport
        ]

        identityValues.forEach(value => {
            if (value) {
                count++;
            }
        });

        
        return count * 10 ;
}
}