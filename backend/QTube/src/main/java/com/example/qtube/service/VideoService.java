package com.example.qtube.service;

import com.example.qtube.exception.FileNotFoundException;
import com.example.qtube.exception.InvalidFileMIMEException;
import com.example.qtube.model.Video;
import com.example.qtube.repository.VideoRepository;
import com.example.qtube.utils.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class VideoService {

    private final VideoRepository videoRepository;
    private final FileUtils fileUtils;

    @Value("${upload.directory}")
    private String uploadDirectory;

    public VideoService(VideoRepository videoRepository, FileUtils fileUtils) {
        this.videoRepository = videoRepository;
        this.fileUtils = fileUtils;
    }

    public Video upload(MultipartFile file) throws IOException, InvalidFileMIMEException {
        String fileExtension = fileUtils.fileExtension(file);
        String slug = UUID.randomUUID().toString() + fileExtension;

        String filePath = this.uploadDirectory + File.separator + slug;
        file.transferTo(new File(filePath));

        Video video = new Video();
        video.setSlug(slug);
        videoRepository.save(video);

        return video;
    }

    public Resource resource(String slug) throws FileNotFoundException {
        String filePath = this.uploadDirectory + File.separator + slug;
        File file = new File(filePath);
        if (file.exists()) {
            return new FileSystemResource(file);
        }
        throw new FileNotFoundException();
    }
}
