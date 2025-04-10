package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.User.NewUserRequest;
import com.Ohana.OhanaServer.Controllers.User.UpdateUserRequest;
import com.Ohana.OhanaServer.Controllers.User.UserDto;
import com.Ohana.OhanaServer.Mappers.UserMapper;
import com.Ohana.OhanaServer.Models.Role;
import com.Ohana.OhanaServer.Models.User;
import com.Ohana.OhanaServer.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
                .role(Role.ADMIN)
                .build();

        userRepository.save(user);

        return userMapper.userToUserDto(user);

    }

    public List<UserDto> getAllUsers(){

        List<User> users = userRepository.findAll();
        return userMapper.userToUserDto(users);
    }

    public UserDto updateUser(UpdateUserRequest newData){

        try {
            Optional<User> optionalUser = userRepository.findById(UUID.fromString(newData.getId()));

            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setUsername(newData.getUsername());
                user.setPassword(passwordEncoder.encode(newData.getPassword()));

                userRepository.save(user);
                return userMapper.userToUserDto(user);
            }

        }catch (Exception e){
            System.out.println(e.toString());
        }

        return null;

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
            System.out.println(e.toString());
        }


        return null;
    }

}
