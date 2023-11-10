package com.example.qtube.dtos;

import com.example.qtube.models.Image;
import com.example.qtube.models.Video;
import com.example.qtube.utils.RestUtils;
import lombok.Getter;

import java.io.Serializable;
import java.net.URI;

@Getter
public class PreviewVideoDTO implements Serializable {
    private String title;
    private String slug;
    private URI thumbnailSource;

    public PreviewVideoDTO(Video video) {
        this.title = video.getTitle();
        this.slug = video.getSlug();
        this.setSource(video);
    }

    private void setSource(Video video) {
        Image image = video.getImage();
        String thumbnailSlug = image.getSlug();
        URI thumbnailSource = RestUtils.resource(thumbnailSlug);
        this.thumbnailSource = thumbnailSource;
    }
}