package com.Ohana.OhanaServer.Config.Seeder;


import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Models.Paragraph;
import com.Ohana.OhanaServer.Repositories.ActivityRepository;
import com.Ohana.OhanaServer.Services.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Date;
import java.sql.Time;
import java.util.Calendar;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ActivitySeeder implements ApplicationRunner {

    private final ActivityRepository activityRepository;
    private final CloudinaryService cloudinaryService;

    @Override
    public void run(ApplicationArguments args) {
        if (activityRepository.count() == 0) {
            insertActivities();
        } else {
            System.out.println("Talleres ya existen, seeder no se ejecutó.");
        }
    }

    private void insertActivities() {
        Calendar cal = Calendar.getInstance();

        // Actividades pasadas
        cal.set(2023, Calendar.FEBRUARY, 15, 10, 0); // 15 Feb 2023
        Date pastStart1 = new Date(cal.getTimeInMillis());
        cal.set(2023, Calendar.FEBRUARY, 15, 12, 0);
        Date pastEnd1 = new Date(cal.getTimeInMillis());

        cal.set(2023, Calendar.MARCH, 10, 16, 0); // 10 Mar 2023
        Date pastStart2 = new Date(cal.getTimeInMillis());
        cal.set(2023, Calendar.MARCH, 10, 18, 0);
        Date pastEnd2 = new Date(cal.getTimeInMillis());

        // Actividad actual
        Date now = new Date(System.currentTimeMillis());
        Date oneHourLater = new Date(now.getTime() + 3600000); // Sumar 1 hora

        // Actividades futuras
        cal.set(2025, Calendar.JUNE, 10, 10, 0);
        Date futureStart1 = new Date(cal.getTimeInMillis());
        cal.set(2025, Calendar.JUNE, 10, 12, 0);
        Date futureEnd1 = new Date(cal.getTimeInMillis());

        cal.set(2025, Calendar.AUGUST, 5, 15, 0);
        Date futureStart2 = new Date(cal.getTimeInMillis());
        cal.set(2025, Calendar.AUGUST, 5, 17, 0);
        Date futureEnd2 = new Date(cal.getTimeInMillis());

        List<Activity> activities = List.of(
                createActivity("TALLER SEMANA BLANCA", "activities/imagen1.jpg", "¿Buscas un plan divertido y educativo para las mañanas de Semana Blanca? \uD83C\uDF1F En Ohana hemos preparado un taller lleno de actividades para que los peques disfruten y aprendan mientras juegan.", "https://www.instagram.com/", pastStart1, pastEnd1),
                createActivity("PIJAMADA EN OHANA", "activities/imagen2.jpg", "¡Llega la Primera PIJAMADA de Ohana!", "https://www.instagram.com/", pastStart2, pastEnd2),
                createActivity("TALLER AUTONOMÍA Y AUTOCUIDADO", "activities/imagen3.jpg", "Talleres continuos impartidos por nuestra terapeuta ocupacional.", "https://www.instagram.com/", now, oneHourLater),
                createActivity("TALLER DE MOTRICIDAD", "activities/imagen4.jpg", "Talleres continuos con nuestra terapeuta ocupacional.", "https://www.instagram.com/", futureStart1, futureEnd1),
                createActivity("PRIMEROS AUXILIOS EN PEDIATRÍA", "activities/imagen5.jpg", "Taller práctico de primeros auxilios en pediatría presencial.", "https://www.instagram.com/", futureStart2, futureEnd2)
        );

        activityRepository.saveAll(activities);
        System.out.println("Talleres guardados exitosamente.");
    }

    private Activity createActivity(String title, String localImageFilename, String description, String postLink, Date startDate, Date endDate) {
        Time startTime = new Time(startDate.getTime());
        Time endTime = new Time(endDate.getTime());

        String imageUrl = localImageFilename;

        try (InputStream is = getClass().getClassLoader().getResourceAsStream("static/" + imageUrl)) {
            if (is == null) {
                throw new FileNotFoundException("Imagen no encontrada en recursos: " + imageUrl);
            }
            byte[] bytes = is.readAllBytes();
            imageUrl = cloudinaryService.uploadImage(bytes, "activities");
        }catch (IOException e) {
            throw new RuntimeException(e);
        }


        Activity activity = Activity.builder()
                .title(title)
                .imageUrl(imageUrl)
                .description(description)
                .startDate(startDate)
                .endDate(endDate)
                .startTime(startTime)
                .endTime(endTime)
                .postLink(postLink)
                .build();


        List<Paragraph> paragraphs = List.of(
                Paragraph.builder()
                        .text("✨ Actividades:\u2028\uD83C\uDFAD Pinta caras\u2028\uD83D\uDCD6 Cuentacuentos\u2028\uD83D\uDD8C\uFE0F Manualidades\u2028\uD83D\uDC69\u200D\uD83C\uDF73 Taller de cocina\u2028\uD83E\uDDE9 Juegos de mesa y sensoriales\u2028\uD83E\uDD38\u200D♂\uFE0F Motricidad y mucho más…")
                        .activity(activity)
                        .build(),
                Paragraph.builder()
                        .text("Realizado por: logopedas, psicopedagogas y terapeuta ocupacional. \uD83D\uDC99")
                        .activity(activity)
                        .build(),
                Paragraph.builder()
                        .text("\uD83D\uDCE9 ¡Plazas limitadas! Reserva ya enviándonos un mensaje. \uD83D\uDCF2")
                        .activity(activity)
                        .build(),
                Paragraph.builder()
                        .text("\uD83D\uDCB0 Precio: 80€ (taller completo) | 25€ (días sueltos) | 65€ (precios hermanos/as)")
                        .activity(activity)
                        .build()
        );

        activity.setParagraphs(paragraphs);
        return activity;
    }

}
