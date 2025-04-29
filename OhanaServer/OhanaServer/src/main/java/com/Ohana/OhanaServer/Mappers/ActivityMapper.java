package com.Ohana.OhanaServer.Mappers;

import com.Ohana.OhanaServer.Controllers.Activity.ActivityReponse;
import com.Ohana.OhanaServer.Models.Activity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ParagraphMapper.class, TimeMapper.class, DateMapper.class})
public interface ActivityMapper {

    @Mapping(source = "startDate", target = "startDate") // El mapeo se manejará en DateMapper
    @Mapping(source = "endDate", target = "endDate")     // El mapeo se manejará en DateMapper
    @Mapping(source = "paragraphs", target = "paragraphs")
    ActivityReponse activityToActivityDto(Activity activities);

    List<ActivityReponse> activityToActivityDto(List<Activity> activities);
}