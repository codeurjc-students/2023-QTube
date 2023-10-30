package com.example.qtube.dtos;

import com.example.qtube.validators.ValidMultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;

import org.springframework.web.multipart.MultipartFile;


@AllArgsConstructor
@Getter
public class UploadVideoDTO extends VideoDetailsDTO {
    @ValidMultipartFile(allowedMIMETypes = {"video/webm", "video/mp4"}, maximumFileSizeInMB = 100)
    private final MultipartFile video;

    @ValidMultipartFile(allowedMIMETypes = {"image/jpeg", "image/png", "image/webp", "image/gif"}, maximumFileSizeInMB = 50)
    private final MultipartFile thumbnail;
}
