import React from "react";
import { UserResponse } from "../models/user-response";

type Props = {
  user?: UserResponse;
};

function CreateOrUpdateUser({ user }: Props) {
  return <>{user && <h1>{user.username}</h1>}</>;
}

export default CreateOrUpdateUser;
