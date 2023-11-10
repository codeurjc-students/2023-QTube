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
public class UpdateVideoDTO {
    @NotBlank
    @Size(max = 25)
    protected final String title;

    @NotNull
    @Size(max = 250)
    protected final String description;

    @ValidMultipartFile(allowedMIMETypes = {"image/jpeg", "image/png", "image/webp", "image/gif"},
            maximumFileSizeInMB = 100)
    private final MultipartFile thumbnail;
}
