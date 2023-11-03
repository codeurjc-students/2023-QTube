package com.example.qtube.utils;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;


@Component
public class FileUtils {
    public static String slug(MultipartFile multipartFile) {
        String contentType = multipartFile.getContentType();
        String extension = contentType.replaceAll(".*/", ".");
        String slug = UUID.randomUUID() + extension;
        return slug;
    }

    public static String path(String directory, String slug) {
        String path = directory + File.separator + slug;
        return path;
    }
}

