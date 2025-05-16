package com.Ohana.OhanaServer.Controllers.Auth;


import com.Ohana.OhanaServer.Controllers.User.NewUserRequest;
import com.Ohana.OhanaServer.Services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody NewUserRequest request)
    {
        return ResponseEntity.ok(authService.login(request));
    }


}