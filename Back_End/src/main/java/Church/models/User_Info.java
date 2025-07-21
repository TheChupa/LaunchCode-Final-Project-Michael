package Church.models;

import jakarta.persistence.*;


@Entity
public class User_Info {

    @Id
    private int id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "id")
    private User user;

   @OneToOne(cascade =  CascadeType.ALL)
   @JoinColumn(name = "identity_id", referencedColumnName = "id")
   private User_Info_Identity identity;

   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name = "social_id", referencedColumnName = "id")
   private User_Info_Social social;

   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name = "fiancial_id", referencedColumnName = "id")
   private User_Info_Financial financial;

   public User_Info() {};

   public User_Info(User user, User_Info_Identity identity, User_Info_Social social, User_Info_Financial financial) {
       this.user = user;
       this.identity = identity;
       this.social = social;
       this.financial = financial;
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
}
