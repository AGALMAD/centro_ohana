package com.Ohana.OhanaServer.Controllers.User;

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

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody NewUserRequest newUser) {
        return ResponseEntity.ok(userService.register(newUser));

    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping
    public ResponseEntity<UserDto> updateUser(@RequestBody UpdateUserRequest newData) {
        UserDto userDto = userService.updateUser(newData);

        return userDto != null ? ResponseEntity.ok(userDto) : ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/me")
    public ResponseEntity<UserDto> getAuthenticatedUser(Principal principal) {

        String username = principal.getName();
        UserDto user = userService.getUserByUsername(username);

        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserDto> deleteUser(@PathVariable String id) {
        UserDto userDto = userService.deleteUser(id);
        return userDto != null ? ResponseEntity.ok(userDto) : ResponseEntity.notFound().build();
    }

}
