package Church.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class User_Info_Social {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String motherMaidenName;
    private String fatherMiddleName;
    private String firstVehicle;
    private String numOfSiblings;
    private String elementarySchool;
    private String firstPetsName;

    private Boolean hasLinkedIn;
    private Boolean hasFacebook;
    private Boolean hasInstagram;
    private Boolean hasTwitter;
    private Boolean hasTikTok;
    private Boolean hasSnapchat;;
    private Boolean hasYouTube;
    private Boolean hasGithub;


    @OneToOne(mappedBy = "social")
    @JsonBackReference
    private User_Info user_info;

    public User_Info_Social() {
    }

    public User_Info_Social(String motherMaidenName, String fatherMiddleName, String firstVehicle, String numOfSiblings, String elementarySchool, String firstPetsName, Boolean hasLinkedIn, Boolean hasFacebook, Boolean hasInstagram, Boolean hasTwitter, Boolean hasTikTok, Boolean hasSnapchat, Boolean hasYouTube, Boolean hasGithub) {
        this.motherMaidenName = motherMaidenName;
        this.fatherMiddleName = fatherMiddleName;
        this.firstVehicle = firstVehicle;
        this.numOfSiblings = numOfSiblings;
        this.elementarySchool = elementarySchool;
        this.firstPetsName = firstPetsName;
        this.hasLinkedIn = hasLinkedIn;
        this.hasFacebook = hasFacebook;
        this.hasInstagram = hasInstagram;
        this.hasTwitter = hasTwitter;
        this.hasTikTok = hasTikTok;
        this.hasSnapchat = hasSnapchat;
        this.hasYouTube = hasYouTube;
        this.hasGithub = hasGithub;
    }

    public int getId() {
        return id;
    }


    public String getMotherMaidenName() {
        return motherMaidenName;
    }

    public void setMotherMaidenName(String motherMaidenName) {
        this.motherMaidenName = motherMaidenName;
    }

    public String getFatherMiddleName() {
        return fatherMiddleName;
    }

    public void setFatherMiddleName(String fatherMiddleName) {
        this.fatherMiddleName = fatherMiddleName;
    }

    public String getFirstVehicle() {
        return firstVehicle;
    }

    public void setFirstVehicle(String firstVehicle) {
        this.firstVehicle = firstVehicle;
    }

    public String getNumOfSiblings() {
        return numOfSiblings;
    }

    public void setNumOfSiblings(String numOfSiblings) {
        this.numOfSiblings = numOfSiblings;
    }

    public String getElementarySchool() {
        return elementarySchool;
    }

    public void setElementarySchool(String elementarySchool) {
        this.elementarySchool = elementarySchool;
    }

    public String getFirstPetsName() {
        return firstPetsName;
    }

    public void setFirstPetsName(String firstPetsName) {
        this.firstPetsName = firstPetsName;
    }

    public Boolean getHasLinkedIn() {
        return hasLinkedIn;
    }

    public void setHasLinkedIn(Boolean hasLinkedIn) {
        this.hasLinkedIn = hasLinkedIn;
    }

    public Boolean getHasFacebook() {
        return hasFacebook;
    }

    public void setHasFacebook(Boolean hasFacebook) {
        this.hasFacebook = hasFacebook;
    }

    public Boolean getHasInstagram() {
        return hasInstagram;
    }

    public void setHasInstagram(Boolean hasInstagram) {
        this.hasInstagram = hasInstagram;
    }

    public Boolean getHasTwitter() {
        return hasTwitter;
    }

    public void setHasTwitter(Boolean hasTwitter) {
        this.hasTwitter = hasTwitter;
    }

    public Boolean getHasTikTok() {
        return hasTikTok;
    }

    public void setHasTikTok(Boolean hasTikTok) {
        this.hasTikTok = hasTikTok;
    }

    public Boolean getHasSnapchat() {
        return hasSnapchat;
    }

    public void setHasSnapchat(Boolean hasSnapchat) {
        this.hasSnapchat = hasSnapchat;
    }

    public Boolean getHasYouTube() {
        return hasYouTube;
    }

    public void setHasYouTube(Boolean hasYouTube) {
        this.hasYouTube = hasYouTube;
    }

    public Boolean getHasGithub() {
        return hasGithub;
    }

    public void setHasGithub(Boolean hasGithub) {
        this.hasGithub = hasGithub;
    }

    public User_Info getUser_info() {
        return user_info;
    }

    public void setUser_info(User_Info user_info) {
        this.user_info = user_info;
    }

    @Override
    public String toString() {
        return
                ", My mother's Maiden name is: " + motherMaidenName + '\'' +
                ", My Father's Middle Name is: " + fatherMiddleName + '\'' +
                ", My fist vehicle was " + firstVehicle + '\'' +
                ", I have this many siblings: " + numOfSiblings +
                ", My elementary school was: " + elementarySchool + '\'' +
                ", My first Pet's name was: " + firstPetsName + '\'' +
                ", LinkedIN status: " + hasLinkedIn +
                ", Facebook Status: " + hasFacebook +
                ", Instagram status: " + hasInstagram +
                ", Twitter Status: " + hasTwitter +
                ", TikTok Status: " + hasTikTok +
                ", SnapChat Status: " + hasSnapchat +
                ", Gmail status: " + hasYouTube +
                ", GitHub status: " + hasGithub;
    }
}

