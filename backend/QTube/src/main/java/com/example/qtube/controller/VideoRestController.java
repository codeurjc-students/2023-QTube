package com.example.qtube.controller;

import com.example.qtube.service.VideoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/video")
public class VideoRestController {

    private final VideoService videoService;

    public VideoRestController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping
    public ResponseEntity findAll() {
        return ResponseEntity.ok(this.videoService.findAll());
    }

}
