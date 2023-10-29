package com.example.qtube.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;


@Component
public class FileUtils {
    @Value("${upload.directory}")
    private String uploadDirectory;

    public String slug(MultipartFile multipartFile) {
        String contentType = multipartFile.getContentType();
        String extension = contentType.replaceAll(".*/", ".");
        String slug = UUID.randomUUID() + extension;
        return slug;
    }

    public void transfer(MultipartFile multipartFile, String slug) throws IOException {
        String path = this.path(slug);
        File file = new File(path);
        multipartFile.transferTo(file);
    }

    public String path(String slug) {
        String path = this.uploadDirectory + File.separator + slug;
        return path;
    }
}
