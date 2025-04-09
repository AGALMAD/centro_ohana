package com.Ohana.OhanaServer.Services;

import com.Ohana.OhanaServer.Controllers.User.NewUserRequest;
import com.Ohana.OhanaServer.Controllers.User.UserDto;
import com.Ohana.OhanaServer.Mappers.UserMapper;
import com.Ohana.OhanaServer.Models.Role;
import com.Ohana.OhanaServer.Models.User;
import com.Ohana.OhanaServer.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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


}
