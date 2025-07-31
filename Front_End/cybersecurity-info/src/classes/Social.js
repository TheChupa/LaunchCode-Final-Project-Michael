export default class Social {

    constructor(id, motherMaidenName, fatherMiddleName, firstVehicle, numOfSiblings, elementarySchool, firstPetsName, hasLinkedIn, hasFaceBook, hasInstagram, hasTwitter, hasTikTok, hasSnapchat, hasYouTube, hasGithub) {
        this.id = id;
        this.motherMaidenName = motherMaidenName;
        this.fatherMiddleName = fatherMiddleName;
        this.firstVehicle = firstVehicle;
        this.numOfSiblings = numOfSiblings;
        this.elementarySchool = elementarySchool;
        this.firstPetsName = firstPetsName;
        this.hasLinkedIn = hasLinkedIn;
        this.hasFaceBook = hasFaceBook;
        this.hasInstagram = hasInstagram;
        this.hasTwitter = hasTwitter;
        this.hasTikTok = hasTikTok;
        this.hasSnapchat = hasSnapchat;
        this.hasYouTube = hasYouTube;
        this.hasGithub = hasGithub;
    }
    

    worthHowMuch() {

        let count = 0;

        let worth = count * 2;

        const socialProfiles = [
            this.hasLinkedIn,
            this.hasFaceBook,
            this.hasInstagram,
            this.hasTwitter,
            this.hasTikTok,
            this.hasSnapchat,
            this.hasYouTube,
            this.hasGithub
        ];
        
        
        socialProfiles.forEach(social => {
            if (social) {
                count++;
            }
            // Calculate worth based on social factors
        });

        return count * 2;
    }



 }
        

