package com.example.qtube.controllers;

import com.example.qtube.services.ResourceService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/v1/")
public class ResourceRestController {
    private final ResourceService resourceService;

    public ResourceRestController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping("resources/{slug}")
    public ResponseEntity<Object> download(@PathVariable String slug) {
        Optional<Resource> optionalResource = this.resourceService.download(slug);
        if (optionalResource.isPresent()) {
            Resource resource = optionalResource.get();
            return ResponseEntity.ok().body(resource);
        }
        return ResponseEntity.notFound().build();
    }
}
