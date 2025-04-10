package com.Ohana.OhanaServer.Controllers.User;

import com.Ohana.OhanaServer.Models.User;
import com.Ohana.OhanaServer.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
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


    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping
    public ResponseEntity<UserDto> updateUser(@RequestBody UpdateUserRequest newData) {
        UserDto userDto = userService.updateUser(newData);

        return userDto != null ? ResponseEntity.ok(userDto) : ResponseEntity.notFound().build();
    }


    @PutMapping("/me")
    public ResponseEntity<UserDto> updateCurrentUser(@RequestBody NewUserRequest newUser, Principal principal) {
        String username = principal.getName();

        UserDto updatedUser = userService.updateAuthenticatedUser(username, newUser);

        return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
    }



    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping
    public ResponseEntity<UserDto> deleteUser(@RequestBody DeleteUserRequest deleteUserRequest) {
        UserDto userDto = userService.deleteUser(deleteUserRequest.id);
        return userDto != null ? ResponseEntity.ok(userDto): ResponseEntity.notFound().build();
    }



}
