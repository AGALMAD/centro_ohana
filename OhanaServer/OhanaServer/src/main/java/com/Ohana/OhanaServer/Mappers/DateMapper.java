package com.Ohana.OhanaServer.Mappers;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DateMapper {

    default String map(LocalDate date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            return date.format(formatter);
        }
        return null;
    }

    default LocalDate map(String dateString) {
        if (dateString != null && !dateString.isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            return LocalDate.parse(dateString, formatter);
        }
        return null;
    }

    default String map(java.sql.Date date) {
        if (date != null) {
            return map(date.toLocalDate());
        }
        return null;
    }

    default java.sql.Date mapToSqlDate(String dateString) {
        if (dateString != null && !dateString.isEmpty()) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate localDate = LocalDate.parse(dateString, formatter);
            return java.sql.Date.valueOf(localDate);
        }
        return null;
    }
}
