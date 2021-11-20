import { MyProfile } from "../../../modules/my-profile/MyProfile";
import React from "react";
import { FeedNavProps } from "../navigation/param-lists/FeedParamList";


type MyScreenProps = {} & FeedNavProps<"UserScreen">;

export const MyScreen: React.FC<MyScreenProps> = (props) => {
    return <MyProfile {...props} />;
};
