package com.example.qtube.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VideoDetailsDTO {
    @NotBlank
    @Size(max = 25)
    private String title;

    @NotNull
    @Size(max = 250)
    private String description;
}
