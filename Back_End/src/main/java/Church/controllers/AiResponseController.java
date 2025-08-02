package Church.controllers;

import Church.models.User_Info;
import Church.repositories.AiResponseRepository;
import Church.repositories.User_InfoRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/ai-responses")
public class AiResponseController {

    @Autowired
    private User_InfoRepository userInfoRepository;

    @Autowired
    private AiResponseRepository aiResponseRepository;


    @GetMapping(value = "/{User_InfoId}/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllAIResponses(@PathVariable(value = "User_InfoId") int User_InfoId) {
        User_Info currentUserInfo = userInfoRepository.findById(User_InfoId).orElse(null);
        if (currentUserInfo != null && currentUserInfo.getAiResponse() != null) {
            var aiResponse = currentUserInfo.getAiResponse();
            var response = new java.util.HashMap<String, Object>();
            response.put("identityResponse", aiResponse.getIdentityResponse());
            response.put("financialResponse", aiResponse.getFinancialResponse());
            response.put("socialResponse", aiResponse.getSocialResponse());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            String response = "User Info with ID of " + User_InfoId + " not found.";
            return new ResponseEntity<>(java.util.Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/{User_InfoId}/Social", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSocialAIResponse(@PathVariable(value = "User_InfoId") int User_InfoId) {
        User_Info currentUserInfo = userInfoRepository.findById(User_InfoId).orElse(null);
        if (currentUserInfo != null) {
            return new ResponseEntity<>(currentUserInfo.getAiResponse().getSocialResponse(), HttpStatus.OK);
        } else {
            String response = "User Info with ID of " + User_InfoId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }


    }

    @GetMapping(value = "/{User_InfoId}/Financial", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getFinancialAIResponse(@PathVariable(value = "User_InfoId") int User_InfoId) {
        User_Info currentUserInfo = userInfoRepository.findById(User_InfoId).orElse(null);
        if (currentUserInfo != null) {
            return new ResponseEntity<>(currentUserInfo.getAiResponse().getFinancialResponse(), HttpStatus.OK);
        } else {
            String response = "User Info with ID of " + User_InfoId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }


    }

    @GetMapping(value = "/{User_InfoId}/Identity", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getIdentityAIResponse(@PathVariable(value = "User_InfoId") int User_InfoId) {
        User_Info currentUserInfo = userInfoRepository.findById(User_InfoId).orElse(null);
        if (currentUserInfo != null) {
            return new ResponseEntity<>(currentUserInfo.getAiResponse().getIdentityResponse(), HttpStatus.OK);
        } else {
            String response = "User Info with ID of " + User_InfoId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }


    }
}
