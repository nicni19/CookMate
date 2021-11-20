export interface Theme {
    palette: {
        primaryColor: string;
        secondaryColor: string;
        backgroundColor: string;
        primaryTextColor: string;
        secondaryTextColor: string;
        recipeCardColor: string;
    };
}

export const theme: Theme = {
    palette: {
        primaryColor: "#89D9AB",
        secondaryColor: "#288EE4",
        backgroundColor: "#EEEEEE",
        primaryTextColor: "#000000",
        secondaryTextColor: "#BABBBE",
        recipeCardColor: "#609884"
    }
};
