package com.Ohana.OhanaServer.Models;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

import lombok.Data;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "workshops")
public class Workshop {
    @Id
    @GeneratedValue
    UUID id;

    @Basic
    @Column(nullable = false)
    String title;

    @Column(length = 1000)
    String description;

    @Column(nullable = false)
    LocalDate date;

    @Column(nullable = false)
    LocalTime time;

    @Column()
    String instructor;

}