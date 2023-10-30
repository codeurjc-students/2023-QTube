package com.example.qtube.controllers;

import com.example.qtube.dtos.UploadVideoDTO;
import com.example.qtube.dtos.VideoDTO;
import com.example.qtube.dtos.VideoDetailsDTO;
import com.example.qtube.services.VideoService;

import com.example.qtube.utils.APIUtils;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Object> save(@Valid @ModelAttribute UploadVideoDTO uploadVideoDTO,
                                       BindingResult bindingResult) throws IOException {
        if (bindingResult.hasErrors()) {
            Collection<String> messages = this.APIUtils.messages(bindingResult);
            return ResponseEntity.badRequest().body(messages);
        }
        VideoDTO videoDTO = this.videoService.save(uploadVideoDTO);
        String slug = videoDTO.getSlug();
        URI location = this.APIUtils.location(slug);
        return ResponseEntity.created(location).body(videoDTO);
    }

    @GetMapping("videos/{slug}")
    public ResponseEntity<Object> video(@PathVariable String slug) {
        Optional<VideoDTO> optionalVideoDTO = this.videoService.video(slug);
        if (optionalVideoDTO.isPresent()) {
            VideoDTO videoDTO = optionalVideoDTO.get();
            return ResponseEntity.ok().body(videoDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("videos/{slug}")
    public ResponseEntity<Object> delete(@PathVariable String slug) {
        boolean exists = this.videoService.existsBySlug(slug);
        if (exists) {
            this.videoService.delete(slug);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("videos/{slug}")
    public ResponseEntity<Object> update(@PathVariable String slug,
                                         @Valid @ModelAttribute VideoDetailsDTO videoDetailsDTO,
                                         BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Collection<String> messages = this.APIUtils.messages(bindingResult);
            return ResponseEntity.badRequest().body(messages);
        }
        boolean exists = this.videoService.existsBySlug(slug);
        if (exists) {
            VideoDTO videoDTO = this.videoService.update(slug, videoDetailsDTO);
            return ResponseEntity.ok().body(videoDTO);
        }
        return ResponseEntity.notFound().build();
    }
}
