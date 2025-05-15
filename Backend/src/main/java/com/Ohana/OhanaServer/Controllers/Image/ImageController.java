package com.Ohana.OhanaServer.Controllers.Image;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
public class ImageController {

    @GetMapping("/activities/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {
        Path imagePath = Paths.get("src/main/resources/static/activities").resolve(filename);
        Resource resource = new FileSystemResource(imagePath);

        if (resource.exists()) {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)

                    .body(resource);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/blog/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getImageBlog(@PathVariable String filename) {
        Path imagePath = Paths.get("src/main/resources/static/blog").resolve(filename);
        Resource resource = new FileSystemResource(imagePath);

        System.out.println("Trying to load: " + imagePath);
        if (resource.exists()) {
            System.out.println("Entra en resources");

            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)

                    .body(resource);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
