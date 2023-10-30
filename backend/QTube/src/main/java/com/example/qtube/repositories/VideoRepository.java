package com.example.qtube.repositories;

import com.example.qtube.models.Video;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    Optional<Video> findBySlug(String slug);

    @Transactional
    void deleteBySlug(String slug);

    @Query("SELECT image.slug FROM Video WHERE slug = :slug")
    String findThumbnailSlugByVideoSlug(String slug);
}
