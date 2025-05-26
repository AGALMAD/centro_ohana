package com.Ohana.OhanaServer.Services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ImageService {

    private final Cloudinary cloudinary;

    public String saveImageActivities(MultipartFile file) throws IOException {
        return uploadToCloudinary(file, "activities");
    }

    public String saveImageBlog(MultipartFile file) throws IOException {
        return uploadToCloudinary(file, "blog");
    }

    private String uploadToCloudinary(MultipartFile file, String folder) throws IOException {
        String uniqueFilename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();

        Map<?, ?> uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
                "folder", folder,
                "public_id", uniqueFilename,
                "resource_type", "image"
        ));

        return uploadResult.get("secure_url").toString();
    }
}

