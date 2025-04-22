package com.Ohana.OhanaServer.Controllers.Activity;

import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Services.ActivityService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

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


    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<Activity> createActivity(
            @RequestParam("title") String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "startDate", required = false) Date startDate,
            @RequestParam(value = "endDate", required = false) Date endDate,
            @RequestParam(value = "startTime", required = false) Time startTime,
            @RequestParam(value = "endTime", required = false) Time endTime,
            @RequestParam(value = "postLink", required = false) String postLink,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "paragraphs", required = false) List<String> paragraphs
    ) {
        throw new NotImplementedException();
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<Activity> deleteUser(@PathVariable String id) {
        Activity activity = activityService.deleteById(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.notFound().build();
    }


}
