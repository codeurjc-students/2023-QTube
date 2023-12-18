package com.example.qtube.dtos;

import com.example.qtube.models.Image;
import com.example.qtube.models.Video;
import com.example.qtube.utils.RestUtils;

import lombok.Getter;
import lombok.Setter;

import java.net.URI;


@Getter
@Setter
public class DownloadVideoDTO {
    private String title;
    private String description;
    private URI source;
    private URI thumbnailSource;

    public DownloadVideoDTO(Video video) {
        this.setSources(video);
        this.title = video.getTitle();
        this.description = video.getDescription();
    }

    private void setSources(Video video) {
        String slug = video.getSlug();
        this.source = RestUtils.resource(slug);

        Image image = video.getImage();
        String thumbnailSlug = image.getSlug();
        URI thumbnailSource = RestUtils.resource(thumbnailSlug);
        this.thumbnailSource = thumbnailSource;
    }
}
