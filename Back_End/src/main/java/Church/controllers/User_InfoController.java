package Church.controllers;


import Church.models.*;
import Church.models.dto.User_InfoDTO;
import Church.repositories.AiResponseRepository;
import Church.repositories.UserRepository;
import Church.repositories.User_InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/user_info")
public class User_InfoController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AiResponseRepository aiResponseRepository;

    @Autowired
    User_InfoRepository userInfoRepository;


    @GetMapping(value = "/details/{User_InfoId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUserInfoById(@PathVariable(value = "User_InfoId") int User_InfoId) {
        User_Info currentUserInfo = userInfoRepository.findById(User_InfoId).orElse(null);
        if (currentUserInfo != null) {
            return new ResponseEntity<>(currentUserInfo, HttpStatus.OK);
        } else {
            String response = "User Info with ID of " + User_InfoId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }


    }

    @PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewUserInfo(@RequestBody User_InfoDTO userInfoData) {
        User user = userRepository.findById(userInfoData.getUserId()).orElse(null);
        if (user == null)
            return new ResponseEntity<>(Collections.singletonMap("response", "User not found"), HttpStatus.NOT_FOUND);


        User_Info user_info = new User_Info();
        user_info.setUser(user);

        if (userInfoData.getFinancial() != null) {
            User_Info_Financial financial = userInfoData.getFinancial();
            financial.setUser_info(user_info);
            user_info.setFinancial(financial);

            // TODO: Add logic to make an LLM API call to generate prompt to keep you safer fop each of these save them to the Airesponse REPO

        }

        if (userInfoData.getSocial() != null) {
            User_Info_Social social = userInfoData.getSocial();
            social.setUser_info((user_info));
            user_info.setSocial(social);
        }

        if (userInfoData.getIdentity() != null) {
            User_Info_Identity identity = userInfoData.getIdentity();
            identity.setUser_info(user_info);
            user_info.setIdentity(identity);
        }


        userInfoRepository.save(user_info);


        return new ResponseEntity<>(user_info, HttpStatus.CREATED);
    }
}
