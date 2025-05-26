package com.Ohana.OhanaServer.Config.Seeder;


import com.Ohana.OhanaServer.Models.Post;
import com.Ohana.OhanaServer.Repositories.PostRepository;
import com.Ohana.OhanaServer.Services.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class BlogSeeder implements ApplicationRunner {

    private final PostRepository postRepository;
    private final CloudinaryService cloudinaryService;

    @Override
    public void run(ApplicationArguments args) {
        if (postRepository.count() == 0) {
            insertPosts();
        } else {
            System.out.println("El blog ya existe, seeder no se ejecutó.");
        }
    }

    private void insertPosts() {

        List<Post> posts = List.of(
                createPost("¿Cómo organizar mi lugar de estudio?",
                        "blog/post1.jpg",
                        "\u2028\u2028\uD83D\uDCCDLugar fijo: Estudiar siempre en el mismo lugar, generalmente en nuestro sitio seguro, donde nos sintamos cómodos.\n" +
                                "\u2028\uFE0F\uD83D\uDCA1Buena iluminación: Tratar de buscar luz natural.\n" +
                                "\u2028\uD83D\uDCDDMateriales necesarios: Mantener al alcance todos los materiales necesarios para realizar las tareas sin distracciones y sin necesidad de levantarnos.\n" +
                                "\n" +
                                "\uD83E\uDDF9Espacio ordenado: Mantener el espacio libre de desorden y posibles distracciones.\n" +
                                "\u2028\uD83D\uDD07Libre de ruidos: Buscar un espacio silencioso, sin tránsito de personas.\n" +
                                "\u2028\uD83C\uDF3FIncluir elementos relajantes: Favorecen la concentración y fomenta la atención el establecimiento de elementos relajantes como videos de chimeneas, sonido del mar, etc.\u2028", LocalDate.of(2025,3,24)),
                createPost("Razones por las que no decir a los niños “si te portas mal no habrá regalos",
                        "blog/post2.jpg",
                        "\uD83C\uDF81 Le estamos mintiendo porque realmente si van a recibir regalos.\n" +
                                "\uD83C\uDF84Es manipulación porque el adulto quiere conseguir un objetivo jugando con la ilusión del niño.\n" +
                                "\uD83E\uDDF8 Fomenta el materialismo porque entienden que “portarse bien” implica un premio.\n" +
                                "\uD83D\uDE25Genera ansiedad porque se les da a entender que alguien los vigila constantemente.\n" +
                                "\uD83D\uDD70\uFE0FProvoca un comportamiento temporal porque no se da alternativa a la conducta y su motivación tiene fin el día que reciben los regalos.\n" +
                                "\uD83D\uDC6FFomenta la comparación porque no todos los niños pueden tener los mismos regalos.", LocalDate.of(2025,4,2)),
                createPost("Día Nacional del Daño Cerebral Adquirido",
                        "blog/post3.jpg",
                        "\uD83E\uDDE0El Daño Cerebral Adquirido es una lesión repentina en el cerebro. Se caracteriza por su aparición brusca y variada de secuelas que presenta según el área del cerebro lesionada y su gravedad. Estas secuelas provocan anomalías en la percepción y en la comunicación, así como alteraciones físicas, cognitivas y emocionales. La principal causa es el ictus.\n" +
                                "\n" +
                                "\uD83D\uDDE3\uFE0F La intervención logopedia es fundamental para las lesiones de comunicación y lenguaje.\n" +
                                "\n" +
                                "\uD83D\uDC9AEn nuestras sesiones trabajamos con actividades que fomentan la comprensión, ayudando a realizar peticiones cotidianas, llamar a sus seres queridos, cantar o recordar frases significativas.\n" +
                                "\n" +
                                "\uD83D\uDCF1Ofrecenos SAAC que facilita la Interacción con el entorno y su calidad de vida.\n" +
                                "\n" +
                                "\uD83E\uDEC2 Cuando se sufre un Daño Cerebral Adquirido, infórmate, pide ayuda y déjate guiar por los profesionales de la comunicación.\n" +
                                "\n" +
                                "❤\uFE0FLa comunicación es un derecho para todos❤\uFE0F", LocalDate.of(2025,4,18)),
                createPost("4 tips + 1 para cuidar la autoestima de los peques",
                        "blog/post4.jpg",
                        "\uD83E\uDDF0Dar autonomía: es importante que no hagamos aquello que pueden hacer solos. Te darás cuenta que les encanta aprender cosas nuevas y sentirse capaces.\n" +
                                "\uD83E\uDEC2\uD83D\uDE18No les obligues a dar besos y abrazos. Debemos prestar atención a las decisiones de nuestros peques sobre su propio cuerpo. Esto les ayudará a sentirse respetados.\n" +
                                "❌No mentirles. Te suena esto: “Cariño ahora volvemos y te subo en el coche” pero en realidad no vuelves, solo lo dices para convencerlo. Esto solo provoca desconfianza para el futuro.\n" +
                                "\uD83D\uDC42Escucha activa: Pon atención plena a lo que te cuentan y atiende sus llamadas.\n" +
                                "➕1: Corrige en privado, celebra en público", LocalDate.of(2025,4,29))
                );

        postRepository.saveAll(posts);
        System.out.println("Posts guardados exitosamente.");
    }

    private Post createPost(String title, String localImageFilename, String text, LocalDate date) {
        String imageUrl = localImageFilename;
        try (InputStream is = getClass().getClassLoader().getResourceAsStream("static/" + imageUrl)) {
            if (is == null) {
                throw new FileNotFoundException("Imagen no encontrada en recursos: " + imageUrl);
            }
            byte[] bytes = is.readAllBytes();
            imageUrl = cloudinaryService.uploadImage(bytes, "blog");
        } catch (IOException e) {
            throw new RuntimeException("Error al subir imagen del blog a Cloudinary", e);
        }

        return Post.builder()
                .title(title)
                .imageUrl(imageUrl)
                .text(text)
                .date(date)
                .build();
    }

}
