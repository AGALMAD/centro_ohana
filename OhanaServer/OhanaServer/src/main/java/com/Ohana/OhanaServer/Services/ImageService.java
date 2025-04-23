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

    private final Path root = Paths.get("src/main/resources/static/activities");

    public String saveImage(MultipartFile file) throws IOException {
        Files.createDirectories(root); // crea carpeta si no existe

        // Generar un nombre único para la imagen
        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = root.resolve(filename);

        // Copia el archivo en la carpeta
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return  "/activities/" + filename;
    }

}

