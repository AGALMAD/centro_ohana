package com.Ohana.OhanaServer.Repositories;

import com.Ohana.OhanaServer.Models.Post;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {

}