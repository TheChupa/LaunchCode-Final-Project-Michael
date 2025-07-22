package Church.models;

import jakarta.persistence.*;

@Entity
public class AiResponse {

    // Will hold responses from the Rest Controller input.

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;

   private String identityResponse;
   private String financialResponse;
   private String socialResponse;

   @OneToOne(mappedBy = "aiResponse")
   private User_Info userInfo;

    public AiResponse(){}
    public AiResponse(String identityResponse, String financialResponse, String socialResponse) {
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
}
