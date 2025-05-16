package com.Ohana.OhanaServer.Controllers.Status;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
@RequiredArgsConstructor
public class StatusController {

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity getAllPosts(){
        return ResponseEntity.ok().build();

    }
}
