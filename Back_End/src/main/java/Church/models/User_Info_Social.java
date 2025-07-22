package Church.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class User_Info_Social {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String motherMaidenName;
    private String fatherMiddleName;
    private String firstVehicle;
    private int numOfSiblings;
    private String elementarySchool;
    private String firstPetsName;
    private String linkedInProfile;
    private String facebookProfile;
    private String instagramProfile;
    private String twitterProfile;
    private String tiktokHandle;
    private String snapchatProfile;
    private String youtubeProfile;

    @OneToOne(mappedBy = "social")
    private User_Info user_info;

    public User_Info_Social() {
    }

    public User_Info_Social(String motherMaidenName, String fatherMiddleName, String firstVehicle, int numOfSiblings, String elementarySchool, String firstPetsName, String linkedInProfile, String facebookProfile, String instagramProfile, String twitterProfile, String tiktokHandle, String snapchatProfile, String youtubeProfile) {
        this.motherMaidenName = motherMaidenName;
        this.fatherMiddleName = fatherMiddleName;
        this.firstVehicle = firstVehicle;
        this.numOfSiblings = numOfSiblings;
        this.elementarySchool = elementarySchool;
        this.firstPetsName = firstPetsName;
        this.linkedInProfile = linkedInProfile;
        this.facebookProfile = facebookProfile;
        this.instagramProfile = instagramProfile;
        this.twitterProfile = twitterProfile;
        this.tiktokHandle = tiktokHandle;
        this.snapchatProfile = snapchatProfile;
        this.youtubeProfile = youtubeProfile;
    }

    public User_Info getUser_info() {
        return user_info;
    }

    public void setUser_info(User_Info user_info) {
        this.user_info = user_info;
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

    public int getNumOfSiblings() {
        return numOfSiblings;
    }

    public void setNumOfSiblings(int numOfSiblings) {
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

    public String getLinkedInProfile() {
        return linkedInProfile;
    }

    public void setLinkedInProfile(String linkedInProfile) {
        this.linkedInProfile = linkedInProfile;
    }

    public String getFacebookProfile() {
        return facebookProfile;
    }

    public void setFacebookProfile(String facebookProfile) {
        this.facebookProfile = facebookProfile;
    }

    public String getInstagramProfile() {
        return instagramProfile;
    }

    public void setInstagramProfile(String instagramProfile) {
        this.instagramProfile = instagramProfile;
    }

    public String getTwitterProfile() {
        return twitterProfile;
    }

    public void setTwitterProfile(String twitterProfile) {
        this.twitterProfile = twitterProfile;
    }

    public String getTiktokHandle() {
        return tiktokHandle;
    }

    public void setTiktokHandle(String tiktokHandle) {
        this.tiktokHandle = tiktokHandle;
    }

    public String getSnapchatProfile() {
        return snapchatProfile;
    }

    public void setSnapchatProfile(String snapchatProfile) {
        this.snapchatProfile = snapchatProfile;
    }

    public String getYoutubeProfile() {
        return youtubeProfile;
    }

    public void setYoutubeProfile(String youtubeProfile) {
        this.youtubeProfile = youtubeProfile;
    }
}

