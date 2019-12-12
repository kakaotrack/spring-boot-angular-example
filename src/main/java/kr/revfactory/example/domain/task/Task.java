package kr.revfactory.example.domain.task;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Task implements Serializable {

    private static final long serialVersionUID = -5620025027808666765L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Version
    private Long version;

    public Task update(String title, String description) {
        this.title = title;
        this.description = description;
        return this;
    }

    @Builder
    private Task(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
