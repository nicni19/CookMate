import { UserProfile } from "../../../modules/user-profile-screen/UserProfile";
import React from "react";
import { FeedNavProps } from "../navigation/param-lists/FeedParamList";

export type UserScreenParams = {
    userId: string;
};
type UserScreenProps = {} & FeedNavProps<"UserScreen">;

export const UserScreen: React.FC<UserScreenProps> = (props) => {
    return <UserProfile {...props} />;
};
