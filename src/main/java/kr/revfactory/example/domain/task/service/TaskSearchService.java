package kr.revfactory.example.domain.task.service;

import kr.revfactory.example.domain.task.Task;
import kr.revfactory.example.domain.task.exception.NotFoundTaskException;
import kr.revfactory.example.domain.task.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TaskSearchService {

    private final TaskRepository taskRepository;

    public Page<Task> getTasks(Pageable pageable) {
        return taskRepository.findAll(pageable);
    }

    public Task getTask(Long taskId) {
        return taskRepository.findById(taskId)
                .orElseThrow(() -> new NotFoundTaskException(taskId));
    }
}
