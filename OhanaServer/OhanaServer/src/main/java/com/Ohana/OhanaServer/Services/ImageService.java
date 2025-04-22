package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Models.Image;
import com.Ohana.OhanaServer.Repositories.ImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;

    private final Path root = Paths.get("images");


    public Image saveImage(MultipartFile file) throws IOException {
        Files.createDirectories(root); // crea carpeta si no existe

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = root.resolve(filename);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        Image image = Image.builder()
                .filename(filename)
                .path(filePath.toString())
                .contentType(file.getContentType())
                .build();

        return imageRepository.save(image);
    }

    public UrlResource loadImage(UUID imageId) throws IOException {
        Image image = imageRepository.findById(imageId)
                .orElseThrow(() -> new FileNotFoundException("Image not found"));

        return new UrlResource(Paths.get(image.getPath()).toUri());
    }
}

