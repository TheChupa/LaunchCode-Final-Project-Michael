package Church.models;

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
    private String CCardNumber;
    private String BankAccountNumber;
    private String cryptoHoldings;

    @OneToOne(mappedBy = "financial")
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

    public String getCCardNumber() {
        return CCardNumber;
    }

    public void setCCardNumber(String CCardNumber) {
        this.CCardNumber = CCardNumber;
    }

    public String getBankAccountNumber() {
        return BankAccountNumber;
    }

    public void setBankAccountNumber(String bankAccountNumber) {
        BankAccountNumber = bankAccountNumber;
    }

    public String getCryptoHoldings() {
        return cryptoHoldings;
    }

    public void setCryptoHoldings(String cryptoHoldings) {
        this.cryptoHoldings = cryptoHoldings;
    }

}
