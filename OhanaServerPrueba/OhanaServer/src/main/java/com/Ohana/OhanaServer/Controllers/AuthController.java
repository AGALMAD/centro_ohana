package com.Ohana.OhanaServer.Controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {



    @PostMapping(value = "login")
    public ResponseEntity<String> login()
    {
        return ResponseEntity.ok("Login OK");
    }

    @PostMapping(value = "register")
    public ResponseEntity<String> register()
    {
        return ResponseEntity.ok("Register OK");
    }
}