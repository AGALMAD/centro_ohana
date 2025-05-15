package com.Ohana.OhanaServer.Repositories;

import com.Ohana.OhanaServer.Models.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ParagraphRepository  extends JpaRepository<Paragraph, UUID> {
}
