package com.example.qtube.dtos;

import com.example.qtube.validators.ValidMultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;


@AllArgsConstructor
@Getter
@ToString(exclude = "multipartFile")
public class UploadVideoRequest {
    @ValidMultipartFile(allowedMIMETypes = {"video/webm", "video/mp4"}, maximumFileSizeInMB = 100)
    private final MultipartFile multipartFile;
}
