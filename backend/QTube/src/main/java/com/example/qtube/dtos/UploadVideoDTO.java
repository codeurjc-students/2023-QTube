package com.example.qtube.dtos;

import com.example.qtube.validators.ValidMultipartFile;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;

import org.springframework.web.multipart.MultipartFile;


@AllArgsConstructor
@Getter
public class UploadVideoDTO {
    @ValidMultipartFile(allowedMIMETypes = {"video/webm", "video/mp4"}, maximumFileSizeInMB = 100)
    private final MultipartFile video;

    @ValidMultipartFile(allowedMIMETypes = {"image/jpeg", "image/png", "image/webp", "image/gif"}, maximumFileSizeInMB = 50)
    private final MultipartFile thumbnail;

    @NotBlank
    @Size(max = 25)
    private final String title;

    @NotNull
    @Size(max = 250)
    private final String description;
}
