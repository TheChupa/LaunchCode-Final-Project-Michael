package Church.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User_Info_Financial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY);
    private int id;

    private String venmoHandle;
    private String cashAppHandle;
    private String paypalEmail;
    private String bankName;
    private String CCardNumber;
    private String BankAccountNumber;
}
