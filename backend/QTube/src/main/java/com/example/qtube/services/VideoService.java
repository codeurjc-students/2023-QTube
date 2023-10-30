package com.example.qtube.services;

import com.example.qtube.dtos.UploadVideoDTO;
import com.example.qtube.dtos.VideoDTO;
import com.example.qtube.dtos.VideoDetailsDTO;
import com.example.qtube.models.Image;
import com.example.qtube.models.Video;
import com.example.qtube.repositories.VideoRepository;
import com.example.qtube.utils.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


@Service
public class VideoService {
    private final VideoRepository videoRepository;
    private final ResourceService resourceService;
    private final ImageService imageService;
    private final FileUtils fileUtils;
    private final ModelMapper modelMapper;

    public VideoService(VideoRepository videoRepository,
                        ResourceService resourceService,
                        ImageService imageService,
                        FileUtils fileUtils,
                        ModelMapper modelMapper) {
        this.videoRepository = videoRepository;
        this.resourceService = resourceService;
        this.imageService = imageService;
        this.fileUtils = fileUtils;
        this.modelMapper = modelMapper;
    }

    public VideoDTO save(UploadVideoDTO uploadVideoDTO) throws IOException {
        MultipartFile thumbnailMultipartFile = uploadVideoDTO.getThumbnail();
        Image image = this.imageService.save(thumbnailMultipartFile);
        VideoDTO videoDTO = this.save(uploadVideoDTO, image);
        return videoDTO;
    }

    private VideoDTO save(UploadVideoDTO uploadVideoDTO, Image image) throws IOException {
        MultipartFile videoMultipartFile = uploadVideoDTO.getVideo();
        String slug = this.fileUtils.slug(videoMultipartFile);
        Video video = new Video();
        video.setSlug(slug);
        video.setImage(image);
        this.modelMapper.map(uploadVideoDTO, video);

        this.resourceService.upload(videoMultipartFile, slug);
        this.videoRepository.save(video);

        VideoDTO videoDTO = this.modelMapper.map(video, VideoDTO.class);
        return videoDTO;
    }

    public Optional<VideoDTO> video(String slug) {
        Optional<Video> optionalVideo = this.videoRepository.findBySlug(slug);
        if (optionalVideo.isPresent()) {
            Video video = optionalVideo.get();
            VideoDTO videoDTO = this.modelMapper.map(video, VideoDTO.class);
            return Optional.of(videoDTO);
        }
        return Optional.empty();
    }

    public boolean existsBySlug(String slug) {
        return this.videoRepository.existsBySlug(slug);
    }

    public void delete(String slug) {
        this.resourceService.delete(slug);
        String thumbnailSlug = this.videoRepository.findThumbnailSlugByVideoSlug(slug);
        this.resourceService.delete(thumbnailSlug);
        this.videoRepository.deleteBySlug(slug);
    }

    public VideoDTO update(String slug, VideoDetailsDTO videoDetailsDTO) {
        Video video = this.videoRepository.findBySlug(slug).get();
        this.modelMapper.map(videoDetailsDTO, video);
        this.videoRepository.save(video);
        VideoDTO videoDTO = this.modelMapper.map(video, VideoDTO.class);
        return videoDTO;
    }
}
