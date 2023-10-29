package com.example.qtube.controllers;

import com.example.qtube.dtos.UploadVideoRequest;
import com.example.qtube.models.Video;
import com.example.qtube.services.VideoService;

import com.example.qtube.utils.APIUtils;
import jakarta.validation.Valid;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.Collection;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/")
public class VideoRestController {
    private final VideoService videoService;
    private final APIUtils APIUtils;

    public VideoRestController(VideoService videoService, APIUtils APIUtils) {
        this.videoService = videoService;
        this.APIUtils = APIUtils;
    }

    @PostMapping("videos")
    public ResponseEntity<Object> upload(@Valid @ModelAttribute UploadVideoRequest uploadVideoRequest,
                                         BindingResult bindingResult) throws IOException {
        if (bindingResult.hasErrors()) {
            Collection<String> messages = this.APIUtils.messages(bindingResult);
            return ResponseEntity.badRequest().body(messages);
        }
        MultipartFile multipartFile = uploadVideoRequest.getMultipartFile();
        Video video = this.videoService.upload(multipartFile);
        String slug = video.getSlug();
        URI location = this.APIUtils.location(slug);
        return ResponseEntity.created(location).body(video);
    }

    @GetMapping("videos/{slug}")
    public ResponseEntity<Object> download(@PathVariable String slug) {
        Optional<Resource> optionalResource = this.videoService.resource(slug);
        if (optionalResource.isPresent()) {
            Resource resource = optionalResource.get();
            return ResponseEntity.ok().body(resource);
        }
        return ResponseEntity.notFound().build();
    }
}
