import React from "react";
import RecipeFeed from "../../../modules/recipe-feed/RecipeFeed";
import {FeedNavProps} from "../navigation/param-lists/FeedParamList";

type RecipeFeedProps = {} & FeedNavProps<"RecipeFeedScreen">

export const RecipeFeedScreen : React.FC<RecipeFeedProps> = (props) => {
    return <RecipeFeed {...props} />
};
