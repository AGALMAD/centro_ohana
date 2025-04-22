package com.Ohana.OhanaServer.Repositories;

import com.Ohana.OhanaServer.Models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ImageRepository extends JpaRepository<Image, UUID> {
}

