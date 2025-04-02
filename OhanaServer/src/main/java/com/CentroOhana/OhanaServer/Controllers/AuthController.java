package com.CentroOhana.OhanaServer.Controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @PostMapping("/login")
    public ResponseEntity<String> login() {
        return ResponseEntity.ok("OK");

    }

    @PostMapping("/register")
    public ResponseEntity<String> register() {
        return ResponseEntity.ok("OK");

    }

}
