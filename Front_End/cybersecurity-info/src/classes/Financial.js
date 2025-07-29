export default class Financial {
    constructor (id, venmoHandle, cashAppHandle, paypalEmail, bankName, creditCardNum, bankAccountNum, cryptoHoldings) {
        this.id = id;
        this.venmoHandle = venmoHandle;
        this.cashAppHandle = cashAppHandle;
        this.paypalEmail = paypalEmail;
        this.bankName = bankName;
        this.creditCardNum = creditCardNum;
        this.bankAccountNum = bankAccountNum;
        this.cryptoHoldings = cryptoHoldings;
    }
}