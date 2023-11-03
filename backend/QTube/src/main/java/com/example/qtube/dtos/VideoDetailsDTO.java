package com.example.qtube.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class VideoDetailsDTO {
    @NotBlank
    @Size(max = 25)
    protected String title;

    @NotNull
    @Size(max = 250)
    protected String description;
}
