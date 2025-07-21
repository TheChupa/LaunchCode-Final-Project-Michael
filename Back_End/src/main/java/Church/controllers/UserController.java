package Church.controllers;

import Church.models.User;
import Church.models.dto.UserDTO;
import Church.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {


    // This class will handle user-related operations such as registration, login, and profile management.

    @Autowired
    UserRepository userRepository;


    //TODO: Check to see if you actually need this method
    @GetMapping("")
    public ResponseEntity<?> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK); //200
    }

    @PostMapping(value = "/add", consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewUser(@RequestBody UserDTO userNameData) {

        User user = new User(userNameData.getUsername(), userNameData.getPassword());
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED); // 201
    }
}
