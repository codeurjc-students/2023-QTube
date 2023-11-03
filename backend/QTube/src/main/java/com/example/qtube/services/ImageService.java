package com.example.qtube.services;

import com.example.qtube.models.Image;
import com.example.qtube.repositories.ImageRepository;
import com.example.qtube.utils.FileUtils;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Service
public class ImageService {
    private final ResourceService resourceService;
    private final ImageRepository imageRepository;

    public ImageService(ResourceService resourceService, ImageRepository imageRepository) {
        this.resourceService = resourceService;
        this.imageRepository = imageRepository;
    }

    public Image save(MultipartFile multipartFile) throws IOException {
        String slug = FileUtils.slug(multipartFile);
        Image image = new Image();
        image.setSlug(slug);

        this.resourceService.upload(multipartFile, slug);
        this.imageRepository.save(image);

        return image;
    }
}
