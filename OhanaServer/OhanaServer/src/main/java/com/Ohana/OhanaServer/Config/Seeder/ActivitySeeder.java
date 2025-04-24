package com.Ohana.OhanaServer.Config.Seeder;

import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Repositories.ActivityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.sql.Time;
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
        List<Activity> activities = List.of(
                createActivity("Taller de Pedagogía Infantil", "activities/image1.jpg", "Un taller para maestros de educación infantil.", "https://link1.com"),
                createActivity("Taller de Pedagogía Crítica", "activities/image2.jpg", "Un taller enfocado en la pedagogía crítica y su aplicación en las aulas.", "https://link2.com"),
                createActivity("Taller de Métodos de Enseñanza", "activities/image3.jpg", "Este taller enseña diversos métodos de enseñanza para mejorar la pedagogía.", "https://link3.com"),
                createActivity("Taller de Psicopedagogía", "activities/image4.jpg", "En este taller abordamos la psicopedagogía en el proceso de aprendizaje.", "https://link4.com"),
                createActivity("Taller de Innovación Educativa", "activities/image5.jpg", "Un taller centrado en la innovación en los métodos pedagógicos.", "https://link5.com")
        );

        activityRepository.saveAll(activities);
        System.out.println("Talleres guardados exitosamente.");
    }

    private Activity createActivity(String title, String imageUrl, String description, String postLink) {

        Date startDate = new Date();
        Date endDate = new Date(startDate.getTime() + 3600000);

        Time startTime = new Time(startDate.getTime());
        Time endTime = new Time(endDate.getTime());

        return Activity.builder()
                .title(title)
                .imageUrl(imageUrl)
                .description(description)
                .startDate(startDate)
                .endDate(endDate)
                .startTime(startTime)
                .endTime(endTime)
                .postLink(postLink)
                .build();
    }
}
