package Church.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class User_Info_Social {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY);
    private int id;

    private String motherMaidenName;
    private String fatherMiddleName;
    private String firstVehicle;
    private int numOfSiblings;
    private String firstPetsName;
    private String linkedInProfile;
    private String facebookProfile;
    private String instagramProfile;
    private String twitterProfile;
    private String tiktokProfile;
    private String snapchatProfile;
    private String youtubeProfile;
}
