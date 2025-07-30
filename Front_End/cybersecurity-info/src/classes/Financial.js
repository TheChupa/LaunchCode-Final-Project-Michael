export default class Financial {
    constructor (id, bankName, creditScore, hasVenmo, hasCashApp, hasPaypal, hasCreditCard, hasCrypto) {
        this.id = id;
        this.bankName = bankName;
        this.creditScore = creditScore;
        this.hasVenmo = hasVenmo; // Boolean 
        this.hasCashApp = hasCashApp; // Boolean
        this.hasPaypal = hasPaypal; // Boolean 
        this.hasCreditCard = hasCreditCard; // Boolean 
        this.hasCrypto = hasCrypto; // Boolean  

    }
}