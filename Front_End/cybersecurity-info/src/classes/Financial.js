export default class Financial {
    constructor (id, bankName, creditScore, hasVenmo, hasCashApp, hasPaypal, hasCreditCard, hasCrypto) {
        this.id = id;
        this.bankName = bankName; //Not Booleans
        this.creditScore = creditScore;
        this.hasVenmo = hasVenmo; // Booleans
        this.hasCashApp = hasCashApp; 
        this.hasPaypal = hasPaypal; 
        this.hasCreditCard = hasCreditCard; 
        this.hasCrypto = hasCrypto; 

    }


    worthHowMuch() {
        let count = 0;

        const financialFactors = [
            this.bankName,
            this.creditScore,
            this.hasVenmo,
            this.hasCashApp,
            this.hasPaypal,
            this.hasCreditCard,
            this.hasCrypto
        ];

        financialFactors.forEach(factor => {
            if (factor) {
                count++;
            }
        });

        
        return count * 10;
    }
}