package com.example.qtube.exception;

public class InvalidFileMIMEException extends RuntimeException {
    public InvalidFileMIMEException() {
        super("Invalid file MIME");
    }
}

