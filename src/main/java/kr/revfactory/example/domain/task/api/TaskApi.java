package kr.revfactory.example.domain.task.api;

import kr.revfactory.example.domain.task.Task;
import kr.revfactory.example.domain.task.dto.TaskUpdate;
import kr.revfactory.example.domain.task.dto.TaskCreate;
import kr.revfactory.example.domain.task.service.TaskManageService;
import kr.revfactory.example.domain.task.service.TaskSearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskApi {

    private final TaskSearchService taskSearchService;
    private final TaskManageService taskManageService;

    private final List<SseEmitter> sseEmitters = Collections.synchronizedList(new ArrayList<>());

    @PostMapping
    public Task create(@RequestBody @Valid TaskCreate taskCreate) {
        Task newTask = this.taskManageService.create(taskCreate);
        synchronized (this.sseEmitters) {
            for (SseEmitter sseEmitter : this.sseEmitters) {
                try {
                    sseEmitter.send("created", MediaType.APPLICATION_JSON);
                    sseEmitter.complete();
                } catch (Exception e) {
                    log.error("sseEmitter error : {}", e.getMessage());
                }
            }
        }
        return newTask;
    }

    @GetMapping
    public Page<Task> list(Pageable pageable) {
        return this.taskSearchService.getTasks(pageable);
    }

    @GetMapping("/{id}")
    public Task get(@PathVariable("id") Long id) {
        return this.taskSearchService.getTask(id);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable("id") Long id, @RequestBody @Valid TaskUpdate taskUpdate) {
        Task updatedTask = taskManageService.update(id, taskUpdate);
        synchronized (this.sseEmitters) {
            for (SseEmitter sseEmitter : this.sseEmitters) {
                try {
                    sseEmitter.send("update", MediaType.APPLICATION_JSON);
                    sseEmitter.complete();
                } catch (Exception e) {
                    log.error("sseEmitter error : {}", e.getMessage());
                }
            }
        }
        return updatedTask;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) {
        this.taskManageService.delete(id);
        return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
    }

    @GetMapping(value = "subscribe")
    public SseEmitter subscribe() {
        SseEmitter sseEmitter = new SseEmitter();
        synchronized (this.sseEmitters) {
            this.sseEmitters.add(sseEmitter);
            sseEmitter.onCompletion(() -> {
                synchronized (this.sseEmitters) {
                    this.sseEmitters.remove(sseEmitter);
                }
            });
            sseEmitter.onTimeout(sseEmitter::complete);
        }
        return sseEmitter;
    }
}
