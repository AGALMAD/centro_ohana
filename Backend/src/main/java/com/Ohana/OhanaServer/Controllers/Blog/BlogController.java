package com.Ohana.OhanaServer.Controllers.Blog;

import java.time.LocalDate;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.Ohana.OhanaServer.Models.Post;
import com.Ohana.OhanaServer.Services.PostService;
import com.fasterxml.jackson.core.JsonProcessingException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;


@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
public class BlogController {

    private final PostService postService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<Page<Post>> getAllPosts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {

        Page<Post> postPage = postService.getAllPost(PageRequest.of(page, size,
                Sort.by("date").descending()));
        return ResponseEntity.ok(postPage);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable String id) {
        Post post = postService.getPostById(id);
        return post != null ? ResponseEntity.ok(post) : ResponseEntity.badRequest().build();

    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Post> newPost(
            @RequestParam("title") String title,
            @RequestParam("text") String text,
            @RequestParam("image") MultipartFile image) throws JsonProcessingException {

        NewPost post = NewPost.builder()
                .title(title)
                .text(text)
                .image(image)
                .date(LocalDate.now())
                .build();

        Post createdPost = postService.createPost(post);

        return createdPost != null ? ResponseEntity.ok(createdPost) : ResponseEntity.badRequest().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Post> editPost(
            @RequestParam("id") String id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "text", required = false) String text,
            @RequestParam(value = "image", required = false) MultipartFile image

    ) throws JsonProcessingException {
        try {

            Post postResponse = postService.getPostById(id);
            if (postResponse == null)
                return ResponseEntity.badRequest().build();

            NewPost post = NewPost.builder()
                    .title(title)
                    .text(text)
                    .image((image != null && !image.isEmpty()) ? image : null)
                    .build();

            Post updatedPost = postService.updatePost(id, post);
            return updatedPost != null ? ResponseEntity.ok(updatedPost) : ResponseEntity.badRequest().build();

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }

    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<Post> deletePost(@PathVariable String id) {
        Post post = postService.deleteById(id);
        return post != null ? ResponseEntity.ok(post) : ResponseEntity.notFound().build();
    }
}
