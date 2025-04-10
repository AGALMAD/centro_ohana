package com.Ohana.OhanaServer.Config.Seeder;

import com.Ohana.OhanaServer.Models.Role;
import com.Ohana.OhanaServer.Models.User;
import com.Ohana.OhanaServer.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class UserSeeder implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {


        if (userRepository.count() == 0) {
            insertUsers();
        } else {
            System.out.println("Usuarios ya existen, seeder no se ejecutó.");
        }


    }


    private void insertUsers(){

        List<User> users = List.of(
                User.builder()
                        .username("admin1")
                        .password(passwordEncoder.encode("admin1"))
                        .role(Role.ADMIN)
                        .build(),
                User.builder()
                        .username("admin2")
                        .password(passwordEncoder.encode("admin2"))
                        .role(Role.ADMIN)
                        .build(),
                User.builder()
                        .username("admin3")
                        .password(passwordEncoder.encode("admin3"))
                        .role(Role.ADMIN)
                        .build(),
                User.builder()
                        .username("user")
                        .password(passwordEncoder.encode("user"))
                        .role(Role.USER)
                        .build()
        );

        userRepository.saveAll(users);
        System.out.println("Usuarios administradores sembrados exitosamente.");

    }
}
