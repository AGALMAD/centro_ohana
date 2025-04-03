package com.CentroOhana.OhanaServer.Config;

import lombok.Data;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@ConfigurationProperties("jwt")
public class JwtProperties {
    private String key;
    private Long accessTokenExpiration;



}

