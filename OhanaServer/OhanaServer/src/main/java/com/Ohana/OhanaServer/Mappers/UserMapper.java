package com.Ohana.OhanaServer.Mappers;

import com.Ohana.OhanaServer.Controllers.User.UserDto;
import com.Ohana.OhanaServer.Models.User;
import org.mapstruct.Mapper;


import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {


    UserDto userToUserDto(User user);
    User userDtoToUser(UserDto user);

    List<UserDto> userToUserDto(List<User> users);
    List<User> userDtoToUser(List<UserDto> users);

}
