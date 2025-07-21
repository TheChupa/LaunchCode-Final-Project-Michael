package Church.repositories;

import Church.models.AiResponse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AiResponseRepository extends JpaRepository <AiResponse, Integer> {
}
