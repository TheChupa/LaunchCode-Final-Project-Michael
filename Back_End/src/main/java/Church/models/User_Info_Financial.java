package Church.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class User_Info_Financial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String venmoHandle;
    private String cashAppHandle;
    private String paypalEmail;
    private String bankName;
    private String cCardNumber;
    private String bankAccountNumber;
    private String cryptoHoldings;

    @OneToOne(mappedBy = "financial")
    @JsonBackReference
    private User_Info user_info;



    public String getVenmoHandle() {
        return venmoHandle;
    }

    public int getId() {
        return id;
    }

    public User_Info getUser_info() {
        return user_info;
    }

    public void setUser_info(User_Info user_info) {
        this.user_info = user_info;
    }

    public void setVenmoHandle(String venmoHandle) {
        this.venmoHandle = venmoHandle;
    }

    public String getCashAppHandle() {
        return cashAppHandle;
    }

    public void setCashAppHandle(String cashAppHandle) {
        this.cashAppHandle = cashAppHandle;
    }

    public String getPaypalEmail() {
        return paypalEmail;
    }

    public void setPaypalEmail(String paypalEmail) {
        this.paypalEmail = paypalEmail;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getcCardNumber() {
        return cCardNumber;
    }

    public void setcCardNumber(String cCardNumber) {
        this.cCardNumber = cCardNumber;
    }

    public String getbankAccountNumber() {
        return bankAccountNumber;
    }

    public void setbankAccountNumber(String bankAccountNumber) {
        bankAccountNumber = bankAccountNumber;
    }

    public String getCryptoHoldings() {
        return cryptoHoldings;
    }

    public void setCryptoHoldings(String cryptoHoldings) {
        this.cryptoHoldings = cryptoHoldings;
    }

    @Override
    public String toString() {
        return "User_Info_Financial{" +
                "id=" + id +
                ", venmoHandle='" + venmoHandle + '\'' +
                ", cashAppHandle='" + cashAppHandle + '\'' +
                ", paypalEmail='" + paypalEmail + '\'' +
                ", bankName='" + bankName + '\'' +
                ", cCardNumber='" + cCardNumber + '\'' +
                ", bankAccountNumber='" + bankAccountNumber + '\'' +
                ", cryptoHoldings='" + cryptoHoldings + '\'' +
                ", user_info=" + user_info +
                '}';
    }
}
