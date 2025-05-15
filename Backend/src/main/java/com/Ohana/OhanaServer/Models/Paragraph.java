package com.Ohana.OhanaServer.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Paragraph {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "activity_id", nullable = false)
    @JsonBackReference
    private Activity activity;


    @Column
    private String title;

    @Column(nullable = false, length = 1000)
    private String text;

}
