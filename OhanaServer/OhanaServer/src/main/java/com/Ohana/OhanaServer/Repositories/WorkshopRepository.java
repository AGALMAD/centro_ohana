package com.Ohana.OhanaServer.Repositories;

import com.Ohana.OhanaServer.Models.Workshop;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface WorkshopRepository extends JpaRepository<Workshop, UUID> {

    List<Workshop> findUpcomingWorkshops(LocalDate date);
}