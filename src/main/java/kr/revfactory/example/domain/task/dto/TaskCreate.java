package kr.revfactory.example.domain.task.dto;

import kr.revfactory.example.domain.task.Task;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class TaskCreate {

    @NotEmpty
    private String title;

    @NotEmpty
    private String description;

    public Task toEntity() {
        return Task.builder()
                .title(title)
                .description(description)
                .build();
    }
}
