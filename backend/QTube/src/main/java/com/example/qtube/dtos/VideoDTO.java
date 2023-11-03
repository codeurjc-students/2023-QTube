package com.example.qtube.dtos;

import com.example.qtube.models.Image;
import com.example.qtube.models.Video;
import com.example.qtube.utils.RestUtils;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.net.URI;
import java.time.LocalDate;


@NoArgsConstructor
@Getter
@Setter
public class VideoDTO extends VideoDetailsDTO {
    private URI source;
    private URI thumbnailSource;
    private LocalDate date;

    public VideoDTO(Video video) {
        this.title = video.getTitle();
        this.description = video.getDescription();
        this.setSources(video);
        this.date = video.getDate();
    }

    private void setSources(Video video) {
        String slug = video.getSlug();
        URI source = RestUtils.resource(slug);
        this.source = source;

        Image image = video.getImage();
        String thumbnailSlug = image.getSlug();
        URI thumbnailSource = RestUtils.resource(thumbnailSlug);
        this.thumbnailSource = thumbnailSource;
    }
}
