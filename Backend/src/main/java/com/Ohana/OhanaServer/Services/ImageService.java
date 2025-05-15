package com.Ohana.OhanaServer.Services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    private final Path rootActivities = Paths.get("src/main/resources/static/activities");
    private final Path rootBlog = Paths.get("src/main/resources/static/blog");


    public String saveImageActivities(MultipartFile file) throws IOException {
        Files.createDirectories(rootActivities); // crea carpeta si no existe

        // Generar un nombre único para la imagen
        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = rootActivities.resolve(filename);

        // Copia el archivo en la carpeta
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return  "activities/" + filename;
    }

    public String saveImageBlog(MultipartFile file) throws IOException {
        Files.createDirectories(rootBlog); // crea carpeta si no existe

        // Generar un nombre único para la imagen
        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = rootBlog.resolve(filename);

        // Copia el archivo en la carpeta
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return  "blog/" + filename;
    }

}

