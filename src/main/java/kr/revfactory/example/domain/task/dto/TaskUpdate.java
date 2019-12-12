package kr.revfactory.example.domain.task.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class TaskUpdate {

    @NotEmpty
    private String title;

    @NotEmpty
    private String description;

}
