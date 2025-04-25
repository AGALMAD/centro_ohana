package com.Ohana.OhanaServer.Controllers.Activity;


import com.Ohana.OhanaServer.Services.ActivityService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
@RequestMapping("/api/activity")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<ActivityReponse>> getAllActivities() {
        return ResponseEntity.ok(activityService.getAllActivities());
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<ActivityReponse> getActivityById(@PathVariable String id) {
        ActivityReponse activity = activityService.getActivityById(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.badRequest().build();

    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ActivityReponse> createActivity(
            @RequestParam("title") String title,
            @RequestParam( "description") String description,
            @RequestParam("startDateStr") String startDateStr,
            @RequestParam("endDateStr") String endDateStr,
            @RequestParam("startTimeStr") String  startTimeStr,
            @RequestParam("endTimeStr") String  endTimeStr,
            @RequestParam("postLink") String postLink,
            @RequestParam("image") MultipartFile image,
            @RequestParam("paragraphs") String paragraphsJson //hay que pasar los párrafos como json ya que el objeto no lo puede serializar
    ) throws JsonProcessingException {

        //Se pasa a lista
        List<NewParagraph> paragraphs = new ObjectMapper()
                .readValue(paragraphsJson, new TypeReference<>() {});

        //Pasa la fecha a LocalDate
        LocalDate startDate = (startTimeStr != null) ? LocalDate.parse(startDateStr) : null;
        LocalDate endDate = (endTimeStr != null) ? LocalDate.parse(endDateStr) : null;

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

        ActivityReponse createdActivity = activityService.createActivity(activity);

        return createdActivity != null ? ResponseEntity.ok(createdActivity) : ResponseEntity.badRequest().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ActivityReponse> editActivity(
            @RequestParam("id") String id,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "startDate", required = false) String startDateStr,
            @RequestParam(value = "endDate", required = false) String endDateStr,
            @RequestParam(value = "startTime", required = false) String  startTimeStr,
            @RequestParam(value = "endTime", required = false) String  endTimeStr,
            @RequestParam(value = "postLink", required = false) String postLink,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "paragraphs", required = false) String paragraphsJson //hay que pasar los párrafos como json ya que el objeto no lo puede serializar
    ) throws JsonProcessingException {
        try {
            // Validación: existe la actividad
            ActivityReponse activityReponse = activityService.getActivityById(id);
            if (activityReponse == null) return ResponseEntity.badRequest().build();

            // Parseo seguro de fechas y horas
            LocalDate startDate = (startDateStr != null && !startDateStr.isEmpty()) ? LocalDate.parse(startDateStr) : null;
            LocalDate endDate = (endDateStr != null && !endDateStr.isEmpty()) ? LocalDate.parse(endDateStr) : null;
            LocalTime startTime = (startTimeStr != null && !startTimeStr.isEmpty()) ? LocalTime.parse(startTimeStr) : null;
            LocalTime endTime = (endTimeStr != null && !endTimeStr.isEmpty()) ? LocalTime.parse(endTimeStr) : null;

            // Parseo seguro de párrafos
            List<NewParagraph> paragraphs = null;
            if (paragraphsJson != null && !paragraphsJson.isBlank()) {
                paragraphs = new ObjectMapper().readValue(paragraphsJson, new TypeReference<>() {});
            }

            NewActivity activity = NewActivity.builder()
                    .title(title)
                    .description(description)
                    .startDate(startDate)
                    .endDate(endDate)
                    .startTime(startTime)
                    .endTime(endTime)
                    .image((image != null && !image.isEmpty()) ? image : null)
                    .postLink(postLink)
                    .paragraphs(paragraphs)
                    .build();

            ActivityReponse updatedActivity = activityService.updateActivity(id, activity);
            return updatedActivity != null ? ResponseEntity.ok(updatedActivity) : ResponseEntity.badRequest().build();

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }


    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<ActivityReponse> deleteUser(@PathVariable String id) {
        ActivityReponse activity = activityService.deleteById(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.notFound().build();
    }


}
