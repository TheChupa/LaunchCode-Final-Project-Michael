package Church.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class User_Info_Identity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;
    private String lastName;
    private String address;
    private String zipCode;
    private String state;
    private String dob;
    private String phoneNumber;
    private String email;
    private String driversLicenceNum;
    private String ssnLast4;
    private String passPortNum;

    @OneToOne(mappedBy = "identity")
    @JsonBackReference
    private User_Info user_info;

    public User_Info_Identity() {};

    public User_Info_Identity(String firstName, String lastName, String address, String zipCode, String state, String dob, String phoneNumber, String email, String driversLicenceNum, String ssnLast4, String passPortNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.zipCode = zipCode;
        this.state = state;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.driversLicenceNum = driversLicenceNum;
        this.ssnLast4 = ssnLast4;
        this.passPortNum = passPortNum;
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

    public String getPassPortNum() {
        return passPortNum;
    }

    public void setPassPortNum(String passPortNum) {
        this.passPortNum = passPortNum;
    }

    public String getSsnLast4() {
        return ssnLast4;
    }

    public void setSsnLast4(String ssnLast4) {
        this.ssnLast4 = ssnLast4;
    }

    public String getDriversLicenceNum() {
        return driversLicenceNum;
    }

    public void setDriversLicenceNum(String driversLicenceNum) {
        this.driversLicenceNum = driversLicenceNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDOB() {
        return dob;
    }

    public void setDOB(String dob) {
        this.dob = dob;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Override
    public String toString() {
        return "User_Info_Identity{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", state='" + state + '\'' +
                ", dob='" + dob + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", driversLicenceNum='" + driversLicenceNum + '\'' +
                ", ssnLast4='" + ssnLast4 + '\'' +
                ", passPortNum='" + passPortNum + '\'' +
                ", user_info=" + user_info +
                '}';
    }
}
