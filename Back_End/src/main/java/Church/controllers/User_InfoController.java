package Church.controllers;


import Church.models.*;
import Church.models.dto.User_InfoDTO;
import Church.repositories.AiResponseRepository;
import Church.repositories.UserRepository;
import Church.repositories.User_InfoRepository;
import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user_info")
public class User_InfoController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AiResponseRepository aiResponseRepository;

    @Autowired
    User_InfoRepository userInfoRepository;


    @GetMapping(value="/details", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllUserInfo() {
        List<User_Info> allUserInfo = userInfoRepository.findAll();
        return new ResponseEntity<>(allUserInfo, HttpStatus.OK); //200
    }

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

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createNewUserInfo(@RequestBody User_InfoDTO userInfoData) {
        User user = userRepository.findById(userInfoData.getUserId()).orElse(null);
        if (user == null)
            return new ResponseEntity<>(Collections.singletonMap("response", "User not found"), HttpStatus.NOT_FOUND);

        User_Info user_info = new User_Info();
        user_info.setUser(user);

        // Prepare a single AI response object
        User_Info_AiResponse aiResponse = new User_Info_AiResponse();

        try {
            Client client = new Client();

            if (userInfoData.getFinancial() != null) {
                User_Info_Financial financial = userInfoData.getFinancial();
                financial.setUser_info(user_info);
                user_info.setFinancial(financial);

                GenerateContentResponse response = client.models.generateContent(
                        "gemini-2.0-flash-001",
                        "Pretend you are Morpheus from the Matrix, but you're the Head of an exasperated Infosec team teaching the corporate underlings to be safe online. If you can, make the advice easy to accomplish and like the user is a character in the movie." +
                                " You have gathered the following information " + financial.toString() + ". Create some advice based on this data and how to keep them safe online in 2025. Keep it under 3000 characters. Don't use names unless you have their name\"", null);
                String aiText = response.text();
                System.out.println(financial.toString());
                aiResponse.setFinancialResponse(aiText);
            }

            if (userInfoData.getSocial() != null) {
                User_Info_Social social = userInfoData.getSocial();
                social.setUser_info(user_info);
                user_info.setSocial(social);

                GenerateContentResponse response = client.models.generateContent(
                        "gemini-2.0-flash-001",
                        "Pretend you are Morpheus from the Matrix, but you're the Head of an exasperated Infosec team teaching the corporate underlings to be safe online. If you can, make the advice easy to accomplish and like the user is a character in the movie." + social.toString() + ". Create some advice based on this data and how to keep them safe online in 2025. Keep it under 3000 characters. Don't use names unless you have their name", null);
                String aiText = response.text();

                aiResponse.setSocialResponse(aiText);
            }

            if (userInfoData.getIdentity() != null) {
                User_Info_Identity identity = userInfoData.getIdentity();
                identity.setUser_info(user_info);
                user_info.setIdentity(identity);

                GenerateContentResponse response = client.models.generateContent(
                        "gemini-2.0-flash-001",
                        "Pretend you are Morpheus from the Matrix, but you're the Head of an exasperated Infosec team teaching the corporate underlings to be safe online. If you can, make the advice easy to accomplish and like the user is a character in the movie." + identity.toString() + ". Create some advice based on this data and how to keep them safe online in 2025. Keep it under 3000 characters. Don't use names unless you have their name.", null);
                String aiText = response.text();

                aiResponse.setIdentityResponse(aiText);
            }

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(Collections.singletonMap("response", "Error generating AI response"), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        // Save only once after all responses are populated

        aiResponseRepository.save(aiResponse);
        user_info.setAiResponse(aiResponse);
        userInfoRepository.save(user_info);

        return new ResponseEntity<>(user_info, HttpStatus.CREATED);
    }
}

