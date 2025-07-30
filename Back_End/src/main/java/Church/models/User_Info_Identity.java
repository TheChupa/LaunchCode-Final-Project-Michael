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

    private Boolean isRenting;
    private Boolean hasSocialSecurityNumber;
    private Boolean hasDriversLicence;
    private Boolean hasPassport;

    @OneToOne(mappedBy = "identity")
    @JsonBackReference
    private User_Info user_info;

    public User_Info_Identity() {
    }

    public User_Info_Identity(String firstName, String lastName, String address, String zipCode, String state, String dob, String phoneNumber, String email, Boolean isRenting, Boolean hasSocialSecurityNumber, Boolean hasDriversLicence, Boolean hasPassport) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.zipCode = zipCode;
        this.state = state;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.email = email;

        this.isRenting = isRenting;
        this.hasSocialSecurityNumber = hasSocialSecurityNumber;
        this.hasDriversLicence = hasDriversLicence;
        this.hasPassport = hasPassport;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getIsRenting() {
        return isRenting;
    }
    public void setIsRenting(Boolean isRenting) {
        this.isRenting = isRenting;
    }

    public Boolean getHasSocialSecurityNumber() {
        return hasSocialSecurityNumber;
    }

    public void setHasSocialSecurityNumber(Boolean hasSocialSecurityNumber) {
        this.hasSocialSecurityNumber = hasSocialSecurityNumber;
    }

    public Boolean getHasDriversLicence() {
        return hasDriversLicence;
    }

    public void setHasDriversLicence(Boolean hasDriversLicence) {
        this.hasDriversLicence = hasDriversLicence;
    }

    public Boolean getHasPassport() {
        return hasPassport;
    }

    public void setHasPassport(Boolean hasPassport) {
        this.hasPassport = hasPassport;
    }

    public User_Info getUser_info() {
        return user_info;
    }

    public void setUser_info(User_Info user_info) {
        this.user_info = user_info;
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
                ", isRenting=" + isRenting +
                ", hasSocialSecurityNumber=" + hasSocialSecurityNumber +
                ", hasDriversLicence=" + hasDriversLicence +
                ", hasPassPort=" + hasPassport +
                ", user_info=" + user_info +
                '}';
    }
}
