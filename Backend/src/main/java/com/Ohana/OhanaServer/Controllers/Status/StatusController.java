package com.Ohana.OhanaServer.Controllers.Status;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
@RequiredArgsConstructor
public class StatusController {

    @GetMapping
    public ResponseEntity<Void> checkStatus(){
        return ResponseEntity.ok().build();

    }
}
