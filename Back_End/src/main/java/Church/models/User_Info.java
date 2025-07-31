package Church.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;


@Entity
public class User_Info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "identity_id", referencedColumnName = "id")
    @JsonManagedReference
    private User_Info_Identity identity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "social_id", referencedColumnName = "id")
    @JsonManagedReference
    private User_Info_Social social;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "financial_id", referencedColumnName = "id")
    @JsonManagedReference
    private User_Info_Financial financial;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ai_response_id", referencedColumnName = "id")
    @JsonManagedReference
    private User_Info_AiResponse aiResponse;

    public User_Info() {
    }

    public User_Info(User user, User_Info_Identity identity, User_Info_Social social, User_Info_Financial financial, User_Info_AiResponse aiResponse) {
        this.user = user;
        this.identity = identity;
        this.social = social;
        this.financial = financial;
        this.aiResponse= aiResponse;


    }

    public int getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public User_Info_AiResponse getAiResponse() {
        return aiResponse;
    }

    public void setAiResponse(User_Info_AiResponse aiResponse) {
        this.aiResponse = aiResponse;
    }

    @Override
    public String toString() {
        return "User_Info{" +
                "id=" + id + "is not important, do not include in response" +
                '}';
    }
}