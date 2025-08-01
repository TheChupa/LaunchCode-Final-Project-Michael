package Church.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;


@Entity
public class User_Info_Financial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String bankName;

    private String creditScore;

    private Boolean hasVenmo;
    private Boolean hasCashApp;
    private Boolean hasPaypal;
    private Boolean hasCreditCard;
    private Boolean hasCrypto;


    @OneToOne(mappedBy = "financial")
    @JsonBackReference
    private User_Info user_info;

    public User_Info_Financial() {}

    public User_Info_Financial(String bankName, String creditScore, Boolean hasVenmo, Boolean hasCashApp, Boolean hasPaypal, Boolean hasCreditCard, Boolean hasCrypto) {
        this.bankName = bankName;
        this.creditScore = creditScore;
        this.hasVenmo = hasVenmo;
        this.hasCashApp = hasCashApp;
        this.hasPaypal = hasPaypal;
        this.hasCreditCard = hasCreditCard;
        this.hasCrypto = hasCrypto;
    }

    public User_Info getUser_info() {
        return user_info;
    }

    public void setUser_info(User_Info user_info) {
        this.user_info = user_info;
    }

    public String getCreditScore() {
        return creditScore;
    }

    public void setCreditScore(String creditScore) {
        this.creditScore = creditScore;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public Boolean getHasCrypto() {
        return hasCrypto;
    }

    public void setHasCrypto(Boolean hasCrypto) {
        this.hasCrypto = hasCrypto;
    }

    public Boolean getHasCreditCard() {
        return hasCreditCard;
    }

    public void setHasCreditCard(Boolean hasCreditCard) {
        this.hasCreditCard = hasCreditCard;
    }

    public Boolean getHasPaypal() {
        return hasPaypal;
    }

    public void setHasPaypal(Boolean hasPaypal) {
        this.hasPaypal = hasPaypal;
    }

    public Boolean getHasCashApp() {
        return hasCashApp;
    }

    public void setHasCashApp(Boolean hasCashApp) {
        this.hasCashApp = hasCashApp;
    }

    public Boolean getHasVenmo() {
        return hasVenmo;
    }

    public void setHasVenmo(Boolean hasVenmo) {
        this.hasVenmo = hasVenmo;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return " Venmo Status=" + hasVenmo +
                ", Cash App Status =" + hasCashApp +
                ", Paypal Status =" + hasPaypal +
                ", Credit Card Status =" + hasCreditCard +
                ", Crypto Holdings =" + hasCrypto +
                ", My bank name is: " + bankName + '\'' +
                ", My Credit Score is: " + creditScore + '\'';
    }
}
