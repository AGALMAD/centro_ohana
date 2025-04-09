package com.Ohana.OhanaServer.Controllers.User;

import com.Ohana.OhanaServer.Models.User;
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


    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping(value = "/allUsers")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable String id, @RequestBody NewUserRequest newData) {
       UserDto userDto = userService.updateUser(id,newData);

        return userDto != null ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<UserDto> deleteUser(@PathVariable String id) {
        UserDto userDto = userService.deleteUser(id);
        return userDto != null ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }



}
