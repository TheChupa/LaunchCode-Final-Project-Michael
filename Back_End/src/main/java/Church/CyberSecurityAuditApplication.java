package Church;

import Church.models.*;
import Church.repositories.UserRepository;
import Church.repositories.User_InfoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CyberSecurityAuditApplication {

	public static void main(String[] args) {
		SpringApplication.run(CyberSecurityAuditApplication.class, args);
	}

	@Bean
	CommandLineRunner test(UserRepository userRepository,
						   User_InfoRepository userInfoRepository) {
		return args -> {

			// Step 1: Save base user
			User user = new User("Michael", "Bruh");
			userRepository.save(user);

			// Step 2: Create components
			User_Info_Identity identity = new User_Info_Identity();
			User_Info_Social social = new User_Info_Social();
			User_Info_Financial financial = new User_Info_Financial();

			// Step 3: Assign and save User_Info
			User_Info info = new User_Info();
			info.setUser(user); // sets ID via @MapsId
			info.setIdentity(identity);
			info.setSocial(social);
			info.setFinancial(financial);

			userInfoRepository.save(info);

			// Step 4: Confirm it worked
			System.out.println("Saved User_Info with ID: " + info.getId());
		};

	}
}
