package Church.controllers;

import Church.models.User;
import Church.models.dto.PasswordDTO;
import Church.models.dto.UserDTO;
import Church.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/users")
public class UserController {


    // This class will handle user-related operations such as registration, login, and profile management.

    @Autowired
    UserRepository userRepository;



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

    @PatchMapping(value = "/update-password/{userId}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateUserPassword(@PathVariable("userId") int userId,
                                                @RequestBody PasswordDTO passwordDTO) {
        User currentUser = userRepository.findById(userId).orElse(null);

        if (currentUser == null) {
            String response = "User with ID of " + userId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }

        if (passwordDTO.getPassword() == null || passwordDTO.getPassword().isBlank()) {
            return new ResponseEntity<>(Collections.singletonMap("response", "Password must not be blank."),
                    HttpStatus.BAD_REQUEST);
        }

        currentUser.setPassword(passwordDTO.getPassword()); // Consider encoding
        userRepository.save(currentUser);
        return new ResponseEntity<>(Collections.singletonMap("response", "Password updated successfully."), HttpStatus.OK);
    }

    @DeleteMapping(value="/delete/{userId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteUser(@PathVariable(value="userId") int userId) {
        User currentUser = userRepository.findById(userId).orElse(null);
        if(currentUser != null) {
            userRepository.deleteById(userId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204
        } else {
            String response = "User with ID of " + userId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404
        }
    }
}
