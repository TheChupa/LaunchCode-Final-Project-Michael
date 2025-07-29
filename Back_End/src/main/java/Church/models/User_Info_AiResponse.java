package Church.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class User_Info_AiResponse {

    // Will hold responses from the Rest Controller input.

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;

@Lob
@Column(name="identity_response", columnDefinition = "TEXT")
   private String identityResponse;
@Lob
@Column(name="financial_response", columnDefinition = "TEXT")
   private String financialResponse;

@Lob
@Column(name="social_response", columnDefinition = "TEXT")
   private String socialResponse;

   @OneToOne(mappedBy = "aiResponse")
   @JsonBackReference
   private User_Info userInfo;

    public User_Info_AiResponse(){}

    public User_Info_AiResponse(String identityResponse, String financialResponse, String socialResponse) {
        this.identityResponse = identityResponse;
        this.financialResponse = financialResponse;
        this.socialResponse = socialResponse;
    }

    public int getId() {
        return id;
    }

    public String getIdentityResponse() {
        return identityResponse;
    }

    public void setIdentityResponse(String identityResponse) {
        this.identityResponse = identityResponse;
    }

    public String getFinancialResponse() {
        return financialResponse;
    }

    public void setFinancialResponse(String financialResponse) {
        this.financialResponse = financialResponse;
    }

    public String getSocialResponse() {
        return socialResponse;
    }

    public void setSocialResponse(String socialResponse) {
        this.socialResponse = socialResponse;
    }

    @Override
    public String toString() {
        return "User_Info_AiResponse{" +
                "id=" + id +
                ", identityResponse='" + identityResponse + '\'' +
                ", financialResponse='" + financialResponse + '\'' +
                ", socialResponse='" + socialResponse + '\'' +
                ", userInfo=" + userInfo +
                '}';
    }
}
