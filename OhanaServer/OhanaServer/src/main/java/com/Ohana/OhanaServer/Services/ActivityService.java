package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.Activity.ActivityReponse;
import com.Ohana.OhanaServer.Controllers.Activity.NewActivity;
import com.Ohana.OhanaServer.Mappers.ActivityMapper;
import com.Ohana.OhanaServer.Mappers.ParagraphMapper;
import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Models.Paragraph;
import com.Ohana.OhanaServer.Repositories.ActivityRepository;
import com.Ohana.OhanaServer.Repositories.ParagraphRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.NotImplementedException;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final ParagraphRepository paragraphRepository;
    private final ParagraphMapper paragraphMapper;
    private final ActivityMapper activityMapper;
    private final ImageService imageService;


    public List<ActivityReponse> getAllActivities(){
        return activityMapper.activityToActivityDto(activityRepository.findAll());
    }


    public ActivityReponse getActivityById(String id) {
        UUID uuid = UUID.fromString(id);
        Optional<Activity> activity = activityRepository.findById(uuid);

        if(!activity.isPresent())
            return null;

        return activityMapper.activityToActivityDto(activity.get());
    }

    public ActivityReponse createActivity(NewActivity newActivity) {
        try {

            String imageUrl = null;
            if (newActivity.getImage() != null) {
                imageUrl = imageService.saveImage(newActivity.getImage());
            }

            Activity activity = Activity.builder()
                    .title(newActivity.getTitle())
                    .imageUrl(imageUrl != null ? imageUrl : "")
                    .description(newActivity.getDescription())
                    .startDate(java.sql.Date.valueOf(newActivity.getStartDate()))
                    .endDate(java.sql.Date.valueOf(newActivity.getEndDate()))
                    .startTime(Time.valueOf(newActivity.getStartTime()))
                    .endTime(Time.valueOf(newActivity.getEndTime()))
                    .postLink(newActivity.getPostLink())
                    .build();


            // Guardar actividad primero para obtener el ID
            Activity savedActivity = activityRepository.save(activity);


            //Guarda los párrafos
            List<Paragraph> paragraphs = newActivity.getParagraphs().stream()
                    .map(p -> Paragraph.builder()
                            .title(p.getTitle())
                            .text(p.getText())
                            .activity(savedActivity)
                            .build())
                    .toList();

            paragraphRepository.saveAll(paragraphs);
            savedActivity.setParagraphs(paragraphs);

            //actividad con los párrafos guardados
            return activityMapper.activityToActivityDto(savedActivity);


        } catch (Exception e) {
            log.error("Error al crear la actividad", e);
            throw new RuntimeException("Error al crear la actividad", e);
        }
    }


    public ActivityReponse updateActivity(String id, NewActivity newData) {
        try {
            Optional<Activity> optionalActivity = activityRepository.findById(UUID.fromString(id));

            if (optionalActivity.isEmpty()) {
                return null;
            }

            Activity activity = optionalActivity.get();

            // Actualiza los campos actualizados
            if (newData.getTitle() != null) activity.setTitle(newData.getTitle());
            if (newData.getDescription() != null) activity.setDescription(newData.getDescription());
            if (newData.getStartDate() != null) activity.setStartDate(java.sql.Date.valueOf(newData.getStartDate()));
            if (newData.getEndDate() != null) activity.setEndDate(java.sql.Date.valueOf(newData.getEndDate()));
            if (newData.getStartTime() != null) activity.setStartTime(Time.valueOf(newData.getStartTime()));
            if (newData.getEndTime() != null) activity.setEndTime(Time.valueOf(newData.getEndTime()));
            if (newData.getPostLink() != null) activity.setPostLink(newData.getPostLink());

            if (newData.getImage() != null && !newData.getImage().isEmpty()) {
                String newImageUrl = imageService.saveImage(newData.getImage());
                activity.setImageUrl(newImageUrl);
            }

            if (newData.getParagraphs() != null) {
                List<Paragraph> existingParagraphs = activity.getParagraphs();
                existingParagraphs.clear();

                if (!newData.getParagraphs().isEmpty()) {
                    List<Paragraph> updatedParagraphs = newData.getParagraphs().stream()
                            .map(p -> Paragraph.builder()
                                    .title(p.getTitle())
                                    .text(p.getText())
                                    .activity(activity)
                                    .build())
                            .collect(Collectors.toList());

                    existingParagraphs.addAll(updatedParagraphs);
                }
            }



            Activity updated = activityRepository.save(activity);

            return activityMapper.activityToActivityDto(updated);

        } catch (Exception e) {
            log.error("Error al actualizar la actividad", e);
            throw new RuntimeException("Error al actualizar la actividad", e);
        }
    }




    public ActivityReponse deleteById(String id) {
        UUID uuid = UUID.fromString(id);
        Optional<Activity> activity = activityRepository.findById(uuid);

        if (activity.isPresent()) {
            activityRepository.deleteById(uuid);
            return activityMapper.activityToActivityDto(activity.get());
        } else {
            return null;
        }
    }

}
