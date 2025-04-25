package com.Ohana.OhanaServer.Config.Seeder;

import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Models.Paragraph;
import com.Ohana.OhanaServer.Repositories.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.sql.Time;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ActivitySeeder implements ApplicationRunner {

    private final ActivityRepository activityRepository;

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
        Date pastStart1 = cal.getTime();
        cal.set(2023, Calendar.FEBRUARY, 15, 12, 0);
        Date pastEnd1 = cal.getTime();

        cal.set(2023, Calendar.MARCH, 10, 16, 0); // 10 Mar 2023
        Date pastStart2 = cal.getTime();
        cal.set(2023, Calendar.MARCH, 10, 18, 0);
        Date pastEnd2 = cal.getTime();

        // Actividad actual
        Date now = new Date();
        Date oneHourLater = new Date(now.getTime() + 3600000);

        // Actividades futuras
        cal.set(2025, Calendar.JUNE, 10, 10, 0);
        Date futureStart1 = cal.getTime();
        cal.set(2025, Calendar.JUNE, 10, 12, 0);
        Date futureEnd1 = cal.getTime();

        cal.set(2025, Calendar.AUGUST, 5, 15, 0);
        Date futureStart2 = cal.getTime();
        cal.set(2025, Calendar.AUGUST, 5, 17, 0);
        Date futureEnd2 = cal.getTime();

        List<Activity> activities = List.of(
                createActivity("TALLER SEMANA BLANCA", "activities/imagen1.jpg", "¿Buscas un plan divertido y educativo para las mañanas de Semana Blanca?...", "https://www.instagram.com/", pastStart1, pastEnd1),
                createActivity("PIJAMADA EN OHANA", "activities/imagen2.jpg", "¡Llega la Primera PIJAMADA de Ohana!", "https://www.instagram.com/", pastStart2, pastEnd2),
                createActivity("TALLER AUTONOMÍA Y AUTOCUIDADO", "activities/imagen3.jpg", "Talleres continuos impartidos por nuestra terapeuta ocupacional.", "https://www.instagram.com/", now, oneHourLater),
                createActivity("TALLER DE MOTRICIDAD", "activities/imagen4.jpg", "Talleres continuos con nuestra terapeuta ocupacional.", "https://www.instagram.com/", futureStart1, futureEnd1),
                createActivity("PRIMEROS AUXILIOS EN PEDIATRÍA", "activities/imagen5.jpg", "Taller práctico de primeros auxilios en pediatría presencial.", "https://www.instagram.com/", futureStart2, futureEnd2)
        );

        activityRepository.saveAll(activities);
        System.out.println("Talleres guardados exitosamente.");
    }


    private Activity createActivity(String title, String imageUrl, String description, String postLink, Date startDate, Date endDate) {
        Time startTime = new Time(startDate.getTime());
        Time endTime = new Time(endDate.getTime());

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
                        .title("Introducción al taller")
                        .text("Este párrafo introduce los temas que se cubrirán en el taller.")
                        .activity(activity)
                        .build(),
                Paragraph.builder()
                        .title("Objetivos del taller")
                        .text("Aquí se describen los objetivos principales del taller.")
                        .activity(activity)
                        .build()
        );

        activity.setParagraphs(paragraphs);
        return activity;
    }

}
