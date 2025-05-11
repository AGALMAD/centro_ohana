package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.Blog.NewPost;
import com.Ohana.OhanaServer.Models.Post;
import com.Ohana.OhanaServer.Repositories.PostRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final ImageService imageService;

    public Page<Post> getAllPost(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    public Post getPostById(String id) {
        UUID uuid = UUID.fromString(id);
        Optional<Post> post = postRepository.findById(uuid);

        if (!post.isPresent())
            return null;

        return post.get();
    }

    public Post createPost(NewPost newPost) {
        try {

            String imageUrl = null;
            if (newPost.getImage() != null) {
                imageUrl = imageService.saveImageBlog(newPost.getImage());
            }

            Post post = Post.builder()
                    .title(newPost.getTitle())
                    .imageUrl(imageUrl != null ? imageUrl : "")
                    .text(newPost.getText())
                    .date(newPost.getDate())
                    .build();

            return postRepository.save(post);

        } catch (Exception e) {
            log.error("Error al crear el post", e);
            throw new RuntimeException("Error al crear el post", e);
        }
    }

    public Post updatePost(String id, NewPost updatedPost) {
        try {
            Optional<Post> optionalPost = postRepository.findById(UUID.fromString(id));

            if (optionalPost.isEmpty()) {
                return null;
            }

            Post post = optionalPost.get();

            if (updatedPost.getTitle() != null)
                post.setTitle(updatedPost.getTitle());
            if (updatedPost.getText() != null)
                post.setText(updatedPost.getText());
            if (updatedPost.getImage() != null && !updatedPost.getImage().isEmpty()) {
                String newImageUrl = imageService.saveImageBlog(updatedPost.getImage());
                post.setImageUrl(newImageUrl);
            }

            return postRepository.save(post);

        } catch (Exception e) {
            log.error("Error al actualizar el post", e);
            throw new RuntimeException("Error al actualizar el post", e);
        }
    }

    public Post deleteById(String id) {
        UUID uuid = UUID.fromString(id);
        Optional<Post> post = postRepository.findById(uuid);

        if (post.isPresent()) {
            postRepository.deleteById(uuid);
            return post.get();
        } else {
            return null;
        }
    }
}
