package com.Ohana.OhanaServer.Controllers.Workshop;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewWorkshopRequest {
    String title;
    String description;
    LocalDate date;
    LocalTime time;
    String instructor;
}