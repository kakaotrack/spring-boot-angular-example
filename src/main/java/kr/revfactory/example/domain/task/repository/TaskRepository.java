package kr.revfactory.example.domain.task.repository;


import kr.revfactory.example.domain.task.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface TaskRepository extends CrudRepository<Task, Long> {

	Page<Task> findAll(Pageable pageable);

	Optional<Task> findByIdAndVersion(Long id, String version);
}
