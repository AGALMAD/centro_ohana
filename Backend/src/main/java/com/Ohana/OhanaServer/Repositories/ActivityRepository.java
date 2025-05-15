package com.Ohana.OhanaServer.Repositories;

import com.Ohana.OhanaServer.Models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ActivityRepository extends JpaRepository<Activity, UUID> {
}
