package com.Ohana.OhanaServer.Config.Seeder;

import com.Ohana.OhanaServer.Models.Activity;
import com.Ohana.OhanaServer.Models.Paragraph;
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
                createActivity(
                        "TALLER SEMANA BLANCA", "activities/imagen1.jpg", "¿Buscas un plan divertido y educativo para las mañanas de Semana Blanca? \uD83C\uDF1F En Ohana hemos preparado un taller lleno de actividades...", "https://www.instagram.com/"),
                createActivity("PIJAMADA EN OHANA", "activities/imagen2.jpg", "✨ ¡Llega la Primera PIJAMADA de Ohana! \uD83C\uDFAD\uD83C\uDF19\u2028\u2028Una noche mágica para que los peques se diviertan...\n", "https://www.instagram.com/"),
                createActivity("TALLER  AUTONOMÍA Y AUTOCUIDADO", "activities/imagen3.jpg", "\uD83D\uDD38Os presentamos dos talleres continuos, impartidos por nuestra terapeuta ocupacional \uD83E\uDD70.", "https://www.instagram.com/"),
                createActivity("TALLER DE MOTRICIDAD", "activities/imagen4.jpg", "\uD83D\uDD38Os presentamos dos talleres continuos, impartidos por nuestra terapeuta ocupacional \uD83E\uDD70", "https://www.instagram.com/"),
                createActivity("PRIMEROS AUXILIOS EN PEDIATRÍA", "activities/imagen5.jpg", "\uD83D\uDD14 Taller práctico de primeros auxilios en pediatría presencial \uD83C\uDFE5\uD83D\uDC76\n" +
                        "\n" +
                        "\uD83D\uDC69\u200D⚕\uFE0F Formadora: María Velasco...", "https://www.instagram.com/")
        );

        activityRepository.saveAll(activities);
        System.out.println("Talleres guardados exitosamente.");
    }

    private Activity createActivity(String title, String imageUrl, String description, String postLink) {
        Date startDate = new Date();
        Date endDate = new Date(startDate.getTime() + 3600000);

        Time startTime = new Time(startDate.getTime());
        Time endTime = new Time(endDate.getTime());

        // Crear la actividad sin párrafos aún
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

        // Crear párrafos asociados a la actividad
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

        // Asignar los párrafos a la actividad
        activity.setParagraphs(paragraphs);

        return activity;
    }

}
