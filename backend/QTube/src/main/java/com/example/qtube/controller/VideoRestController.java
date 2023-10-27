package com.example.qtube.controller;

import com.example.qtube.exception.FileNotFoundException;
import com.example.qtube.exception.InvalidFileMIMEException;
import com.example.qtube.model.Video;
import com.example.qtube.service.VideoService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/")
public class VideoRestController {

    private final VideoService videoService;


    public VideoRestController(VideoService videoService) {
        this.videoService = videoService;

    }

    @PostMapping("video")
    public ResponseEntity<String> upload(@RequestParam MultipartFile file) {
        try {
            Video video = this.videoService.upload(file);

            URI location = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{slug}")
                    .buildAndExpand(video.getSlug())
                    .toUri();

            return ResponseEntity.created(location).build();
        } catch (InvalidFileMIMEException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("video/{slug}")
    public ResponseEntity<Object> download(@PathVariable String slug) {
        try {
            Resource resource = this.videoService.resource(slug);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + slug)
                    .body(resource);
        } catch (FileNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
