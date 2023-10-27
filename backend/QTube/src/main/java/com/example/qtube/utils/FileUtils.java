package com.example.qtube.utils;

import com.example.qtube.exception.InvalidFileMIMEException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;

@Component
public class FileUtils {

    private final HashSet<String> validMIME = new HashSet<>();

    public FileUtils() {
        this.validMIME.add("video/mp4");
        this.validMIME.add("video/webm");
    }

    public String fileExtension(MultipartFile file) throws InvalidFileMIMEException {
        String MIME = file.getContentType();

        if (!isValidMIME(MIME)) {
            throw new InvalidFileMIMEException();
        }

        return fileExtension(MIME);
    }

    public boolean isValidMIME(String MIME) {
        return MIME != null && validMIME.contains(MIME);
    }

    public String fileExtension(String MIME) {
        return MIME.replaceAll(".*/", ".");
    }

}

