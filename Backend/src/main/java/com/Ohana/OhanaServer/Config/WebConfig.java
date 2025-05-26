package com.Ohana.OhanaServer.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/activities/**")
                .addResourceLocations("file:uploads/activities/");

        registry
                .addResourceHandler("/blog/**")
                .addResourceLocations("file:uploads/blog/");
    }
}
