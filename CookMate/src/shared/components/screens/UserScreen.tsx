import {UserProfile} from "../../../modules/user-profile-screen/UserProfile";
import React from "react";

interface UserScreenProps {
    userId : string
}

export const UserScreen : React.FC<UserScreenProps> = (props) => {
  return <UserProfile userId={props.userId}/>
}