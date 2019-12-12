package kr.revfactory.example.domain.task.dto;

import lombok.Value;

@Value
public class TaskResponse {
    private Long id;
    private String title;
    private String description;
    private String version;
}
