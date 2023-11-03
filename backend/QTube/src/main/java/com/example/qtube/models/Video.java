package com.example.qtube.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Entity
@Table(uniqueConstraints = @UniqueConstraint(name = "video_slug_uk", columnNames = "slug"))
@Getter
@Setter
@NoArgsConstructor
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    private String title;

    @NotNull
    private String description;

    @NotNull
    private String slug;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "thumbnail_slug", referencedColumnName = "slug")
    private Image image;

    private final LocalDate date = LocalDate.now();

    public Video(String title, String description, String slug, Image image) {
        this.title = title;
        this.description = description;
        this.slug = slug;
        this.image = image;
    }
}
