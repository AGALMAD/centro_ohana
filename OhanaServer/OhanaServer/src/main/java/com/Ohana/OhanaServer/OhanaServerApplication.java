package com.Ohana.OhanaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class OhanaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OhanaServerApplication.class, args);
	}

}
