package com.example.qtube.services;

import com.example.qtube.utils.FileUtils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Service
public class ResourceService {
    @Value("${upload.directory}")
    private String directory;

    public void upload(MultipartFile multipartFile, String slug) throws IOException {
        String path = FileUtils.path(this.directory, slug);
        File file = new File(path);
        multipartFile.transferTo(file);
    }

    public Optional<Resource> download(String slug) {
        String path = FileUtils.path(this.directory, slug);
        File file = new File(path);
        if (file.exists()) {
            FileSystemResource fileSystemResource = new FileSystemResource(file);
            Optional<Resource> resource = Optional.of(fileSystemResource);
            return resource;
        }
        return Optional.empty();
    }

    public void delete(String slug) {
        String path = FileUtils.path(this.directory, slug);
        File file = new File(path);
        if (file.exists()) {
            file.delete();
        }
    }
}
