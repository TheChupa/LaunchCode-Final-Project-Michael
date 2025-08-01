package Church.repositories;

import Church.models.User;
import Church.models.User_Info;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface User_InfoRepository extends JpaRepository<User_Info, Integer> {
    Optional<User_Info> findByUser(User user);


}
