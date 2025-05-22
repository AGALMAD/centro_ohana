package com.Ohana.OhanaServer.Controllers.User;

import com.Ohana.OhanaServer.Models.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserRequest {
    String id;
    String username;
    String password;
    Role role;
}
