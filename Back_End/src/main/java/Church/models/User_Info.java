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
   @JoinColumn(name = "User_Info_Identity", referencedColumnName = "id")
   private User_Info_Identity Identity;

   @OneToOne(cascade = CascadeType.ALL)
   @JoinColumn(name = "User_Info_Social", referencedColumnName = "id");
   private User_Info_Social Social;

}
