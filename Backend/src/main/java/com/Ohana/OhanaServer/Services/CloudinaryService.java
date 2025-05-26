package com.Ohana.OhanaServer.Services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public String uploadImage(File file, String folder) throws IOException {
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file, ObjectUtils.asMap(
                "folder", folder,
                "resource_type", "image"
        ));
        return uploadResult.get("secure_url").toString();
    }
}
