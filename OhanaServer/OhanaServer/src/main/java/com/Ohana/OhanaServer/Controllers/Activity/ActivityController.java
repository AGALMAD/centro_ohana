package com.Ohana.OhanaServer.Controllers.Activity;

import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Services.ActivityService;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("/api/activity")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<Activity>> getAllActivities() {
        return ResponseEntity.ok(activityService.getAllActivities());
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable String id) {
        Activity activity = activityService.getActivityById(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.badRequest().build();

    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @CrossOrigin(origins = "*")
    public ResponseEntity<Activity> createActivity(
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "startDate", required = false) LocalDate startDate,
            @RequestParam(value = "endDate", required = false) LocalDate endDate,
            @RequestParam(value = "startTime", required = false) String  startTimeStr,
            @RequestParam(value = "endTime", required = false) String  endTimeStr,
            @RequestParam(value = "postLink", required = false) String postLink,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "paragraphs", required = false) String paragraphsJson //hay que pasar los párrafos como json ya que el objeto no lo puede serializar
    ) throws JsonProcessingException {

        //Se pasa a lista
        List<NewParagraph> paragraphs = new ObjectMapper()
                .readValue(paragraphsJson, new TypeReference<>() {});

        // Pasa las horas a LocalTime
        LocalTime startTime = (startTimeStr != null) ? LocalTime.parse(startTimeStr) : null;
        LocalTime endTime = (endTimeStr != null) ? LocalTime.parse(endTimeStr) : null;

        NewActivity activity = NewActivity.builder()
                .title(title)
                .description(description)
                .startDate(startDate)
                .endDate(endDate)
                .startTime(startTime)
                .endTime(endTime)
                .image(image)
                .postLink(postLink)
                .paragraphs(paragraphs)
                .build();

        Activity createdActivity = activityService.createActivity(activity);

        return createdActivity != null ? ResponseEntity.ok(createdActivity) : ResponseEntity.badRequest().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<Activity> deleteUser(@PathVariable String id) {
        Activity activity = activityService.deleteById(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.notFound().build();
    }


}
