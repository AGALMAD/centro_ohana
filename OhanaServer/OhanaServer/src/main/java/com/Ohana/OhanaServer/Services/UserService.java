package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.User.NewUserRequest;
import com.Ohana.OhanaServer.Controllers.User.UpdateUserRequest;
import com.Ohana.OhanaServer.Controllers.User.UserDto;
import com.Ohana.OhanaServer.Mappers.UserMapper;
import com.Ohana.OhanaServer.Models.Role;
import com.Ohana.OhanaServer.Models.User;
import com.Ohana.OhanaServer.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    private final UserMapper userMapper;


    public UserDto register(NewUserRequest request) {


        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword()))
                .role(Role.EDITOR)
                .build();

        userRepository.save(user);

        return userMapper.userToUserDto(user);

    }

    public UserDto getUserByUsername(String username){

        Optional<User> optionalUser = userRepository.findByUsername(username);

        if(optionalUser.isPresent())
            return userMapper.userToUserDto(optionalUser.get());


        return null;


    }

    public List<UserDto> getAllUsers(){

        List<User> users = userRepository.findAll();
        return userMapper.userToUserDto(users);
    }

    public UserDto updateUser(UpdateUserRequest newData){

        try {
            Optional<User> optionalUser = userRepository.findById(UUID.fromString(newData.getId()));

            if (optionalUser.isPresent()) {
                return updateUserInDB(optionalUser.get(),
                        NewUserRequest.builder()
                        .username(newData.getUsername())
                        .password(newData.getPassword())
                        .build()
                );

            }

        }catch (Exception e){
            log.error("e: ", e);
        }

        return null;

    }

    public UserDto updateAuthenticatedUser(String username, NewUserRequest newData){

        try {
            Optional<User> optionalUser = userRepository.findByUsername(username);

            if (optionalUser.isPresent()) {
                return updateUserInDB(optionalUser.get(), newData);
            }

        }catch (Exception e){
            log.error("e: ", e);
        }

        return null;

    }

    private UserDto updateUserInDB(User user, NewUserRequest newData) {

        if (newData.getUsername() != null && !newData.getUsername().isBlank()) {
            user.setUsername(newData.getUsername().trim());
        }

        if (newData.getPassword() != null && !newData.getPassword().isBlank()) {
            user.setPassword(passwordEncoder.encode(newData.getPassword()));
        }

        User updatedUser = userRepository.save(user);
        return userMapper.userToUserDto(updatedUser);
    }



    public UserDto deleteUser(String userId){

        try {
            Optional<User> optionalUser = userRepository.findById(UUID.fromString(userId));

            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                userRepository.delete(user);
                return userMapper.userToUserDto(user);
            }
        }catch (Exception e){
            log.error("e: ", e);
        }


        return null;
    }

}
