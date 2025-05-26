package com.Ohana.OhanaServer.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String uploadAbsolutePath = Paths.get("uploads").toAbsolutePath().toUri().toString();

        registry.addResourceHandler("/activities/**")
                .addResourceLocations("classpath:/static/activities/") // primero busca aquí
                .addResourceLocations(uploadAbsolutePath + "activities/") // si no, busca aquí
                .setCachePeriod(3600);

        registry.addResourceHandler("/blog/**")
                .addResourceLocations("classpath:/static/blog/")
                .addResourceLocations(uploadAbsolutePath + "blog/")
                .setCachePeriod(3600);
    }
}