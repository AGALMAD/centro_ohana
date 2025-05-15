package com.Ohana.OhanaServer.Mappers;

import org.mapstruct.Mapper;

import java.sql.Time;
import java.time.LocalTime;

@Mapper(componentModel = "spring")
public interface TimeMapper {
    default LocalTime map(Time time) {
        return time != null ? time.toLocalTime() : null;
    }

    default Time map(LocalTime localTime) {
        return localTime != null ? Time.valueOf(localTime) : null;
    }
}
