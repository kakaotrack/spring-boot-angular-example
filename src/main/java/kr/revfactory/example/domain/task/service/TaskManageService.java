package kr.revfactory.example.domain.task.service;

import kr.revfactory.example.domain.task.Task;
import kr.revfactory.example.domain.task.dto.TaskUpdate;
import kr.revfactory.example.domain.task.dto.TaskCreate;
import kr.revfactory.example.domain.task.exception.NotFoundTaskException;
import kr.revfactory.example.domain.task.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class TaskManageService {

    private final TaskRepository taskRepository;

    public Task create(TaskCreate taskCreate) {
        return taskRepository.save(taskCreate.toEntity());
    }

    public Task update(final Long id, TaskUpdate dto) {
        return taskRepository.findById(id)
                .map(task -> task.update(dto.getTitle(), dto.getDescription()))
                .orElseThrow(() -> new NotFoundTaskException(id));
    }

    public void delete(final Long id) {
        taskRepository.findById(id)
                .ifPresentOrElse(taskRepository::delete, () -> {
                    throw new NotFoundTaskException(id);
                });
    }
}
