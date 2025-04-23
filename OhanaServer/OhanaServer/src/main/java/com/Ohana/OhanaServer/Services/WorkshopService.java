package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.Workshop.NewWorkshopRequest;
import com.Ohana.OhanaServer.Models.Workshop;
import com.Ohana.OhanaServer.Repositories.WorkshopRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class WorkshopService {

    private final WorkshopRepository workshopRepository;

    public Workshop create(NewWorkshopRequest request) {

        Workshop workshop = Workshop.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .date(request.getDate())
                .time(request.getTime())
                .instructor(request.getInstructor())
                .build();

        workshopRepository.save(workshop);

        return workshop;

    }

    public List<Workshop> getUpcomingWorkshops() {

        List<Workshop> workshops = workshopRepository.findUpcomingWorkshops(LocalDate.now());
        return workshops;
    }

}
