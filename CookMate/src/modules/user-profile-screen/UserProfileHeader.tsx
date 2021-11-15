import React, {Component} from "react";
import {User} from "../../shared/view-models/User";
import {Button, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Cookbook} from "../../shared/view-models/Cookbook";


type UserProfileHeaderProps = {
    user: User,
    cookbook: Cookbook
}

type UserProfileHeaderStates = {
    isFollowPressed: boolean
}


export class UserProfileHeader extends Component<UserProfileHeaderProps, UserProfileHeaderStates> {
    private isPressed : boolean = false;

    render() {
        return(
            <View style={styles.cookbookViewHeaderContainer}>
                <View style={styles.profilePictureContainer}>
                    <Image source={
                        {
                            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        }}
                           style={styles.profilePicture}
                    />
                </View>
                <View style={styles.profileBannerContainer}>
                    <View style={styles.profileBanner}>
                        <View style={styles.profileBannerText}>
                            <Text style={styles.profileCookbookName}>{this.props.cookbook.name}</Text>
                            <Text style={styles.profileCookbookFollowers}>{this.getFollowerCountText(this.props.cookbook)}</Text>
                        </View>
                    </View>
                    <Pressable
                        style={({ pressed }) => [pressed ? styles.followButtonPressed : styles.followButton]}>
                        <Text style={{color: "#fff"}}>Follow</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    private getFollowerCountText(currentCookbook: Cookbook) {
        var amount : number = currentCookbook.followers.length;
        return amount + ((amount > 1) ? " followers" : " follower");
    }
}

const styles = StyleSheet.create({
    cookbookViewHeaderContainer: {
        flex: 1,
        flexDirection: "row",
        maxHeight: 90,
        width: "100%"
    },
    profilePicture: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: '#656565'
    },
    profilePictureContainer: {
        position: "relative",
        zIndex: 10,
        elevation: 10
    },
    profileBannerContainer: {
        left: -45,
        alignItems: "flex-start",
        justifyContent: "center",
        alignSelf: "stretch",
        position: "relative",
        zIndex: 5,
        elevation: 5,
        width: "100%"
    },
    profileBanner: {
        backgroundColor: '#eeeeee',
        minWidth: "100%",
        padding: 5
    },
    profileCookbookName: {
        fontSize: 22,
    },
    profileCookbookFollowers: {
        fontSize: 12
    },
    profileBannerText: {
        left: 45,
    },
    followButton: {
        padding: 4,
        paddingRight: 30,
        width: 130,
        alignItems: "flex-end",
        backgroundColor: "#ff6300"
    },
    followButtonPressed: {
        padding: 4,
        paddingRight: 30,
        width: 130,
        alignItems: "flex-end",
        backgroundColor: "#913d00"
    }
})
