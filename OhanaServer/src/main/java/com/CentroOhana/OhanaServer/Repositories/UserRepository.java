package com.CentroOhana.OhanaServer.Repositories;

import com.CentroOhana.OhanaServer.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {


    Optional<User> findByUsername(String username);
    boolean existsByUserName(String userName);

}
