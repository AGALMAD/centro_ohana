package com.Ohana.OhanaServer.Mappers;

import com.Ohana.OhanaServer.Controllers.User.UserDto;
import com.Ohana.OhanaServer.Models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {


    @Mapping(source = "id", target = "id")
    UserDto userToUserDto(User user);
    User userDtoToUser(UserDto user);

    @Mapping(source = "id", target = "id")
    List<UserDto> userToUserDto(List<User> users);
    List<User> userDtoToUser(List<UserDto> users);

}
