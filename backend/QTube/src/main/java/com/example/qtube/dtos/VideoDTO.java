package com.example.qtube.dtos;

import com.example.qtube.models.Image;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VideoDTO extends VideoDetailsDTO {
    private String slug;
    private Image Image;
    private LocalDate date;
}
