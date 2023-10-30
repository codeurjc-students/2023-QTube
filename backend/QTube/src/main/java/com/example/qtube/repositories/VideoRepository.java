package com.example.qtube.repositories;

import com.example.qtube.models.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    Optional<Video> findBySlug(String slug);
}
