package Church.models.dto;

import Church.models.*;

public class User_InfoDTO {
    private int userId;
    private User_Info_Identity identity;
    private User_Info_Social social;
    private User_Info_Financial financial;
    private AiResponse aiResponse;

    public int getUserId() {
        return userId;
    }

    public User_Info_Identity getIdentity() {
        return identity;
    }

    public void setIdentity(User_Info_Identity identity) {
        this.identity = identity;
    }

    public User_Info_Social getSocial() {
        return social;
    }

    public void setSocial(User_Info_Social social) {
        this.social = social;
    }

    public User_Info_Financial getFinancial() {
        return financial;
    }

    public void setFinancial(User_Info_Financial financial) {
        this.financial = financial;
    }

    public AiResponse getAiResponse() {
        return aiResponse;
    }

    public void setAiResponse(AiResponse aiResponse) {
        this.aiResponse = aiResponse;
    }

}
