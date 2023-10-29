package com.example.qtube.services;

import com.example.qtube.models.Video;
import com.example.qtube.repositories.VideoRepository;
import com.example.qtube.utils.FileUtils;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;


@Service
public class VideoService {
    private final VideoRepository videoRepository;
    private final FileUtils fileUtils;

    public VideoService(VideoRepository videoRepository, FileUtils fileUtils) {
        this.videoRepository = videoRepository;
        this.fileUtils = fileUtils;
    }

    public Video upload(MultipartFile file) throws IOException {
        String slug = this.fileUtils.slug(file);
        Video video = new Video();
        video.setSlug(slug);

        this.fileUtils.transfer(file, slug);
        this.videoRepository.save(video);

        return video;
    }

    public Optional<Resource> resource(String slug) {
        String path = this.fileUtils.path(slug);
        File file = new File(path);
        if (file.exists()) {
            FileSystemResource fileSystemResource = new FileSystemResource(file);
            Optional<Resource> resource = Optional.of(fileSystemResource);
            return resource;
        }
        return Optional.empty();
    }
}
