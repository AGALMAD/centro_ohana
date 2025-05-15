package com.Ohana.OhanaServer.Config.Seeder;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


@Getter
@Configuration
public class SeedUserProperties {

    @Value("${app.seed.admin1.username}")
    private String admin1Username;

    @Value("${app.seed.admin1.password}")
    private String admin1Password;

    @Value("${app.seed.admin2.username}")
    private String admin2Username;

    @Value("${app.seed.admin2.password}")
    private String admin2Password;
}