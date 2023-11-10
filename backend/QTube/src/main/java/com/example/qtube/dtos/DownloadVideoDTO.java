package com.example.qtube.dtos;

import com.example.qtube.models.Video;
import com.example.qtube.utils.RestUtils;

import lombok.Getter;
import lombok.Setter;

import java.net.URI;


@Getter
@Setter
public class DownloadVideoDTO {
    private URI source;
    private String title;
    private String description;

    public DownloadVideoDTO(Video video) {
        this.setSource(video);
        this.title = video.getTitle();
        this.description = video.getDescription();
    }

    private void setSource(Video video) {
        String slug = video.getSlug();
        this.source = RestUtils.resource(slug);
    }
}
