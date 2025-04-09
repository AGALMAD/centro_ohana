package com.Ohana.OhanaServer.Controllers.User;

import com.Ohana.OhanaServer.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody NewUserRequest newUser ) {
        return ResponseEntity.ok(userService.register(newUser));

    }

/*
    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping(value = "/allUsers")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        // Lógica para obtener todos los usuarios
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(value = "/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        // Lógica para actualizar la información de un usuario
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        // Lógica para eliminar un usuario por su ID
    }

 */

}
