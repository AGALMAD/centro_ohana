package com.Ohana.OhanaServer.Controllers.Blog;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewPost {
    String title;
    String text;
    private MultipartFile image;
    LocalDate date;
}
