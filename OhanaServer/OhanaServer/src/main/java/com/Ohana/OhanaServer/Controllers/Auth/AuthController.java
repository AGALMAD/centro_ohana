package com.Ohana.OhanaServer.Controllers.Auth;


import com.Ohana.OhanaServer.Controllers.AuthRequest;
import com.Ohana.OhanaServer.Services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request)
    {
        return ResponseEntity.ok(authService.login(request));
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest request)
    {
        return ResponseEntity.ok(authService.register(request));
    }
}