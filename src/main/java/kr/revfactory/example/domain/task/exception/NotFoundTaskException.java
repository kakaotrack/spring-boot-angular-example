package kr.revfactory.example.domain.task.exception;

public class NotFoundTaskException extends RuntimeException {

    public NotFoundTaskException(Long id) {
        super(String.format("Not Found Task (id : %s)", id));
    }

    public NotFoundTaskException(Long id, String version) {
        super(String.format("Not Found Task (id : %s, version : %s)", id, version));
    }
}
