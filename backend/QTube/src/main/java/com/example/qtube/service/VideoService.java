package com.example.qtube.service;

import com.example.qtube.model.Video;
import com.example.qtube.repository.VideoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<Video> findAll() {
        return this.videoRepository.findAll();
    }

}
