package com.CentroOhana.OhanaServer.Config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

/*Configuración de swagger*/
@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Ohana Server",
                description = "Servidor para la página web de Centro Ohana",
                version = "1.0.0"

        )
)
public class OpenApiConfig {
}
