package com.example.qtube.controllers;

import com.example.qtube.dtos.*;
import com.example.qtube.services.VideoService;
import com.example.qtube.utils.RestUtils;

import jakarta.validation.Valid;
import org.javatuples.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class VideoRestController {
    private final VideoService videoService;

    public VideoRestController(VideoService videoService) {
        this.videoService = videoService;
    }

    @PostMapping("videos")
    public ResponseEntity<Object> save(@Valid @ModelAttribute UploadVideoDTO uploadVideoDTO,
            BindingResult bindingResult) throws IOException {
        if (bindingResult.hasErrors()) {
            Collection<String> messages = RestUtils.messages(bindingResult);
            return ResponseEntity.badRequest().body(messages);
        }
        Pair<VideoDTO, URI> result = this.videoService.save(uploadVideoDTO);
        VideoDTO videoDTO = result.getValue0();
        URI location = result.getValue1();
        return ResponseEntity.created(location).body(videoDTO);
    }

    @GetMapping("videos/{slug}")
    public ResponseEntity<Object> video(@PathVariable String slug) {
        Optional<DownloadVideoDTO> optionalVideo = this.videoService.video(slug);
        if (optionalVideo.isPresent()) {
            DownloadVideoDTO downloadVideoDTO = optionalVideo.get();
            return ResponseEntity.ok().body(downloadVideoDTO);
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

    @GetMapping("videos")
    public ResponseEntity<Collection<PreviewVideoDTO>> videos() {
        Collection<PreviewVideoDTO> previewVideoDTOCollection = this.videoService.videos();
        return ResponseEntity.ok().body(previewVideoDTOCollection);
    }

    @PutMapping("videos/{slug}")
    public ResponseEntity<Object> update(@PathVariable String slug,
            @Valid @ModelAttribute UpdateVideoDTO updateVideoDTO,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Collection<String> messages = RestUtils.messages(bindingResult);
            return ResponseEntity.badRequest().body(messages);
        }
        boolean exists = this.videoService.existsBySlug(slug);
        if (exists) {
            VideoDTO videoDTO = this.videoService.update(slug, updateVideoDTO);
            return ResponseEntity.ok().body(videoDTO);
        }
        return ResponseEntity.notFound().build();
    }
}
