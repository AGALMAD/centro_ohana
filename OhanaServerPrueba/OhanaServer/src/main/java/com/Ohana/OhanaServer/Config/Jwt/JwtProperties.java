package com.Ohana.OhanaServer.Config.Jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {
    private String key;
    private Long accessTokenExpiration;
    private Long refreshTokenExpiration;
}
